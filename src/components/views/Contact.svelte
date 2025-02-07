<script lang="ts">
	// Components
	import ContactForm from '../modules/ContactForm.svelte';
</script>

<div class="about container mx-auto grid w-[65vw] grid-cols-2 gap-x-16">
	<div class="about-text">
		<h2 class="text-start font-heading text-5xl font-[500]">
			Contactanos, estamos a un clic de distancia!
		</h2>
		<p class="font-poppins text-gray-600 mt-6">
			¿Tienes preguntas? Estamos aquí para resolverlas. Envíanos un mensaje y nuestro equipo se
			pondrá en contacto contigo pronto.
		</p>
	</div>

	<ContactForm />
</div>
