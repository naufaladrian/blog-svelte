<script>
	import { writable } from 'svelte/store';
	import Swal from 'sweetalert2';

	let category = '';

	async function addPost() {
		if (!category) {
			await Swal.fire({
				title: 'Error!',
				text: 'All fields must be filled out!',
				icon: 'error',
				confirmButtonText: 'Ok'
			});
			return;
		}

		const result = await Swal.fire({
			title: 'Are you sure?',
			text: 'Do you want to add this category?',
			icon: 'warning',
			showCancelButton: true,
			confirmButtonText: 'Yes, add it!',
			cancelButtonText: 'No, cancel!'
		});

		if (result.isConfirmed) {
			// Handle adding the new post
			console.log({ category });

			// Reset the form
			category = '';

			Swal.fire('Added!', 'Your category has been added.', 'success');
		} else {
			Swal.fire('Cancelled!', 'Your category creation has been cancelled.', 'success');
			category = '';
		}
	}

	async function cancel() {
		const result = await Swal.fire({
			title: 'Are you sure?',
			text: 'Do you want to cancel?',
			icon: 'warning',
			showCancelButton: true,
			confirmButtonText: 'Yes, cancel it!',
			cancelButtonText: 'No, keep it!'
		});

		if (result.isConfirmed) {
			// Reset the form
			category = '';

			Swal.fire('Cancelled!', 'Your category creation has been cancelled.', 'success');
		}
	}
</script>

<div class="flex justify-between items-center mt-4">
	<h1 class="text-4xl font-bold text-blue-600 mb-4">Create New Categories</h1>
</div>
<div class="relative overflow-x-auto shadow-md sm:rounded-lg border border-gray-200">
	<form class="p-6 bg-white rounded-lg shadow-md" on:submit|preventDefault={addPost}>
		<div class="mb-4">
			<label class="block text-gray-700 text-sm font-bold mb-2" for="categories">Category</label>
			<input
				type="text"
				id="categories"
				bind:value={category}
				class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
				placeholder="Category Name"
			/>
		</div>

		<div class="flex justify-between">
			<button
				type="submit"
				class="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline"
			>
				Add New category
			</button>
			<button
				type="button"
				on:click={cancel}
				class="bg-red-500 hover:bg-red-700 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline"
			>
				Cancel
			</button>
		</div>
	</form>
</div>
