<script lang="ts">
	import Logo from '../../lib/static/logo.png';
</script>

<nav class="border-2 border-neutral-100 mx-auto mt-4 h-20 w-[95vw] rounded-lg bg-white bg-opacity-95 px-12 fixed left-0 right-0">
	<div class="container mx-auto flex items-center justify-between px-0">
		<a href="/"><img class="block w-20" src={Logo} alt="Solid Code" /></a>

		<ul class="flex place-items-center gap-x-10 text-gray-600">
			<li class="hover:text-gray-800"><a class="" href="/#">Incio</a></li>
			<li class="hover:text-gray-800"><a class="" href="/#">Sobre nosotros</a></li>
			<li class="hover:text-gray-800"><a class="" href="/#">Proyectos</a></li>
			<li>
				<a
					href="/#"
					class="ml-2 inline-block h-auto rounded-lg bg-blue-700 px-12 py-3 text-sm font-medium text-white hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700"
					>Contacto</a
				>
			</li>
		</ul>
	</div>
</nav>