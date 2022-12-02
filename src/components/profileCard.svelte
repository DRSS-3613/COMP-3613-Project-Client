<script>
	import { goto } from '$app/navigation';
	let edit = 'hidden';
	let view = '';

	let name = 'Daniel Yatali';
	let rating = 4.3;
	let numPosts = 3;
	let numReviews = 2;

	const viewHandler = () => {
		editHandler();
		name = updateName;
		studentID = updateStudentID;
		degree = updateDegree;

		//Todo
		//Take data and make put request to update student
	};
</script>

<div class="main transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300">
	<!--card-->
	<div
		class="relative card bg-white flex flex-col items-center justify-center p-4 shadow-lg rounded-2xl w-64"
	>
		<div class="absolute top-0 right-0 p-4">
			<div class="border rounded-full p-2">
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
						d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
					/>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
					/>
				</svg>
			</div>
		</div>
		<div class="absolute top-0 right-0 p-3">
			<div class="h-5 w-5 bg-red-400 flex items-center justify-center rounded-full">
				<p class="text-white">{numPosts}</p>
			</div>
		</div>

		<div class="image rounded-full p-2 shadow-2xl">
			<div class="profile mx-auto rounded-full w-24 text-blue-600">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-24 w-24"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path
						fill-rule="evenodd"
						d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
						clip-rule="evenodd"
					/>
				</svg>
			</div>
		</div>
		<!-- Start View -->
		<div class="{view} text-center">
			<div class="text-gray-800 text-2xl font-medium mt-4">
				<p>{name}</p>
			</div>
			<div class="text-gray-700 mt-4">
				<div class="flex items-center justify-center">
					<svg
						aria-hidden="true"
						class="w-5 h-5 text-yellow-400"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
						><title>Rating star</title><path
							d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
						/></svg
					>
					<p class="ml-2 text-sm font-bold text-gray-900">{rating}</p>
					<span class="w-1 h-1 mx-1.5 bg-gray-500 rounded-full" />
					<span class="text-sm font-medium text-gray-900">{numReviews} reviews</span>
				</div>
			</div>
			<div class="w-full mt-8">
				<button
					class="bg-blue-500 py-2 px-4 hover:bg-blue-600 text-white w-full font-semibold rounded-lg shadow-lg"
					on:click|preventDefault={() => goto('/view/' + name)}>View</button
				>
			</div>
		</div>
		<!-- End View -->
	</div>
</div>
