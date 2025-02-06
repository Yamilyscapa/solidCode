<script lang="ts">
	import Features from '../modules/Feature.svelte';
    // Icons
    import DevicesIcon from '../../lib/static/icons/devices.svg'
</script>

<div class="services container row-auto mx-auto grid h-auto w-[65vw]">
	<div class="services-text">
		<h2 class="mb-10 font-heading text-5xl font-[500]">Desarrollo Web</h2>
		<div class="features">
			<Features
				title="Desarrollo web"
				description="Diseñamos y desarrollamos sitios web adaptables y escalables según tus necesidades. Integramos herramientas externas, añadimos funciones como tiendas en línea o membresías y ofrecemos soporte continuo para que tu sitio siempre funcione a la perfección."
                icon={DevicesIcon}
			/>
            <Features
				title="Desarrollo web"
				description="Diseñamos y desarrollamos sitios web adaptables y escalables según tus necesidades. Integramos herramientas externas, añadimos funciones como tiendas en línea o membresías y ofrecemos soporte continuo para que tu sitio siempre funcione a la perfección."
                icon={DevicesIcon}
			/>
		</div>
	</div>
	<div class="services-images"></div>
</div>
