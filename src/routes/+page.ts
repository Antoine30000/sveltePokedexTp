import type { PageLoad } from './$types';

interface PokemonMetadata {
	name: string;
	image: string;
}

export const load: PageLoad = async ({ fetch }) => {
	const pokemonsListReq = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
	const pokemonsList = await pokemonsListReq.json();

	let pokemons: PokemonMetadata[] = [];

	for (let i = 0; i < pokemonsList.results.length; i++) {
		const name = pokemonsList.results[i].name;
		const pokemonInfoReq = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
		const pokemonInfo = pokemonInfoReq.json();
		const image = pokemonInfo.sprites.front_default;

		const pokemon: PokemonMetadata = {
			name: name,
			image: image
		};

		pokemons = [...pokemons, pokemon];
	}
	return { pokemons };
};
