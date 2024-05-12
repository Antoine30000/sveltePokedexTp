import type { PageLoad } from '../$types';

export const load: PageLoad = async ({ fetch, params }) => {
	const name = params.id.toLowerCase();
	const pokemonReq = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
	const pokemon = await pokemonReq.json();
	console.log(params);
	return { pokemon };
};
