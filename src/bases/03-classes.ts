export class Pokemon {

    get image_url(): string {
        return `https://pokemon.com/${this.id}.jpg`;
    }

    constructor(
        public readonly id: number,
        public name: string,
    ) { }

    scream() {
        console.log(`${this.name.toUpperCase()}!!!`);
    }
    speak() {
        console.log(`${this.name}, ${this.name}`);

    }

}

export const charmander = new Pokemon(1, 'Charmander');

console.log(charmander.image_url);
charmander.scream();
charmander.speak();
