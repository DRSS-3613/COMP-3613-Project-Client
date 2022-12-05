<script>
	import '../app.css';
	import currentUser from '$lib/stores/user';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte/internal';
	import { env } from '$lib/env.js';

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
					console.log('response', response);
					console.log('user', $currentUser);
				}
			} catch (error) {
				console.error(error);
			}
		}
	});
</script>

<slot />
