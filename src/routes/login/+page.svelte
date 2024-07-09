<script>
	import Swal from 'sweetalert2'; // Langkah 2: Import SweetAlert2

	function handleLogin(event) {
		event.preventDefault(); // Mencegah pengiriman form secara default

		// Mengambil nilai dari input
		const formData = new FormData(event.target);
		const username = formData.get('username');
		const password = formData.get('password');

		// Menggunakan SweetAlert untuk menampilkan pesan
		if (username === 'writter' && password === 'writter123') {
			// Contoh validasi sederhana
			Swal.fire({
				icon: 'success',
				title: 'Login Berhasil',
				text: `Selamat datang, ${username}!`
			}).then(() => {
				window.location.href = '/admin/posts-data'; // Redirect ke halaman utama
			});
		} else {
			Swal.fire({
				icon: 'error',
				title: 'Login Gagal',
				text: 'Username atau password salah!'
			});
		}

		// Di sini, Anda akan menambahkan logika untuk mengirimkan data ke backend atau API
	}
</script>

<section
	class="h-screen bg-cover bg-center grid place-items-center"
	style="background-image: url('/img/starry-night.jpg');"
>
	<form
		on:submit={handleLogin}
		class="text-white font-inter flex flex-col w-fit py-12 px-16 bg-white backdrop-blur-[8px] bg-opacity-10 border-2 border-gray-500 rounded-lg"
	>
		<h1 class="text-3xl font-bold text-center mb-10">Welcome back!</h1>
		<label for="username" class="text-sm mb-2">Username</label>
		<input
			type="text"
			class="mb-4 w-[300px] rounded-full py-2 px-6 text-gray-500"
			id="username"
			name="username"
			placeholder="Enter your username"
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
		<p class="text-sm mb-4">Forgot Password?</p>
		<button type="submit" class="mb-4 w-[300px] rounded-full py-2 px-6 bg-[#152C70]">Login</button>
		<a href="/register" class="hover:underline">Don’t Have an Account? <b>Sign Up</b></a>
	</form>
</section>
