<script>
	import { writable } from 'svelte/store';

	let expand = writable(false);
</script>

<aside
	class="sidebar font-inter absolute lg:relative top-0 bottom-0 lg:left-0 z-10 {$expand
		? ' '
		: 'left-[-300px]'} duration-1000"
>
	<span
		class="absolute {$expand
			? 'hidden'
			: ''} lg:hidden text-white text-4xl top-5 -right-12 cursor-pointer"
		on:click={() => expand.update((n) => !n)}
	>
		<i class="bi bi-filter-left px-2 bg-gray-900 rounded-md"></i>
	</span>
	<div class="p-2 w-[300px] overflow-y-auto text-center bg-white shadow h-screen">
		<div class="text-gray-900 text-xl">
			<div class="p-2.5 mt-1 flex items-center rounded-md">
				<i class="bi bi-app-indicator px-2 py-1 bg-blue-600 rounded-md text-white"></i>
				<h1 class="text-[15px] ml-3 text-xl text-blue-500 font-bold">Doscom Admin</h1>
				<i
					class="bi bi-x ml-20 cursor-pointer text-gray-900 lg:hidden"
					on:click={() => expand.update((n) => !n)}
				></i>
			</div>
			<hr class="my-2 text-gray-300" />
			<div>
				<a
					href="/admin/posts-data"
					class="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer text-gray-600 hover:text-white hover:bg-blue-600"
				>
					<i class="bi bi-book"></i>
					<span class="text-[15px] ml-4">Posts</span>
				</a>
				<a
					href="/admin/categories-data"
					class="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer text-gray-600 hover:text-white hover:bg-blue-600"
				>
					<i class="bi bi-bookmark-fill"></i>
					<span class="text-[15px] ml-4">Categories</span>
				</a>

				<hr class="my-2 text-blue-600" />
				<div
					class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer text-gray-600 hover:text-white hover:bg-blue-600"
				>
					<i class="bi bi-person-circle"></i>
					<span class="text-[15px] ml-4">Profile</span>
				</div>
				<div
					class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer text-gray-600 hover:text-white hover:bg-blue-600"
				>
					<i class="bi bi-box-arrow-in-right"></i>
					<span class="text-[15px] ml-4">Logout</span>
				</div>
			</div>
		</div>
	</div>
</aside>

<style>
	.rotate-0 {
		transform: rotate(0);
	}
	.rotate-180 {
		transform: rotate(180deg);
	}
</style>
