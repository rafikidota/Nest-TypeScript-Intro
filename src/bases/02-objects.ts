export const pokemonIds = [1, 20, 30, 34, 66];
// export const Pokemon = {
//     id: 1,
//     name: 'Bulbasaur'
// }
export interface Pokemon {
    id: number;
    name: string;
}

export const pokemon: Pokemon = {
    id: 1,
    name: 'Bulbasaur'
}

console.log(pokemon);
