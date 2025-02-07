<script lang="ts">
	const {
		title,
		description,
		icon,
		color = '#1D4ED8'
	}: { title: string; description: string; icon: any; color?: string } = $props();
	console.log(color);
	
</script>

<div
	class="feature box-border rounded-lg bg-[#f6f7f7] px-10 pb-8 pt-6 transition-transform duration-300
ease-in-out hover:translate-y-[-5px]"
>
	<div class="">
		<img class="mb-4 box-content w-9 rounded-full p-3" style="background-color: {color};" src={icon} alt="" />
		<h3 class="font-heading text-3xl">{title}</h3>
	</div>
	<p class="mt-3 font-poppins text-xs/6 text-gray-600">{description}</p>
</div>
