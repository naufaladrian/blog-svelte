<script>
	import { writable } from 'svelte/store';
	import Swal from 'sweetalert2';

	// Initial values for the post (you can replace these with actual data)
	let initialTitle = 'Travel Post 1';
	let initialCategory = 'Category 1';
	let initialImage = ''; // URL or path to the image if available
	let initialContent = 'Sample content...';

	// Initialize form fields with initial values
	let title = initialTitle;
	let category = initialCategory;
	let image = initialImage;
	let content = initialContent;

	const categories = ['Category 1', 'Category 2', 'Category 3']; // Sample categories

	async function updatePost() {
		const result = await Swal.fire({
			title: 'Are you sure?',
			text: 'Do you want to update this post?',
			icon: 'warning',
			showCancelButton: true,
			confirmButtonText: 'Yes, update it!',
			cancelButtonText: 'No, cancel!'
		});

		if (result.isConfirmed) {
			// Handle updating the post
			console.log({ title, category, image, content });

			// Reset the form to initial values (if desired)
			title = initialTitle;
			category = initialCategory;
			image = initialImage;
			content = initialContent;

			Swal.fire('Updated!', 'Your post has been updated.', 'success');
		}
	}

	async function cancelEdit() {
		const result = await Swal.fire({
			title: 'Are you sure?',
			text: 'Do you want to cancel the changes?',
			icon: 'warning',
			showCancelButton: true,
			confirmButtonText: 'Yes, cancel it!',
			cancelButtonText: 'No, keep it!'
		});

		if (result.isConfirmed) {
			// Reset the form to initial values
			title = initialTitle;
			category = initialCategory;
			image = initialImage;
			content = initialContent;

			Swal.fire('Cancelled!', 'Your changes have been discarded.', 'success');
		}
	}
</script>

<div class="flex justify-between items-center mt-4">
	<h1 class="text-4xl font-bold text-blue-600 mb-4">Edit Post</h1>
</div>
<div class="relative overflow-x-auto shadow-md sm:rounded-lg border border-gray-200">
	<form class="p-6 bg-white rounded-lg shadow-md" on:submit|preventDefault={updatePost}>
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
				Update Post
			</button>
			<button
				type="button"
				on:click={cancelEdit}
				class="bg-red-500 hover:bg-red-700 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline"
			>
				Cancel
			</button>
		</div>
	</form>
</div>
