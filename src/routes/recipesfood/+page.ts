import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

	/** @type {import('@sveltejs/kit').Load} */
	export  const load: PageLoad = async ({fetch}) => {
		const apiKey = import.meta.env.VITE_SPOONACULAR_API_KEY;
		const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}`;

		const res = await fetch(url);
		const data = await res.json();
		if(res.ok) {
			return {
				post: {
					recipes: data.results
				}
			}
		}

		throw error(404, 'Not found');
	}