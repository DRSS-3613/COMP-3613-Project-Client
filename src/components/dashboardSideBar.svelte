<script>
	import SideBarUser from './sideBarUser.svelte';
	import { goto } from '$app/navigation';
	let openSideBar = 'flex';
	let closeSideBar = 'none';
	let sideBarMove = 'translateX(-260px)';
	function sidebarHandler() {
		if (openSideBar == 'flex') {
			openSideBar = 'none';
			closeSideBar = 'flex';
			sideBarMove = 'translateX(0px)';
		} else {
			closeSideBar = 'none';
			openSideBar = 'flex';
			sideBarMove = 'translateX(-260px)';
		}
	}
	//Options
	const options = [
		{
			name: 'Home',
			icon: `<svg class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
			fill="currentColor"
			xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
  <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
</svg>
`,
			link: '/home'
		},
		{
			name: 'Profile',
			icon: `<svg class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
			fill="currentColor"
			xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
</svg>
`,
			link: '/view/my-profile'
		},
		{
			name: 'Settings',
			icon: `<svg class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
			xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>
`,
			link: '/settings'
		},
		{
			name: 'Logout',

			icon: `<svg class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
			fill="currentColor"
			xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path fillRule="evenodd" d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm5.03 4.72a.75.75 0 010 1.06l-1.72 1.72h10.94a.75.75 0 010 1.5H10.81l1.72 1.72a.75.75 0 11-1.06 1.06l-3-3a.75.75 0 010-1.06l3-3a.75.75 0 011.06 0z" clipRule="evenodd" />
</svg>
`,
			link: '/logout'
		}
	];
</script>

<!-- Desktop view -->
<div
	style="min-height: 88.75vh"
	class="w-64 absolute md:relative md:h-full flex-col justify-between hidden md:flex"
>
	<div class="px-8">
		<div class="mt-8 text-center">
			<SideBarUser />
		</div>
		<aside aria-label="Sidebar">
			<div class="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark">
				<ul class="space-y-2">
					{#each options as option}
						<!-- content here -->
						<li>
							<a
								href={option.link}
								class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg  hover:bg-gray-100"
							>
								{@html option.icon}

								<span class="ml-3">{option.name}</span>
							</a>
						</li>
					{/each}
				</ul>
			</div>
		</aside>
	</div>
</div>

<!-- Mobile view -->
<div
	style="min-height:120vh;  transform: {sideBarMove};"
	class="w-64 z-40 absolute bg-dark-grey shadow md:h-full flex-col justify-between md:hidden transition duration-150 ease-in-out"
	id="mobile-nav"
>
	<button
		style="display: {openSideBar};"
		aria-label="toggle sidebar"
		id="openSideBar"
		class="h-10 w-10 bg-rural-blue absolute right-0 mt-16 -mr-10 flex items-center shadow rounded-tr rounded-br justify-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 rounded focus:ring-gray-800"
		on:click={sidebarHandler}
	>
		<img
			src="https://tuk-cdn.s3.amazonaws.com/can-uploader/light_with_icons_at_bottom-svg7.svg"
			alt="toggler"
		/>
	</button>
	<button
		style="display: {closeSideBar};"
		aria-label="Close sidebar"
		id="closeSideBar"
		class="h-10 w-10 bg-rural-blue absolute right-0 mt-16 -mr-10 flex items-center shadow rounded-tr rounded-br justify-center cursor-pointer text-white"
		on:click={sidebarHandler}
	>
		<img
			src="https://tuk-cdn.s3.amazonaws.com/can-uploader/light_with_icons_at_bottom-svg8.svg"
			alt="cross"
		/>
	</button>
	<div class="px-8">
		<div class="mt-8 text-center">
			<SideBarUser />
		</div>
		<aside aria-label="Sidebar">
			<div class="overflow-y-auto py-4 px-3 bg-gray-50 rounded">
				<ul class="space-y-2">
					{#each options as option}
						<!-- content here -->
						<li>
							<a
								href={option.link}
								class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg -white hover:bg-gray-100"
							>
								{@html option.icon}

								<span class="ml-3">{option.name}</span>
							</a>
						</li>
					{/each}
				</ul>
			</div>
		</aside>
	</div>
</div>
