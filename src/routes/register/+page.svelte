<script>
	import Swal from 'sweetalert2';

	const handleSubmit = async (event) => {
		event.preventDefault(); // Mencegah form dari submit secara default

		// Mengambil nilai dari input
		const formData = new FormData(event.target);
		const username = formData.get('username');
		const email = formData.get('email');
		const password = formData.get('password');
		const confirmpass = formData.get('confirmpass');

		// Validasi sederhana
		if (password !== confirmpass) {
			// Jika password dan konfirmasi password tidak cocok
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: 'Passwords do not match!'
			});
		} else {
			// Jika validasi berhasil
			Swal.fire({
				icon: 'success',
				title: 'Registration Successful',
				text: `Welcome, ${username}!`
			}).then(() => {
				// Redirect ke halaman login
				window.location.href = '/login';
			});
		}
	};
</script>

<section
	class="h-screen bg-cover bg-center grid place-items-center"
	style="background-image: url('/img/starry-night.jpg');"
>
	<form
		on:submit={handleSubmit}
		method="post"
		class=" text-white font-inter flex flex-col w-fit py-12 px-16 bg-white backdrop-blur-[8px] bg-opacity-10 border-2 border-gray-500 rounded-lg"
	>
		<h1 class="text-3xl font-bold text-center mb-10">Registration</h1>
		<label for="username" class="text-sm mb-2">Username</label>
		<input
			type="text"
			class="mb-4 w-[300px] rounded-full py-2 px-6 text-gray-500"
			id="username"
			name="username"
			placeholder="Enter your username"
			required
		/>
		<label for="email" class="text-sm mb-2">Email</label>
		<input
			type="email"
			class="mb-4 w-[300px] rounded-full py-2 px-6 text-gray-500"
			id="email"
			name="email"
			placeholder="Enter your email"
			required
		/>
		<label for="password" class="text-sm mb-2">Password</label>
		<input
			type="password"
			class="mb-4 w-[300px] rounded-full py-2 px-6 text-gray-500"
			id="password"
			name="password"
			placeholder="Enter your password"
			required
		/>
		<label for="confirmpass" class="text-sm mb-2">Confirm Password</label>
		<input
			type="password"
			class="mb-10 w-[300px] rounded-full py-2 px-6 text-gray-500"
			id="confirmpass"
			name="confirmpass"
			placeholder="Confirm your password"
			required
		/>
		<button type="submit" class="mb-4 w-[300px] rounded-full py-2 px-6 bg-[#152C70]"
			>Register</button
		>
		<a href="/login" class=" hover:underline"> Already Have an Account? <b>Sign In</b> </a>
	</form>
</section>
