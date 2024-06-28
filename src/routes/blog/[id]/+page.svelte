<script>
	import Navbar from '$lib/components/ui/Navbar.svelte';
	import Footer from '$lib/components/ui/Footer.svelte';
</script>

<Navbar />
<section class="mt-16 w-4/5 md:w-2/3 mx-auto">
	<h1 class="font-kaisei font-bold text-2xl md:text-5xl text-center pt-12">
		My Peaceful Forest Camping Adventure
	</h1>
	<img
		src="/img/mountain.jpg"
		alt="mountain"
		class="aspect-[3/2] md:aspect-[3/1] object-cover object-bottom mt-8"
	/>
	<div class="flex justify-between font-inter mt-3 text-sm md:text-base">
		<p>Ceated By : John Doe</p>
		<p>
			5 min read <br class="md:hidden" /> <span class="hidden md:inline">|</span> Sunday, July 14, 2019
		</p>
	</div>
	<p class="font-kaisei mt-8 text-justify">
		Embarking on a solo camping trip deep in the heart of the forest was an experience unlike any
		other. The journey began with a drive through winding roads, the scenery gradually shifting from
		bustling cityscapes to the serene beauty of nature. As I arrived at my chosen campsite, the
		sense of peace was immediate and profound. Setting up camp was both a challenge and a joy. With
		the only sounds being the rustling of leaves and the chirping of birds, I pitched my tent,
		gathered firewood, and prepared for a night under the stars. The absence of modern distractions
		allowed me to fully immerse myself in the environment, appreciating the small details that often
		go unnoticed. The forest, with its towering trees and lush undergrowth, provided a sense of
		solitude that was incredibly refreshing. I spent my days hiking through the trails, discovering
		hidden streams, and photographing the stunning landscapes. Each step taken was a reminder of
		nature's beauty and my place within it. Evenings were particularly magical. As the sun set,
		casting a golden glow through the trees, I would sit by the campfire, reflecting on the day's
		adventures. The crackling fire, the cool evening breeze, and the clear, starlit sky created an
		atmosphere of tranquility that is hard to find elsewhere. This peaceful forest camping adventure
		was more than just a getaway; it was a journey of self-discovery and rejuvenation. The solitude
		gave me time to think, to breathe, and to reconnect with myself. It was a reminder of the
		importance of stepping away from the hustle and bustle of daily life and finding moments of
		peace in nature. Through this experience, I learned that the forest holds a special kind of
		magic, one that calms the mind and soothes the soul. It’s a place where time seems to stand
		still, and the worries of the world fade away. I left the forest with a renewed sense of clarity
		and a deep appreciation for the simple, yet profound, beauty of nature. I hope my story inspires
		you to seek your own peaceful adventure, to find that quiet place where you can reconnect with
		yourself and the natural world. Happy camping!
	</p>
</section>
<Footer />
