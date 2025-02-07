<script lang="ts">
	import Screenshot from '../../lib/static/default_ss.png';
	// Components
	import Link from '../modules/Link.svelte';
</script>

<div class="hero flex pb-28 pt-40">
	<div class="container text-center md:text-start lg:flex lg:justify-between lg:place-items-center">
		<div class="hero_text mb-28 h-auto md:mt-16">
			<h2 class="font-heading text-6xl font-bold">
				Construimos el futuro <span class="text-gradient">digital</span> de tu empresa
			</h2>
			<p class="mt-8 font-poppins text-gray-700">
				Mejora la interacción con tus clientes y bríndales soluciones digitales sin fricciones.
			</p>

			<div class="hero_btn mt-8">
				<Link to="/#">Agenda una llamada</Link>
				<Link to="/#contact" secondary>Contactanos</Link>
			</div>
		</div>

		<div
			class="image-container after:content-[' '] container relative mx-auto mt-5 h-auto w-72 after:absolute after:left-1/2 after:top-1/2 after:z-[-10] after:block after:h-[80vw] after:w-[80vw] after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full sm:w-[50vw] sm:after:h-[50vw] sm:after:w-[50vw] md:w-[425px] lg:w-[650px] lg:after:h-[25vw] lg:after:w-[25vw]"
		>
			<img class="" src={Screenshot} alt="" />
		</div>
	</div>
</div>

<style>
	.image-container:after {
		background: rgb(73, 115, 231);
		background: linear-gradient(
			180deg,
			rgba(73, 115, 231, 1) 0%,
			rgba(80, 124, 247, 1) 48%,
			rgba(28, 78, 216, 1) 100%
		);
	}
</style>
