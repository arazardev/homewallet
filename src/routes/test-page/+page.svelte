<script>
	import Modal from "../../lib/ui/Modal.svelte";
	import Title from "../../lib/ui/Title.svelte";

	let showModal =false

	function handleClick (){
		window.alert("Hola")
	}

	function toggleShowModal(){
		showModal = !showModal
	}

</script>
<Title>Test</Title>
<button on:dblclick={toggleShowModal}>
	Modal - {showModal}
</button>

<Modal show={showModal}></Modal>

<style>
	button{
		margin-top:100px;
		height: 50px;
		border-radius: 10px;
		background-color: brown;
	}
</style>