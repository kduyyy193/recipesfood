import type { PageLoad, RouteParams } from '.svelte-kit/types/src/routes/about/$types';
import { error } from '@sveltejs/kit';

	/** @type {import('@sveltejs/kit').Load} */
	export  const load: PageLoad = async ({ params, fetch } ) => {
		
		const apiKey = import.meta.env.VITE_SPOONACULAR_API_KEY;
		
	const url =  `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${apiKey}`;	
		const res = await fetch(url);
		const data = await res.json();
		if(res.ok) {
			return {
				post: {
					recipe: data
				}
			}
		}

		throw error(404, 'Not found');
	}