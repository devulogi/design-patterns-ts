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

abstract class Pokemon implements IPokemon {
    protected constructor(private _name: string, private _type: PokemonType) {
    }

    abstract attack(): void;

    public getName(): string {
        return this._name;
    }

    public getType(): PokemonType {
        return this._type;
    }
}

class FirePokemon extends Pokemon {
    constructor(name: string) {
        super(name, PokemonType.Fire);
    }

    attack() {
        console.log("Fire attack");
    }
}

class WaterPokemon extends Pokemon {
    constructor(name: string) {
        super(name, PokemonType.Water);
    }

    attack() {
        console.log("Water attack");
    }
}

class GrassPokemon extends Pokemon {
    constructor(name: string) {
        super(name, PokemonType.Grass);
    }

    attack() {
        console.log("Grass attack");
    }
}

class ElectricPokemon extends Pokemon {
    constructor(name: string) {
        super(name, PokemonType.Electric);
    }

    attack() {
        console.log("Electric attack");
    }
}

class NormalPokemon extends Pokemon {
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
 * The client code works with factories only through abstract
 * types: AbstractFactory. This lets you pass any factory or
 * IPokemon subclass to the client code without breaking it.
 * @param factory {ITrainerAbstractFactory}
 * @return Trainer {GymLeader | PokemonTrainer}
 */
export function clientCode(factory: ITrainerAbstractFactory): Trainer {
    /**
     * The client code can work with any concrete factory class.
     */
    if (factory instanceof GymLeader) {
        factory.createPokemon1(PokemonType.Fire);
        factory.createPokemon2(PokemonType.Water);
    } else {
        factory.createPokemon1(PokemonType.Grass);
        factory.createPokemon2(PokemonType.Electric);
    }
    return <Trainer>factory;
}