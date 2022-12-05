<script>
	import { env } from '$lib/env.js';
	import ProfileCard from '../../components/profileCard.svelte';
	import { goto } from '$app/navigation';

	import { onMount } from 'svelte/internal';

	import currentUser from '$lib/stores/user';

	onMount(async () => {
		if (!$currentUser.loggedIn) {
			goto('/signin');
			return;
		} else {
			try {
				const rawResponse = await fetch(
					env.API_URL + '/api/users/' + $currentUser.id + '/summary',
					{
						method: 'GET',
						headers: {
							Accept: 'application/json',
							'Content-Type': 'application/json',
							Authorization: 'JWT ' + $currentUser.access_token
						}
					}
				);
				const response = await rawResponse.json();
				if (rawResponse.status === 200) {
					$currentUser.avatar = response.avatar;
					$currentUser.images = response.images.sort((a, b) => a.rank - b.rank);
					$currentUser.averageRating = response.average_rating ? response.average_rating : 0;
					$currentUser.ratings = response.ratings;
					console.log('user', $currentUser);
				}
			} catch (error) {
				console.error(error);
			}

			let feed = {};
			try {
				const rawResponse = await fetch(env.API_URL + '/api/feed/receiver/' + $currentUser.id, {
					method: 'GET',
					headers: {
						Accept: 'application/json',
						'Content-Type': 'application/json',
						Authorization: 'JWT ' + $currentUser.access_token
					}
				});
				const response = await rawResponse.json();
				if (rawResponse.status === 200) {
					console.log('Feed response', response);
					for (let profile of response) {
						if (profile.seen) {
							continue;
						}
						try {
							const rawResponse = await fetch(
								env.API_URL + '/api/users/' + profile.sender_id + '/summary',
								{
									method: 'GET',
									headers: {
										Accept: 'application/json',
										'Content-Type': 'application/json',
										Authorization: 'JWT ' + $currentUser.access_token
									}
								}
							);
							const response = await rawResponse.json();
							if (rawResponse.status === 200) {
								let item = {};
								item.avatar = response.avatar;
								item.id = response.id;
								item.images = response.images;
								item.averageRating = response.average_rating ? response.average_rating : 0;
								item.ratings = response.ratings.length;
								item.feed_id = profile.id;
								item.username = response.username;
								feed[item.username] = item;
								console.log('Formatted Feeds', item);
							}
						} catch (error) {
							console.error(error);
						}
					}
				}
			} catch (error) {
				console.error(error);
			}
			$currentUser.feed = feed;
			console.log('Final Feed', $currentUser.feed);
		}
	});
</script>

<div class="grid w-full justify-center items-center p-2">
	{#if $currentUser.feed}
		{#if Object.entries($currentUser.feed).length === 0}
			All Profiles viewed, check back later!
		{:else}
			<div class="grid gap-9 xl:grid-cols-3 lg:grid-cols-2">
				{#each Object.entries($currentUser.feed) as [title, profile]}
					{#if Object.entries.length === 1}
						<div class="xl:col-span-3 lg:col-span-2">
							<ProfileCard
								numPosts={profile.images.length}
								name={profile.username}
								rating={profile.averageRating}
								numRatings={profile.ratings}
								image={profile.avatar}
							/>
						</div>
					{:else}
						<div>
							<ProfileCard
								numPosts={profile.images.length}
								name={profile.username}
								rating={profile.averageRating}
								numRatings={profile.ratings.length}
							/>
						</div>
					{/if}
				{/each}
			</div>
		{/if}
	{/if}
</div>

<svelte:head>
	<title>Home</title>
</svelte:head>
