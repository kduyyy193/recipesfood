<script>
	import './styles.css';
  	import "../app.css";
	import Footer from '../components/Footer.svelte';
	import Nav from '../components/Nav.svelte';
</script>

<div class="app bg-gray-800 p-10 min-h-screen">
	<Nav />

	<main class="my-4">
		<slot />
	</main>
	<Footer />
</div>
