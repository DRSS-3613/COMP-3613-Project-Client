<script>
	import Nav from '../../components/nav.svelte';
	import DashboardSideBar from '../../components/dashboardSideBar.svelte';
</script>

<div>
	<div class="bg-rural-blue h-28">
		<Nav />
	</div>
	<div class="flex w-full">
		<div class="md:w-64">
			<div class="sticky top-0 z-20 bg-dark-grey">
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
	<style>
		body {
			background-color: #111827;
		}
	</style>
</svelte:head>
