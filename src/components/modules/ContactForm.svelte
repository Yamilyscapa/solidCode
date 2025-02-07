<script lang="ts">
	// Components
	import Input from './Input.svelte';
	import Button from './Button.svelte';
</script>

<form action="">
	<Input required label="Nombre" type="name" name="name" placeholder="John" />
	<Input required label="Apellido" type="lastName" name="lastName" placeholder="Doe" />
	<Input required label="Telefono" type="tel" name="phone" placeholder="000 000 0000" />
	<Input label="Correo" type="email" name="email" placeholder="john.doe@solidcode.com" />

	<div class="message text-start">
		<label for="message" class="mb-2 block text-sm font-medium text-gray-900"
			>Mensaje <span class="text-red-600">*</span></label
		>
		<textarea
			name="message"
			class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 resize-none pb-12"
			id="message"
			placeholder="Danos tu mensaje..."
		></textarea>
	</div>

	<div class="flex pt-8">
		<Button>Enviar</Button>
	</div>
</form>
