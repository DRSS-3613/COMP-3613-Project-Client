<script>
	import { goto } from '$app/navigation';
	import currentUser from '$lib/stores/user.js';
	import { onMount } from 'svelte/internal';
	import { env } from '$lib/env.js';
	/** @type {import('./$types').PageData} */
	export let data;

	let profile = {
		avatar: '',
		id: '',
		username: '',
		numPosts: 0,
		numRatings: 0,
		averageRating: 0,
		images: [],
		seen: false,
		feed_id: 0
	};
	onMount(() => {
		let profiles = $currentUser.feed;
		if (profiles) {
			let user = profiles[data.id];
			console.log('User', user);
			if (user) {
				profile.avatar = user.avatar;
				profile.id = user.id;
				profile.username = user.username;
				profile.numPosts = user.images.length;
				profile.numRatings = user.ratings;
				profile.averageRating = user.averageRating ? user.averageRating : 0;
				profile.feed_id = user.feed_id;
				profile.images = user.images.sort((a, b) => a.rank - b.rank);
			}
			console.log('Profile', profile);
		}
	});

	let rankingOptions = [
		{
			id: 1,
			color: 'text-gray-300'
		},
		{
			id: 2,
			color: 'text-gray-300'
		},
		{
			id: 3,
			color: 'text-gray-300'
		},
		{
			id: 4,
			color: 'text-gray-300'
		},
		{
			id: 5,
			color: 'text-gray-300'
		}
	];
	const rank = async (n) => {
		//change all the colors to yellow before the selected one
		let newList = rankingOptions;
		newList.forEach((option, index) => {
			if (index < n) {
				option.color = 'text-yellow-400';
			} else {
				option.color = 'text-gray-300';
			}
		});
		rankingOptions = newList;
		try {
			let response = await fetch(env.API_URL + '/api/ratings', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `JWT ${$currentUser.access_token}`
				},
				body: JSON.stringify({
					rating: n,
					rated_id: profile.id,
					rater_id: $currentUser.id
				})
			});
			let result = await response.json();
			console.log('saved rating', result);
			if (response.status === 201) {
				try {
					let response = await fetch(env.API_URL + '/api/feed/' + profile.feed_id + '/view', {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
							Authorization: `JWT ${$currentUser.access_token}`
						}
					});
					let result = await response.json();
					console.log('update feed', result);
				} catch (err) {
					console.log(err);
				}
			}
		} catch (e) {
			console.log(e);
		}
	};

	const posts = [
		{
			image:
				'https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
			ratings: 4,
			rating: 7
		},
		{
			image:
				'https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
			ratings: 4,
			rating: 7
		},
		{
			image:
				'https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
			ratings: 4,
			rating: 7
		},
		{
			image:
				'https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
			ratings: 4,
			rating: 7
		},
		{
			image:
				'https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
			ratings: 4,
			rating: 7
		}
	];
</script>

