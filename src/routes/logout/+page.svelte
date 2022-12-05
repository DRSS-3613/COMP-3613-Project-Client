<script>
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte/internal';
	import currentUser from '$lib/stores/user';

	onMount(async () => {
		localStorage.removeItem('access_token');
		currentUser.set({ username: '', access_token: '', loggedIn: false, id: '', images: [] });
		goto('/signin');
	});
</script>
