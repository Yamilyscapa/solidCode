<script lang="ts">
	const {
		children,
		to = '/#',
		secondary
	}: { children: any; to?: string; secondary?: boolean } = $props();
</script>

{#if secondary}
	<a
		href={to}
		class="ml-3 inline-block h-auto rounded-lg border-2 border-blue-700 bg-opacity-30 px-6 py-4 text-sm font-medium text-blue-700 duration-200 ease-in-out hover:bg-blue-700 hover:bg-opacity-20 hover:transition"
		>{@render children()}</a
	>
{:else}
	<a
		href={to}
		class="inline-block h-auto rounded-lg border-2 border-blue-700 bg-blue-700 px-6 py-4 text-sm font-medium text-white hover:bg-blue-800"
		>{@render children()}</a
	>
{/if}
