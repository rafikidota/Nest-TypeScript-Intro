export class Pokemon {
    public id: number;
    public name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}

export const charmander = new Pokemon(1,'Charmander');