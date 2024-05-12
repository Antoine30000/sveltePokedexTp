import type { PageLoad } from '../$types';

export const load: PageLoad = async ({ fetch, params }) => {
	const name = params.id.toLocaleLowerCase();
	const pokemonReq = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
	const pokemon = await pokemonReq.json();
	return { pokemon };
};
