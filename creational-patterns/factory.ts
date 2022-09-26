import {PokemonType} from "../constants";

export interface IPokemon {
    attack(): void;
}

abstract class Pokemon {
    protected constructor(private _name: string, private _type: string) {
    }

    get name(): string {
        return this._name;
    }

    get type(): string {
        return this._type;
    }
}

class FirePokemon extends Pokemon implements IPokemon {
    constructor() {
        super("Charmander", PokemonType.Fire);
    }

    attack() {
        console.log("Fire attack");
    }
}

class WaterPokemon extends Pokemon implements IPokemon {
    constructor() {
        super("Squirtle", PokemonType.Water);
    }

    attack() {
        console.log("Water attack");
    }
}

class GrassPokemon extends Pokemon implements IPokemon {
    constructor() {
        super("Bulbasaur", PokemonType.Grass);
    }

    attack() {
        console.log("Grass attack");
    }
}

class GhostPokemon extends Pokemon implements IPokemon {
    constructor() {
        super("Gengar", PokemonType.Ghost);
    }

    attack() {
        console.log("Ghost attack");
    }
}

class NormalPokemon extends Pokemon implements IPokemon {
    constructor() {
        super("Togepi", PokemonType.Normal);
    }

    attack() {
        console.log("Normal attack");
    }
}

export class PokemonFactory {
    /**
     * Factory method to create a pokemon based on the type of pokemon passed in as a parameter to the method.
     * The method will return a pokemon of the type passed in as a parameter.
     * @param type {PokemonType} The type of pokemon to create.
     */
    static createPokemon(type: string): Pokemon {
        switch (type) {
            case PokemonType.Fire:
                return new FirePokemon();
            case PokemonType.Water:
                return new WaterPokemon();
            case PokemonType.Grass:
                return new GrassPokemon();
            case PokemonType.Ghost:
                return new GhostPokemon();
            case PokemonType.Normal:
            default:
                return new NormalPokemon();
        }
    }
}
