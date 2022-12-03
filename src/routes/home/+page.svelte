<script>
	import Nav from '../../components/nav.svelte';
	import { env } from '$lib/env.js';
	import DashboardSideBar from '../../components/dashboardSideBar.svelte';
	import ProfileCard from '../../components/profileCard.svelte';
</script>

<div>
	<div class="bg-rural-blue h-28">
		<Nav />
	</div>
	<div class="flex w-full ">
		<div class="md:w-64">
			<div class="sticky top-0 border-none">
				<DashboardSideBar />
			</div>
		</div>
		<div class="grid w-full justify-center items-center p-2 ">
			<div class="grid gap-6 xl:grid-cols-3 lg:grid-cols-2">
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
	</div>
</div>

<svelte:head>
	<title>Home</title>
	<link rel="icon" href="https://i.imgur.com/0CUwW1S.jpeg" />
	<style>
		body {
			background-color: #b7f2f8;
		}
	</style>
</svelte:head>
