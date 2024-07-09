<script>
	import SideBar from '$lib/components/ui/SideBar.svelte';
</script>

<section class="flex">
	<SideBar />
	<div class="overflow-y-auto max-h-screen p-10 w-full bg-gray-100">
		<slot />
	</div>
</section>
