<script lang="ts">
	import Navbar from '../components/modules/Navbar.svelte';
	// Views
	import Hero from '../components/views/Hero.svelte';
	import Services from '../components/views/Services.svelte';
</script>

<header class="h-screen">
	<Navbar />
	<Hero />
</header>

<section class="h-screen" id="services">
	<Services />
</section>