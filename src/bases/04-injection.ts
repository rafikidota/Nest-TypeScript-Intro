import { Move, PokeapiResponse } from '../interfaces/pokeapi-response.interface';
import { PokeApiAxiosAdapter, PokeApiFetchAdapter, HttpAdapter } from './api/pokeApi.adapter';

export class Pokemon {

    get image_url(): string {
        return `https://pokemon.com/${this.id}.jpg`;
    }

    constructor(
        public readonly id: number,
        public name: string,
        private readonly http: HttpAdapter
    ) { }

    scream() {
        console.log(`${this.name.toUpperCase()}!!!`);
    }
    speak() {
        console.log(`${this.name}, ${this.name}`);

    }

    async getMoves(): Promise<Move[]> {

        // const { data } = await axios.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/4');
        const data = await this.http.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/4');
        console.log(data.moves);
        return data.moves;
    }

}
const pokeApiAxios = new PokeApiAxiosAdapter();
const pokeApiFetch = new PokeApiFetchAdapter();
export const charmander = new Pokemon(1, 'Charmander', pokeApiAxios);
export const pikachu = new Pokemon(1, 'Charmander', pokeApiFetch);

// console.log(charmander.image_url);
// charmander.scream();
// charmander.speak();
console.log(charmander.getMoves());
console.log(pikachu.getMoves());
