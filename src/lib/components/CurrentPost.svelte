<section class="pt-16 grid grid-cols-1 lg:grid-cols-2 gap-x-6 px-7 md:px-20">
	<div class="card border border-black min-w-[90%] p-4">
		<img src="/img/camp.jpg" alt="card-img" class="aspect-[4/3] rounded-t-xl object-cover" />
		<div class="card-body p-0">
			<h2 class="card-header text-3xl font-medium font-inter">
				My Peaceful Forest Camping Adventure
			</h2>
			<p class="text-content2 line-clamp-1 font-kaisei">
				Discover the calming beauty of nature, the challenge of the great outdoors, and the joy of
				camping with friends.
			</p>
			<div class="card-footer font-inter">
				<p>Sunday, July 14, 2019</p>
				<p class=" px-2 bg-gray-300 rounded-full">5 min read</p>
			</div>
		</div>
	</div>
	<div class=" max-w-full flex flex-col gap-y-8">
		<h2 class="text-3xl mt-16 lg:mt-0 font-inter font-medium">Recent Post</h2>
		<div class=" flex-1 flex flex-col gap-y-4 justify-between">
			{#each [1, 2, 3] as x}
				<div class="flex gap-x-4">
					<img
						src="/img/camp.jpg"
						alt="card-img"
						class="aspect-square sm:aspect-[4/3] rounded-xl w-1/3 object-cover"
					/>
					<div class="w-2/3 md:flex-[3] lg:flex-[2] flex flex-col justify-between">
						<div class="flex flex-col gap-y-1">
							<h2
								class="card-header text-2xl mb-2 line-clamp-1 md:line-clamp-2 font-inter font-medium"
							>
								My Peaceful Forest Camping Adventure
							</h2>
							<p class="text-content2 line-clamp-1 md:line-clamp-2 lg:line-clamp-1 font-kaisei">
								Discover the calming beauty of nature, the challenge of the great outdoors, and the
								joy of camping with friends.
							</p>
						</div>
						<div class="card-footer text-sm font-inter">
							<p>Sunday, July 14, 2019</p>
							<p class="px-2 bg-gray-300 rounded-full hidden md:inline">5 min read</p>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
