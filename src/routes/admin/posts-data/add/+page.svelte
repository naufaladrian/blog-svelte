<script>
	import { writable } from 'svelte/store';
	import Swal from 'sweetalert2';

	let title = '';
	let category = '';
	let image = '';
	let content = '';

	const categories = ['Traveling', 'Camping', 'Hiking']; // Sample categories

	async function addPost() {
		if (!title || !category || !image || !content) {
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
			text: 'Do you want to add this post?',
			icon: 'warning',
			showCancelButton: true,
			confirmButtonText: 'Yes, add it!',
			cancelButtonText: 'No, cancel!'
		});

		if (result.isConfirmed) {
			// Handle adding the new post
			console.log({ title, category, image, content });

			// Reset the form
			title = '';
			category = '';
			image = '';
			content = '';

			Swal.fire('Added!', 'Your post has been added.', 'success');
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
			title = '';
			category = '';
			image = '';
			content = '';

			Swal.fire('Cancelled!', 'Your post creation has been cancelled.', 'success');
		}
	}
</script>

<div class="flex justify-between items-center mt-4">
	<h1 class="text-4xl font-bold text-blue-600 mb-4">Create New Posts</h1>
</div>
<div class="relative overflow-x-auto shadow-md sm:rounded-lg border border-gray-200">
	<form class="p-6 bg-white rounded-lg shadow-md" on:submit|preventDefault={addPost}>
		<div class="mb-4">
			<label class="block text-gray-700 text-sm font-bold mb-2" for="title">Title</label>
			<input
				type="text"
				id="title"
				bind:value={title}
				class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
				placeholder="Post Title"
			/>
		</div>
		<div class="flex mb-4">
			<div class="w-1/2 mr-2">
				<label class="block text-gray-700 text-sm font-bold mb-2" for="category">Category</label>
				<select
					id="category"
					bind:value={category}
					class="block appearance-none w-full h-12 bg-white border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
				>
					<option value="" disabled>Choose Category</option>
					{#each categories as cat}
						<option value={cat}>{cat}</option>
					{/each}
				</select>
			</div>
			<div class="w-1/2 ml-2">
				<label class="block text-gray-700 text-sm font-bold mb-2" for="image">Image</label>
				<input
					type="file"
					id="image"
					accept="image/*"
					on:change={(e) => (image = e.target.files[0])}
					class="shadow appearance-none border rounded w-full h-12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
				/>
			</div>
		</div>
		<div class="mb-6">
			<label class="block text-gray-700 text-sm font-bold mb-2" for="content">Content</label>
			<textarea
				id="content"
				bind:value={content}
				class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
				placeholder="Write here...."
				rows="5"
			></textarea>
		</div>
		<div class="flex justify-between">
			<button
				type="submit"
				class="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline"
			>
				Add New Post
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
