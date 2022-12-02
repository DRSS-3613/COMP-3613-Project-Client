<script>
	let avatar, fileinput;
	const onFileSelected = (e) => {
		let image = e.target.files[0];
		uploadImage(image);
		let reader = new FileReader();
		reader.readAsDataURL(image);
		reader.onload = (e) => {
			console.log(e.target.result);
			avatar = e.target.result;
		};
	};
	//submit image to imgbb
	const uploadImage = async (image) => {
		const formData = new FormData();
		formData.append('image', image);
		const res = await fetch('https://api.imgbb.com/1/upload?key=fea6b09c3477595b6e498116bfeedb0a', {
			method: 'POST',
			body: formData
		});
		const data = await res.json();
		console.log(data.data.url);
		avatar = data.data.url;
	};
</script>

<div style="width:500px ;" class="bg-white p-3 rounded-xl">
	<p class="block text-sm font-medium">Image</p>
	<div
		class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md"
	>
		{#if avatar}
			<div class="">
				<div>
					<img class="" src={avatar} alt="d" />
				</div>
			</div>
		{:else}
			<div class="space-y-1 text-center">
				<svg
					class="mx-auto"
					stroke="currentColor"
					fill="none"
					viewBox="0 0 48 48"
					aria-hidden="true"
				>
					<path
						d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
				<div class="flex text-sm text-gray-600">
					<label
						for="file-upload"
						class="relative cursor-pointer rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
					>
						<span
							class=""
							on:click={() => {
								fileinput.click();
							}}>Upload a file</span
						>
						<input
							style="display:none"
							type="file"
							accept=".jpg, .jpeg, .png"
							on:change={(e) => onFileSelected(e)}
							bind:this={fileinput}
						/>
					</label>
					<p class="pl-1 ">or drag and drop</p>
				</div>
				<p class="text-xs">PNG, JPG, GIF up to 10MB</p>
			</div>
		{/if}
	</div>
	{#if avatar}
		<div class="">
			<button
				class="bg-blue-500 p-6 hover:bg-blue-600 text-white w-full font-semibold rounded-lg shadow-lg"
				on:click|preventDefault={() => console.log('click')}>Post</button
			>
		</div>
	{/if}
</div>
