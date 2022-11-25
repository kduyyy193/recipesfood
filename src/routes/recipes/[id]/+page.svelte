<script lang="ts">
	import type { PageData } from './$types';
	export let data :PageData;
</script>

<h1 class="text-xl text-white text-center mb-10">{data.post.recipe.title}</h1>

<div class="flex justify-center flex-wrap items-center">
	<img width="100%" class="rounded-lg shadow-md max-w-md" src={data.post.recipe.image} alt={data.post.recipe.title} />

	<div class="ml-8 mt-4">
		<div>
			<h2 class="text-xl text-white font-bold">Ingredients</h2>
			{#each data.post.recipe.extendedIngredients as ingredient}
				<p class="text-gray-300 text-sm capitalize">{ingredient.name},</p>
			{/each}
		</div>

		<div>
			<h2 class="text-xl text-white font-bold flex ">Cuisines</h2>
			{#each data.post.recipe.cuisines as cuisines}
				<p class="text-gray-300 text-sm capitalize">{cuisines},</p>
			{/each}
		</div>
	</div>
</div>