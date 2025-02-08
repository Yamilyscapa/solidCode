<script lang="ts">
	// Components
	import ContactForm from '../modules/ContactForm.svelte';
</script>

<div class="about grid-rows-auto container grid gap-y-12 text-center lg:grid-cols-2 lg:gap-x-12 lg:text-start">
	<div class="about-text">
		<h2 class="self-end font-heading text-5xl font-[500]">
			Contáctanos, estamos a un click de distancia!
		</h2>
		<p class="mt-6 self-start font-poppins text-gray-600">
			¿Tienes preguntas? Estamos aquí para resolverlas. Envíanos un mensaje y nuestro equipo se
			pondrá en contacto contigo pronto.
		</p>
	</div>

	<ContactForm />
</div>
