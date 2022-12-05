<script>
	import currentUser from '$lib/stores/user';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte/internal';
	import { env } from '$lib/env.js';

	// const posts = [
	// 	{
	// 		image:
	// 			'https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
	// 		ratings: 4,
	// 		rating: 7
	// 	},
	// 	{
	// 		image:
	// 			'https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
	// 		ratings: 4,
	// 		rating: 7
	// 	},
	// 	{
	// 		image:
	// 			'https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
	// 		ratings: 4,
	// 		rating: 7
	// 	},
	// 	{
	// 		image:
	// 			'https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
	// 		ratings: 4,
	// 		rating: 7
	// 	},
	// 	{
	// 		image:
	// 			'https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
	// 		ratings: 4,
	// 		rating: 7
	// 	}
	// ];
</script>

<!-- <main class="w-full bg-gray-100 bg-opacity-25 flex items-center justify-center"> -->
<div class="w-full bg-white">
	<header class="w-full flex flex-wrap items-center p-4 md:py-8">
		<div class="md:w-3/12 md:ml-16">
			<!-- profile image -->
			<img
				class="w-20 h-20 md:w-40 md:h-40 object-cover rounded-full
                     border-2"
				src="https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
				alt="profile"
			/>
		</div>

		<!-- profile meta -->
		<div class="w-8/12 md:w-7/12 ml-4">
			<div class="md:flex md:flex-wrap md:items-center mb-4">
				<h2 class="text-3xl inline-block font-light md:mr-2 mb-2 sm:mb-0">mrtravlerrr_</h2>

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

				<!-- rate button -->
				<a
					href="#"
					class="bg-blue-500 px-2 py-1 
                        text-white font-semibold text-sm rounded block text-center 
                        sm:inline-block">Edit Profile</a
				>
			</div>

			<!-- post, following, followers list for medium screens -->
			<ul class="hidden md:flex space-x-8 mb-4">
				<li>
					<span class="font-semibold">2</span>
					posts
				</li>

				<li>
					<span class="font-semibold">10</span>
					Rates
				</li>
				<li>
					<span class="font-semibold">3</span>
					Rating
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
				<span class="font-semibold text-gray-800 block">136</span>
				posts
			</li>

			<li>
				<span class="font-semibold text-gray-800 block">40.5k</span>
				Rates
			</li>
			<li>
				<span class="font-semibold text-gray-800 block">302</span>
				Rating
			</li>
		</ul>
		<!-- flexbox grid -->
		<div class="flex flex-wrap -mx-px md:-mx-3">
			{#each $currentUser.images as post}
				<!-- content here -->
				<!-- column -->
				<div class="w-1/3 p-px md:px-3">
					<!-- post 1-->
					<a href="#">
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
										{post.rank}
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
					</a>
				</div>
			{/each}
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
