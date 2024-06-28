<script>
	import Navbar from '$lib/components/Navbar.svelte';
</script>

<Navbar />
<section
	class=" bg-[url('/img/field.jpg')] min-h-dvh bg-origin-border bg-cover bg-center py-20 grid place-items-center"
>
	<div
		class="w-[90%] md:max-w-[500px] bg-white mx-auto px-12 my-8 md:my-0 py-8 text-center rounded-2xl"
	>
		<h1 class="font-inter text-4xl">ABOUT ME</h1>
		<img
			src="/img/person-bridge.jpg"
			alt="profile"
			class="bg-slate-300 w-1/2 aspect-square rounded-full mx-auto my-8"
		/>
		<p class="font-kaisei">
			<span class="font-bold">Welcome to My Journey!</span> <br /> I'm [Your Name], a freelance
			software developer, photographer, and travel blogger. <br />This blog is a fusion of my
			passions for technology, photography, and exploring the world. Through My Journey, I share my
			experiences from coding projects to capturing breathtaking landscapes and discovering new
			destinations. Join me as I navigate through the adventures of freelancing, the art of
			photography, and the thrill of travel, offering insights and stories that I hope will inspire
			and resonate with you.
		</p>
		<div class="flex gap-x-5 w-fit mx-auto mt-16">
			<img src="/icons/facebook.svg" alt="facebook" />
			<img src="/icons/linkedin.svg" alt="linkedin" />
			<img src="/icons/youtube.svg" alt="youtube" />
			<img src="/icons/instagram.svg" alt="instagram" />
		</div>
	</div>
</section>
