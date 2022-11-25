<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<h1 class="text-2xl text-center mb-4 font-semibold text-white">
	Food Recipes
</h1>	
<div class="flex flex-wrap  items-center justify-center -mr-4 ">
	{#each data.post.recipes as item }
		<a href={`/recipes/${item.id}`} class=" text-center mr-4 mb-4 overflow-hidden max-w-xs">
			<img  class="rounded-md shadow-md " src={item.image} alt="">
			<h3  class="text-md text-white whitespace-nowrap mt-2 font-semibold truncate">{item.title}</h3>
		</a>
		
	{/each}
</div>
