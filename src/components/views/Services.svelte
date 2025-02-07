<script lang="ts">
	import Features from '../modules/Feature.svelte';
	// Icons
	import DevicesIcon from '../../lib/static/icons/devices.svg';
	import BoltIcon from '../../lib/static/icons/bolt.svg';
	import PeopleIcon from '../../lib/static/icons/people.svg';
	// Components
</script>

<div class="services container row-auto mx-auto grid h-auto w-[65vw]">
	<div class="services-text">
		<h2 class="font-heading text-5xl font-[500] text-center mb-20">Servicios</h2>
		<div class="features grid grid-cols-2 gap-14 gap-y-8">
			<Features
				title="Desarrollo web"
				description="Diseñamos y desarrollamos sitios web adaptables y escalables según tus necesidades. Integramos herramientas externas, añadimos funciones como tiendas en línea o membresías y ofrecemos soporte continuo para que tu sitio siempre funcione a la perfección."
				icon={DevicesIcon}
				/>
				<Features
				title="Optimizacion"
				description="Mejoramos la velocidad, seguridad y rendimiento de tu sitio web, optimizamos su visibilidad en buscadores y refinamos la experiencia de usuario para una navegación más eficiente y atractiva."
				icon={BoltIcon}
				color="#FACC15"
			/>
			<Features
				title="Consultorias"
				description="Brindamos asesoría en desarrollo web con análisis de proyectos, revisión de código, recomendaciones personalizadas y acompañamiento en nuevas tecnologías, además de capacitación en herramientas y metodologías."
				icon={PeopleIcon}
				color="#F87171"
			/>
		</div>
	</div>
	<div class="services-images"></div>
</div>
