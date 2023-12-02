<script>
	import Modal from '../../lib/ui/Modal.svelte';
	import Title from '../../lib/ui/Title.svelte';

	let showModal = false;

	function handleClick() {
		window.alert('Hola');
	}

	function toggleShowModal() {
		showModal = !showModal;
	}
</script>

<Title>Test</Title>
<button on:dblclick={toggleShowModal}> Modal - {showModal}</button>

<Modal show={showModal}></Modal>

<div>Hola esto es un texto muy largo, y quiero que salga una barra al costado</div>

<style>
	button {
		margin-top: 100px;
		height: 50px;
		border-radius: 10px;
		background-color: brown;
	}

	div {
		margin-top: 100px;
		color: black;
		width: 100px;
		height: 100px;
		overflow: scroll;
		text-wrap: balance;
		word-break: break-all;
		box-sizing: border-box;
		background-color: white;
	}
</style>
