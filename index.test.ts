import {describe, expect, test} from '@jest/globals';

import {PokemonType} from "./constants";
import {PokemonFactory} from "./creational-patterns/factory";
import {AbstractPokemonFactory} from "./creational-patterns/abstract-factory";

describe('Factory', () => {
    test('should create a fire pokemon', () => {
        const pokemon = PokemonFactory.createPokemon('Charmander', PokemonType.Fire);
        expect(pokemon.type).toBe(PokemonType.Fire);
    });
    test('should create a water pokemon', () => {
        const pokemon = PokemonFactory.createPokemon('Squirtle', PokemonType.Water);
        expect(pokemon.type).toBe(PokemonType.Water);
    });
    test('should create a grass pokemon', () => {
        const pokemon = PokemonFactory.createPokemon('Bulbasaur', PokemonType.Grass);
        expect(pokemon.type).toBe(PokemonType.Grass);
    });
    test('should create a ghost pokemon', () => {
        const pokemon = PokemonFactory.createPokemon('Gastly', PokemonType.Ghost);
        expect(pokemon.type).toBe(PokemonType.Ghost);
    });
    test('should create a normal pokemon', () => {
        const pokemon = PokemonFactory.createPokemon('Pikachu', PokemonType.Normal);
        expect(pokemon.type).toBe(PokemonType.Normal);
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