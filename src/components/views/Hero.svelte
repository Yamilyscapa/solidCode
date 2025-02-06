<script lang="ts">
	import Screenshot from '../../lib/static/default_ss.png';
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
				<a
					href="/#"
					class="inline-block h-auto rounded-lg border-2 border-blue-700 bg-blue-700 px-6 py-4 text-sm font-medium text-white hover:bg-blue-800"
					>Agenda una llamada</a
				>
				<a
					href="/#"
					class=" secondary ml-3 inline-block h-auto rounded-lg border-2 border-blue-700 bg-opacity-30 px-6 py-4 text-sm font-medium text-blue-700 duration-200 ease-in-out hover:bg-blue-700 hover:text-white hover:opacity-80 hover:transition"
					>Contactanos</a
				>
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
