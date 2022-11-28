<script>
	import Nav from '../../components/nav.svelte';
	import DashboardSideBar from '../../components/dashboardSideBar.svelte';
	import ProfileCard from '../../components/profileCard.svelte';
	import currentUser from '$lib/stores/user';
</script>

<div class="sticky top-0 w-full z-40 bg-rural-blue h-28">
	<Nav />
</div>
<div class="flex flex-no-wrap">
	<div class="fixed z-30 bg-rural-blue">
		<DashboardSideBar />
	</div>
	<div
		style="min-height: 88vh;"
		class="md:ml-64 xl:ml-96 container items-center flex flex-col py-2 sm:py-10 md:w-4/5 w-11/12 px-6 overflow--y-scroll "
	>
		<div class="mx-auto mt-10 ">
			<div style="max-width: 600px ;" class="grid grid-cols-2 items-center  bg-white border">
				<div class="col-span-6">
					<img class="w-full" src="/user.png" alt="" />
				</div>
				<div class="col-span-6">
					<p class="text-gray-400">
						Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse
						chronological order.
					</p>
				</div>
			</div>

			<div class="sm:px-6 2xl:container">
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
</div>

<svelte:head>
	<title>View</title>
</svelte:head>
