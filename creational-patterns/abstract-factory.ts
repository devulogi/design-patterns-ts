import {PokemonType} from "../constants";

interface IPokemon {
    attack(): void;
}

interface ITrainerAbstractFactory {
    createPokemon1(type: PokemonType): void;
    createPokemon2(type: PokemonType): void;
}

abstract class Trainer implements ITrainerAbstractFactory {
    private _pokemons: Pokemon[] = [];

    protected constructor(private _name: string) {
    }

    public getName(): string {
        return this._name;
    }

    public createPokemon1(type: PokemonType): void {
        this._pokemons.push(PokemonFactory.createPokemon(type));
    }

    public createPokemon2(type: PokemonType): void {
        this._pokemons.push(PokemonFactory.createPokemon(type));
    }

    public getPokemons(): Pokemon[] {
        return this._pokemons;
    }
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

class FirePokemon extends Pokemon implements IPokemon {
    constructor(name: string) {
        super(name, PokemonType.Fire);
    }

    attack() {
        console.log("Fire attack");
    }
}

class WaterPokemon extends Pokemon implements IPokemon {
    constructor(name: string) {
        super(name, PokemonType.Water);
    }

    attack() {
        console.log("Water attack");
    }
}

class GrassPokemon extends Pokemon implements IPokemon {
    constructor(name: string) {
        super(name, PokemonType.Grass);
    }

    attack() {
        console.log("Grass attack");
    }
}

class ElectricPokemon extends Pokemon implements IPokemon {
    constructor(name: string) {
        super(name, PokemonType.Electric);
    }

    attack() {
        console.log("Electric attack");
    }
}

class NormalPokemon extends Pokemon implements IPokemon {
    constructor(name: string) {
        super(name, PokemonType.Normal);
    }

    attack() {
        console.log("Normal attack");
    }
}

class PokemonFactory {
    public static createPokemon(type: PokemonType): Pokemon {
        switch (type) {
            case PokemonType.Fire:
                return new FirePokemon("Charmander");
            case PokemonType.Water:
                return new WaterPokemon("Squirtle");
            case PokemonType.Grass:
                return new GrassPokemon("Bulbasaur");
            case PokemonType.Electric:
                return new ElectricPokemon("Pikachu");
            case PokemonType.Normal:
            default:
                return new NormalPokemon("Togepi");
        }
    }
}

export class GymLeader extends Trainer {
    constructor(name: string) {
        super(name);
    }
}

export class PokemonTrainer extends Trainer {
    constructor(name: string) {
        super(name);
    }
}

/**
 * EN: The client code works with factories and products only through abstract
 * types: AbstractFactory and AbstractProduct. This lets you pass any factory or
 * product subclass to the client code without breaking it.
 * @param factory
 * @return Trainer
 */
export function clientCode(factory: ITrainerAbstractFactory): Trainer {
    if (factory instanceof GymLeader) {
        factory.createPokemon1(PokemonType.Fire);
        factory.createPokemon2(PokemonType.Water);
    } else {
        factory.createPokemon1(PokemonType.Grass);
        factory.createPokemon2(PokemonType.Electric);
    }
    return <Trainer>factory;
}