<!-- <main class="w-full bg-gray-100 bg-opacity-25 flex items-center justify-center"> -->
<div class="w-full bg-white">
	<header class="w-full flex flex-wrap items-center p-4 md:py-8">
		<div class="md:w-3/12 md:ml-16">
			<!-- profile image -->
			<img
				class="w-20 h-20 md:w-40 md:h-40 object-cover rounded-full
                     border-2"
				src={profile.avatar}
				alt="profile"
			/>
		</div>

		<!-- profile meta -->
		<div class="w-8/12 md:w-7/12 ml-4">
			<div class="md:flex md:flex-wrap md:items-center mb-4">
				<h2 class="text-3xl inline-block font-light md:mr-2 mb-2 sm:mb-0">{profile.username}</h2>

				<!-- badge -->
				<span
					class="inline-block fas fa-certificate fa-lg text-blue-500 
                               relative mr-6 text-xl transform -translate-y-2"
				>
					<i
						class="fas fa-check text-white text-xs absolute inset-x-0
                               ml-1 mt-px"
					/>
				</span>
				<div class="flex items-center">
					<p class="text-yellow-400 text-xl">Rate:</p>
					{#each rankingOptions as option}
						<svg
							on:click={() => rank(option.id)}
							aria-hidden="true"
							class="w-8 h-8 {option.color} hover:cursor-pointer"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
							><title>star</title><path
								d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
							/></svg
						>
					{/each}
				</div>
				<div>
					<button
						class="bg-cyan-500 p-2 hover:bg-cyan-600 text-white font-semibold rounded-lg shadow-lg "
						on:click|preventDefault={() => goto('/create/rank/' + data.id)}>Rank</button
					>
				</div>
			</div>

			<!-- post, following, followers list for medium screens -->
			<ul class="hidden md:flex space-x-8 mb-4">
				<li>
					<span class="font-semibold">{profile.numPosts}</span>
					Posts
				</li>

				<li>
					<span class="font-semibold">{profile.numRatings}</span>
					Rates
				</li>
				<li>
					<span class="font-semibold">{profile.averageRating}</span>
					<svg
						aria-hidden="true"
						class="w-6 h-6 text-yellow-400 inline"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
						><title>star</title><path
							d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
						/></svg
					>
					Avg Rating
				</li>
			</ul>
		</div>
	</header>

	<!-- posts -->
	<div class="px-px md:px-3">
		<!-- user following for mobile only -->
		<ul
			class="flex md:hidden justify-around space-x-8 border-t 
                text-center p-2 text-gray-600 leading-snug text-sm"
		>
			<li>
				<span class="font-semibold text-gray-800 block">{profile.numPosts}</span>
				Posts
			</li>

			<li>
				<span class="font-semibold text-gray-800 block">{profile.numRatings}</span>
				Rates
			</li>
			<li>
				<span class="font-semibold text-gray-800 block">{profile.averageRating}</span>
				Rating
			</li>
		</ul>
		<!-- flexbox grid -->
		<div class="flex flex-wrap -mx-px md:-mx-3">
			{#each profile.images as post, index}
				<div class="w-1/3 p-px md:px-3">
					<!-- post 1-->
					<div>
						<article class="post bg-gray-100 text-white relative pb-full md:mb-6">
							<!-- post image-->
							<img
								class="w-full h-full absolute left-0 top-0 object-cover"
								src={post.url}
								alt="post"
							/>

							<i class="fas fa-square absolute right-0 top-0 m-1" />
							<!-- overlay-->
							<div
								class="overlay bg-gray-800 bg-opacity-25 w-full h-full absolute 
                                left-0 top-0 hidden"
							>
								<div
									class="flex justify-center items-center 
										space-x-4 h-full"
								>
									<span class="p-2 inline-flex">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke-width="1.5"
											stroke="currentColor"
											class="w-6 h-6"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
											/>
										</svg>
										{index + 1}
									</span>

									<span class="p-2 inline-flex">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke-width="1.5"
											stroke="currentColor"
											class="w-6 h-6"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
											/>
										</svg>
										{post.num_rankings}
									</span>
								</div>
							</div>
						</article>
					</div>
				</div>
			{/each}

			{#if profile.images.length < 4}
				<!-- content here -->
				{#each Array(4 - profile.images.length) as _}
					<!-- column -->
					<div class="w-1/3 p-px md:px-3">
						<!-- post 1-->
						<article class="post bg-gray-100 text-white relative pb-full md:mb-6">
							<!-- post image-->
							<img
								class="w-full h-full absolute left-0 top-0 object-cover"
								src="/no-image.png"
								alt="post"
							/>
						</article>
					</div>
				{/each}
			{/if}
		</div>
	</div>
</div>
<!-- </main> -->

<svelte:head>
	<title>View</title>
</svelte:head>

<style>
	.pb-full {
		padding-bottom: 100%;
	}

	/* hide search icon on search focus */
	.search-bar:focus + .fa-search {
		display: none;
	}

	@media screen and (min-width: 768px) {
		.post:hover .overlay {
			display: block;
		}
	}
</style>
