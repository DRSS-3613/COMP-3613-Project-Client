<script>
	import { env } from '$lib/env.js';
	import ProfileCard from '../../components/profileCard.svelte';
</script>

<div class="grid w-full justify-center items-center p-2">
	<div class="grid gap-9 xl:grid-cols-3 lg:grid-cols-2">
		<div>
			<ProfileCard />
		</div>
		<div>
			<ProfileCard />
		</div>
		<div>
			<ProfileCard />
		</div>
		<div>
			<ProfileCard />
		</div>
		<div>
			<ProfileCard />
		</div>
		<div>
			<ProfileCard />
		</div>
	</div>
</div>

<svelte:head>
	<title>Home</title>
</svelte:head>
