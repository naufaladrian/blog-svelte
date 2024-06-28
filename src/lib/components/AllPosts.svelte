<script>
	import CardPost from '$lib/components/ui/CardPost.svelte';
</script>

<section class=" mt-16 px-7 md:px-20">
	<h1 class=" text-5xl mb-4 text-center font-kaisei font-bold">ALL POST</h1>
	<hr class=" border border-black w-full mx-auto my-1" />
	<hr class=" border border-black w-full mx-auto my-1 mb-8" />
	<div class="w-full flex flex-wrap justify-between gap-y-8">
		{#each [1, 2, 3, 4] as x}
			<CardPost />
		{/each}
	</div>
	<a href="/blog" class="font-bold text-3xl inline-block text-right w-full my-8 font-kaisei"
		>MORE POSTS &rarr;</a
	>
</section>
