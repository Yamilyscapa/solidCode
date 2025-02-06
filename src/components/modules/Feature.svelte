<script lang="ts">
	const { title, description, icon }: { title: string; description: string; icon: any } = $props();
</script>

<div class="h-72 max-w-sm rounded-lg p-10 shadow-md">
	<div class="titl">
        <img src={icon} alt="">
	</div>
	<p class="font-poppins">{description}</p>
</div>
