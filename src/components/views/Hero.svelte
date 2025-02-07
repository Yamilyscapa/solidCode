<script lang="ts">
	import Screenshot from '../../lib/static/default_ss.png';
	// Components
	import Link from '../modules/Link.svelte';
</script>

<div class="hero flex h-[90vh] place-items-center">
	<div class="container mx-auto flex h-auto w-[65vw] gap-10 pr-12 pt-28 text-start">
		<div class="hero_text mx-auto mt-12 w-[80%]">
			<h2 class="font-heading text-7xl font-bold">
				Construimos el futuro <span class="text-gradient">digital</span> de tu empresa
			</h2>
			<p class="mt-8 font-poppins text-gray-700">
				Mejora la interacción con tus clientes y bríndales soluciones digitales sin fricciones.
			</p>

			<div class="hero_btn mt-8">
				<Link to="/#">Agenda una llamada</Link>
				<Link to="/#" secondary>Contactanos</Link>

			</div>
		</div>

		<div
			class="image-container after:content-[' '] container top-16 h-auto w-72 after:absolute after:bottom-52 after:right-60 after:z-[-10] after:block after:h-96 after:w-96 after:rounded-full"
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
