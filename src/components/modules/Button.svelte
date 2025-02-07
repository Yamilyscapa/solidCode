<script lang="ts">
	import type { MouseEventHandler } from 'svelte/elements';

	const {
		children,
		onclick = () => {},
		secondary
	}: { children: any; onclick?: MouseEventHandler<any>; secondary?: boolean } = $props();
</script>

{#if secondary}
	<button
		onclick={(e) => onclick(e)}
		class="w-full ml-3 inline-block h-auto rounded-lg border-2 border-blue-700 bg-opacity-30 px-6 py-4 text-sm font-medium text-blue-700 duration-200 ease-in-out hover:bg-blue-700 hover:bg-opacity-20 hover:transition"
		>{@render children()}</button
	>
{:else}
	<button
		onclick={(e) => onclick(e)}
		class="inline-block h-auto rounded-lg border-2 border-blue-700 bg-blue-700 px-6 py-4 text-sm font-medium text-white hover:bg-blue-800 w-full"
		>{@render children()}</button
	>
{/if}
