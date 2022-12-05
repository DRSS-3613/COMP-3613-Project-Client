<script>
	import Dragdrop from './../../../../components/dragdrop.svelte';
	/** @type {import('./$types').PageData} */
	export let data;
	console.log(data.id);
</script>

<div>
	<Dragdrop username={data.id} />
</div>
