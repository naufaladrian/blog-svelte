<script>
	import { writable } from 'svelte/store';
	import Swal from 'sweetalert2';

	// Sample data
	let categories = writable(
		Array.from({ length: 50 }, (_, idx) => ({
			id: idx + 1,
			name: `Category ${idx + 1}`
		}))
	);

	const itemsPerPage = 8;
	let currentPage = writable(1);

	let totalPages = writable(1);
	categories.subscribe((value) => {
		totalPages.set(Math.ceil(value.length / itemsPerPage));
	});

	function changePage(page) {
		if (page > 0 && page <= $totalPages) {
			currentPage.set(page);
		}
	}

	function deleteModal(id) {
		Swal.fire({
			title: 'Are you sure?',
			text: 'You will not be able to recover this category!',
			icon: 'warning',
			showCancelButton: true,
			confirmButtonText: 'Yes, delete it!',
			cancelButtonText: 'No, keep it'
		}).then((result) => {
			if (result.isConfirmed) {
				deleteCategoryById(id);
				Swal.fire('Deleted!', 'Your category has been deleted.', 'success');
			}
		});
	}

	function deleteCategoryById(id) {
		categories.update((categories) => categories.filter((category) => category.id !== id));
		// Adjust currentPage if it exceeds the new total number of pages
		if ($currentPage > $totalPages) {
			currentPage.set($totalPages);
		}
	}
</script>

<div class="flex justify-between items-center mt-4">
	<h1 class="text-4xl font-bold text-blue-600 mb-4">Categories</h1>
	<a
		href=""
		class="font-medium bg-blue-600 px-4 py-2 text-base rounded-md shadow text-white hover:underline"
		>Create New Category</a
	>
</div>
<div class="relative overflow-x-auto shadow-md sm:rounded-lg border border-gray-200">
	<table class="w-full text-base text-left rtl:text-right text-gray-500">
		<thead class="text-gray-700 uppercase bg-gray-50">
			<tr>
				<th scope="col" class="px-6 py-3">Category ID</th>
				<th scope="col" class="px-6 py-3">Category Name</th>
				<th scope="col" class="px-6 py-3">Action</th>
			</tr>
		</thead>
		<tbody>
			{#each $currentPage > 0 && $categories.slice(($currentPage - 1) * itemsPerPage, $currentPage * itemsPerPage) as category, idx}
				<tr class="odd:bg-white even:bg-gray-50 border-b">
					<th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
						>{category.id}</th
					>
					<td class="px-6 py-4">{category.name}</td>
					<td class="px-6 py-4">
						<a href="#" class="font-medium text-blue-600 hover:underline">Edit</a>
						<button
							class="font-medium text-red-600 hover:underline"
							on:click={() => deleteModal(category.id)}>Delete</button
						>
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
<!-- Pagination Controls -->
<div class="flex justify-between items-center mt-4">
	<button
		on:click={() => changePage($currentPage - 1)}
		class="px-4 py-2 bg-gray-300 font-medium rounded hover:bg-gray-400 shadow-sm"
		disabled={$currentPage === 1}>Previous</button
	>
	<span>Page {$currentPage} of {$totalPages}</span>
	<button
		on:click={() => changePage($currentPage + 1)}
		class="px-4 py-2 bg-gray-300 font-medium rounded hover:bg-gray-400 shadow-sm"
		disabled={$currentPage === $totalPages}>Next</button
	>
</div>
