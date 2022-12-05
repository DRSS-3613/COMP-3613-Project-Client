<script>
	import Nav from '../../components/nav.svelte';
	import DashboardSideBar from '../../components/dashboardSideBar.svelte';
	import currentUser from '$lib/stores/user';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte/internal';
	import { env } from '$lib/env.js';

	// onMount(async () => {
	// 	if (!$currentUser.loggedIn) {
	// 		goto('/signin');
	// 		return;
	// 	} else {
	// 		try {
	// 			const rawResponse = await fetch(
	// 				env.API_URL + '/api/users/' + $currentUser.id + '/summary',
	// 				{
	// 					method: 'GET',
	// 					headers: {
	// 						Accept: 'application/json',
	// 						'Content-Type': 'application/json',
	// 						Authorization: 'JWT ' + $currentUser.access_token
	// 					}
	// 				}
	// 			);
	// 			const response = await rawResponse.json();
	// 			if (rawResponse.status === 200) {
	// 				$currentUser.avatar = response.avatar;
	// 				$currentUser.images = response.images;
	// 				$currentUser.averageRating = response.average_rating ? response.average_rating : 0;
	// 				$currentUser.ratings = response.ratings;
	// 				console.log('user', $currentUser);
	// 			}
	// 		} catch (error) {
	// 			console.error(error);
	// 		}
	// 	}
	// });
</script>

<div>
	<div class="bg-rural-blue h-28">
		<Nav />
	</div>
	<div class="flex w-full">
		<div class="md:w-64">
			<div class="sticky top-0 z-20">
				<DashboardSideBar />
			</div>
		</div>
		<div class="flex w-full justify-center items-center">
			<slot />
		</div>
	</div>
</div>

<svelte:head>
	<title>Home</title>
	<link rel="icon" href="https://i.imgur.com/0CUwW1S.jpeg" />
	<!-- <style>
		body {
			background-color: #b7f2f8;
		}
	</style> -->
	<style>
		body {
			background: rgb(24, 168, 188);
			background: radial-gradient(
				circle,
				rgba(24, 168, 188, 1) 0%,
				rgba(26, 184, 206, 1) 4%,
				rgba(28, 199, 223, 1) 17%,
				rgba(42, 206, 228, 1) 31%,
				rgba(60, 210, 231, 1) 49%,
				rgba(77, 214, 233, 1) 63%,
				rgba(112, 222, 237, 1) 77%,
				rgba(147, 230, 241, 1) 100%,
				rgba(199, 242, 248, 1) 100%
			);
		}
	</style>
</svelte:head>
