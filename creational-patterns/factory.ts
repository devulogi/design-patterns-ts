interface IPokemon {
    name: string;
    type: string;
    attack(): void;
}

abstract class Pokemon implements IPokemon {
    protected constructor(public name: string, public type: string) { }
    public abstract attack(): void;
}

class FirePokemon extends Pokemon {
    constructor(name: string, type: string) {
        super(name, type);
    }
    attack() {
        console.log("Fire attack");
    }
}

class WaterPokemon extends Pokemon {
    constructor(name: string, type: string) {
        super(name, type);
    }
    attack() {
        console.log("Water attack");
    }
}

class GrassPokemon extends Pokemon {
    constructor(name: string, type: string) {
        super(name, type);
    }
    attack() {
        console.log("Grass attack");
    }
}

class GhostPokemon extends Pokemon {
    constructor(name: string, type: string) {
        super(name, type);
    }
    attack() {
        console.log("Ghost attack");
    }
}


export enum PokemonType {
    Fire = "fire",
    Water = "water",
    Grass = "grass",
    Ghost = "ghost"
}

export class PokemonFactory {
    static createPokemon(name: string, type: string): IPokemon {
        switch (type) {
            case PokemonType.Fire:
                return new FirePokemon(name, type);
            case PokemonType.Water:
                return new WaterPokemon(name, type);
            case PokemonType.Grass:
                return new GrassPokemon(name, type);
            case PokemonType.Ghost:
                return new GhostPokemon(name, type);
            default:
                throw new Error("Invalid pokemon type");
        }
    }
}
