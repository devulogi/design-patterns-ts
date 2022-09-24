import {PokemonType} from "./factory";

interface IPokemon {
    name: string;
    type: string;
    attack(): void;
}

interface IAbstractPokemonFactory {
    createFirePokemon(name: string): IPokemon;
    createWaterPokemon(name: string): IPokemon;
}

class FirePokemon implements IPokemon {
    constructor(public name: string, public type: string) { }
    attack() {
        console.log("Fire attack");
    }
}

class WaterPokemon implements IPokemon {
    constructor(public name: string, public type: string) { }
    attack() {
        console.log("Water attack");
    }
}

export class AbstractPokemonFactory implements IAbstractPokemonFactory {
    createFirePokemon(name: string): IPokemon {
        return new FirePokemon(name, PokemonType.Fire);
    }
    createWaterPokemon(name: string): IPokemon {
        return new WaterPokemon(name, PokemonType.Water);
    }
}