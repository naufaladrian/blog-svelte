<script>
	export let isGlass = true;
</script>

<nav
	class="navbar font-inter {isGlass
		? 'navbar-glass bg-navbar bg-opacity-50 text-white'
		: ' bg-white text-black'} fixed top-0 z-50"
>
	<div class="navbar-start">
		<a href="/" class="navbar-item font-bold">Adventura</a>
	</div>
	<div class="navbar-end font-medium">
		<a
			href="/"
			class="navbar-item hover:border-b-2 border-white transition-all duration-100 rounded-none py-0"
			>Home</a
		>
		<a
			href="/about-me"
			class="navbar-item hover:border-b-2 border-white transition-all duration-100 rounded-none py-0"
			>About</a
		>
		<a
			href="/blog"
			class="navbar-item hover:border-b-2 border-white transition-all duration-100 rounded-none py-0"
			>Blog</a
		>
		<span class="mx-1">|</span>
		<a
			href="/login"
			class="navbar-item mr-4 hover:border-b-2 border-white transition-all duration-100 rounded-none py-0"
			>Login</a
		>
		<div class="avatar avatar-ring avatar-md">
			<div class="btn btn-ghost flex cursor-pointer px-0 rounded-full">
				<img src="https://i.pravatar.cc/150?u=a042581f4e29026024d" alt="avatar" />
			</div>
		</div>
	</div>
</nav>
