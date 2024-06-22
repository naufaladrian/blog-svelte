<script>
	import Hero from '$lib/components/Hero.svelte';
	import CurrentPost from '$lib/components/CurrentPost.svelte';
</script>

<Hero />
<CurrentPost />
<section class=" mt-16 px-7 md:px-20">
	<h1 class=" text-5xl mb-4 text-center">ALL POST</h1>
	<hr class=" border border-black w-full mx-auto my-1" />
	<hr class=" border border-black w-full mx-auto my-1 mb-8" />
	<div class="w-full flex flex-wrap justify-between gap-y-8">
		{#each [1, 2, 3, 4] as x}
			<div class="card rounded-none shadow-none max-w-[600px] min-w-[300px]">
				<img src="/img/camp.jpg" alt="card-img" class="aspect-[4/3] object-cover" />
				<div class="card-body p-0 my-4">
					<h2 class="card-header text-2xl">My Peaceful Forest Camping Adventure</h2>
					<div class="card-footer justify-normal gap-x-4">
						<p>Sunday, July 14, 2019</p>
						<p class="px-2 bg-gray-300 rounded-full">5 min read</p>
					</div>
				</div>
				<hr class="border border-black w-full mb-4" />
			</div>
		{/each}
	</div>
	<a href="/" class="bold text-3xl inline-block text-right w-full my-8">MORE POSTS &rarr;</a>
</section>
