import {PokemonType} from "./factory";

interface IPokemon {
    attack(): void;
}

interface IAbstractPokemonFactory {
    createFirePokemon(name: string): IPokemon;
    createWaterPokemon(name: string): IPokemon;
}

export abstract class Pokemon {
    protected constructor(private _name: string, public _type: PokemonType) {
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
    createFirePokemon(name: string): IPokemon {
        return new FirePokemon(name, PokemonType.Fire);
    }
    createWaterPokemon(name: string): IPokemon {
        return new WaterPokemon(name, PokemonType.Water);
    }
}