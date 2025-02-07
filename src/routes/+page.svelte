<script lang="ts">
	import Navbar from '../components/modules/Navbar.svelte';
	// Views
	import Hero from '../components/views/Hero.svelte';
	import Services from '../components/views/Services.svelte';
	import About from '../components/views/Contact.svelte';
</script>

<header class="h-screen">
	<Navbar />
	<Hero />
</header>

<section class="h-auto box-border pt-32 pb-20" id="services">
	<Services />
</section>

<section class="h-auto box-border py-32" id="about">
	<About />
</section>