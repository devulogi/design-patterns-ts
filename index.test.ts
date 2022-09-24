import {describe, expect, test} from '@jest/globals';

import {PokemonType} from "./constants";
import {PokemonFactory} from "./creational-patterns/factory";
import {AbstractPokemonFactory} from "./creational-patterns/abstract-factory";

describe('Factory', () => {
    test('should create a fire pokemon & name is Charmander', () => {
        const pokemon = PokemonFactory.createPokemon(PokemonType.Fire);
        expect(pokemon.type).toBe(PokemonType.Fire);
        expect(pokemon.name).toBe('Charmander');
    });
    test('should create a water pokemon & name is Squirtle', () => {
        const pokemon = PokemonFactory.createPokemon(PokemonType.Water);
        expect(pokemon.type).toBe(PokemonType.Water);
        expect(pokemon.name).toBe('Squirtle');
    });
    test('should create a grass pokemon & name is Bulbasaur', () => {
        const pokemon = PokemonFactory.createPokemon(PokemonType.Grass);
        expect(pokemon.type).toBe(PokemonType.Grass);
        expect(pokemon.name).toBe('Bulbasaur');
    });
    test('should create a ghost pokemon & name is Gengar', () => {
        const pokemon = PokemonFactory.createPokemon(PokemonType.Ghost);
        expect(pokemon.type).toBe(PokemonType.Ghost);
        expect(pokemon.name).toBe('Gengar');
    });
    test('should create a normal pokemon & name is Togepi', () => {
        const pokemon = PokemonFactory.createPokemon(PokemonType.Normal);
        expect(pokemon.type).toBe(PokemonType.Normal);
        expect(pokemon.name).toBe('Togepi');
    });
});

describe('Abstract Factory', () => {
    test('should create a fire pokemon', () => {
        const charmander = new AbstractPokemonFactory().createFirePokemon('Charmander');
        expect(charmander.getType()).toBe(PokemonType.Fire);
    });
    test('should create a water pokemon', () => {
        const squirtle = new AbstractPokemonFactory().createWaterPokemon('Squirtle');
        expect(squirtle.getType()).toBe(PokemonType.Water);
    });
});