<script>
	import { env } from '$lib/env.js';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte/internal';
	import currentUser from '$lib/stores/user';
	import { draggable } from './dragdrop.js';
	import { crossfade } from 'svelte/transition';
	import { quintOut, elasticOut } from 'svelte/easing';
	import { flip } from 'svelte/animate';

	export let username;

	let shelf = [];
	let cart = [];

	const postRank = async (ranking) => {
		console.log(ranking);
		for (let i = 0; i < ranking.length; i++) {
			const response = await fetch(`${env.API_URL}/api/ranking`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: 'JWT ' + $currentUser.access_token
				},
				body: JSON.stringify({
					ranker_id: $currentUser.id,
					image_id: ranking[i].id,
					rank: i + 1
				})
			});
			if (response.ok) {
				const data = await response.json();
				console.log(data);
				goto('/home');
			} else {
				console.log('error');
			}
		}
	};

	onMount(async () => {
		let profiles = $currentUser.feed;
		if (profiles[username] !== undefined) {
			cart = profiles[username].images;
			let temp = [];
			for (let i = 0; i < cart.length; i++) {
				temp.push(null);
			}
			shelf = temp;
		}
	});

	function putInShelf(item, index) {
		const oldItem = shelf[index];
		const oldShelfIndex = shelf.indexOf(item);
		if (cart.indexOf(item) !== -1) cart.splice(cart.indexOf(item), 1);
		if (oldShelfIndex !== -1) shelf[oldShelfIndex] = oldItem;
		else if (oldItem) cart.push(oldItem);
		shelf[index] = item;
		cart = cart;
		if (cart.length === 0) {
			console.log('done');
			postRank(shelf);
		}
	}

	function putInCart(item) {
		if (cart.indexOf(item) !== -1) cart.splice(cart.indexOf(item), 1);
		if (shelf.indexOf(item) !== -1) shelf[shelf.indexOf(item)] = null;
		cart.push(item);
		cart = cart;
	}

	const [send, receive] = crossfade({
		duration: (d) => 600,
		easing: elasticOut,
		fallback(node, params) {
			const style = getComputedStyle(node);
			const transform = style.transform === 'none' ? '' : style.transform;

			return {
				duration: 600,
				easing: quintOut,
				css: (t) => `
        transform: ${transform} scale(${t});
        opacity: ${t}
      `
			};
		}
	});
</script>

<div class="grid grid-cols-2 gap-8">
	<div class="shelf flex flex-col bg-gray-300 rounded-xl p-2">
		{#each shelf as item, index}
			<div class="slot bg-slate-50 rounded-xl" on:dropped={(e) => putInShelf(e.detail, index)}>
				{#if item}
					{#each [item] as item (item.id)}
						<div
							class="item rounded-xl bg-slate-50 p-1"
							use:draggable={{ data: item, targets: ['.cart', '.slot', '.slot .item'] }}
							in:receive={item.id}
							out:send={item.id}
							on:dropped={(e) => putInShelf(e.detail, index)}
						>
							<img class="w-full h-full p-2 rounded-xl" src={item.url} alt="" />
						</div>
					{/each}
				{/if}
			</div>
		{/each}
	</div>
	<div
		class="cart flex flex-col bg-gray-300 p-2 rounded-xl"
		on:dropped={(e) => putInCart(e.detail)}
	>
		{#each cart as item, index (item.id)}
			<div
				class="item rounded-xl bg-slate-50 p-1"
				animate:flip
				use:draggable={{ data: item, targets: ['.slot', '.slot .item'] }}
				in:receive={item.id}
				out:send={item.id}
			>
				<img class="w-full h-full p-2 rounded-xl" src={item.url} alt="" />
			</div>
		{/each}
	</div>
</div>

<style>
	.slot {
		position: relative;
		display: inline-block;
		/* background: #eee; */
		box-shadow: 5px 5px 10px -10px black inset;
		width: 200px;
		height: 200px;
		margin: 3px;
		vertical-align: top;
	}
	.cart {
		position: relative;
		/* background: #eee; */
		box-shadow: 5px 5px 10px -10px black inset;
		min-height: 64px;
	}
	.item {
		height: 200px;
		width: 200px;
		position: relative;
		display: inline-block;
		/* background: rgba(255, 255, 255, 0.5); */
		margin: 4px;
		box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
	}
	.slot .item {
		position: absolute;
	}
	:global(.dragged) {
		pointer-events: none;
		z-index: 100;
	}
	/* :global(.slot.droptarget, .cart.droptarget) { */
	/* background: gray; */
	/* } */
</style>
