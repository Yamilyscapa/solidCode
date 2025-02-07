<script lang="ts">
	type formType = 'email' | 'name' | 'tel' | 'lastName';

	const {
		label,
		type,
		name,
		placeholder,
		required
	}: { label: string; type: formType; name: string; placeholder: string; required?: boolean } =
		$props();
</script>

<div class="mb-5">
	<label for={name} class="mb-2 block text-sm font-medium text-gray-900">
		{label}
        {#if required}
            <span class="text-red-600">*</span>
        {/if}
	</label>
	<input
		{required}
		{name}
		{placeholder}
		{type}
		id={name}
		class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600"
	/>
</div>
