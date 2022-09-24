import {PokemonType} from "../constants";

interface IPokemon {
    attack(): void;
}

interface IAbstractPokemonFactory {
    createFirePokemon(name: string): Pokemon;
    createWaterPokemon(name: string): Pokemon;
}

export abstract class Pokemon {
    protected constructor(private _name: string, private _type: PokemonType) {
    }
    public getName(): string {
        return this._name;
    }
    public getType(): PokemonType {
        return this._type;
    }
}

export class FirePokemon extends Pokemon implements IPokemon {
    constructor(name: string, type: PokemonType) {
        super(name, type);
    }
    attack() {
        console.log("Fire attack");
    }
}

export class WaterPokemon extends Pokemon implements IPokemon {
    constructor(name: string, type: PokemonType) {
        super(name, type);
    }
    attack() {
        console.log("Water attack");
    }
}

export class AbstractPokemonFactory implements IAbstractPokemonFactory {
    createFirePokemon(name: string): Pokemon {
        return new FirePokemon(name, PokemonType.Fire);
    }
    createWaterPokemon(name: string): Pokemon {
        return new WaterPokemon(name, PokemonType.Water);
    }
}