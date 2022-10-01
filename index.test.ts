import {describe, expect, test} from '@jest/globals';

import {PokemonType} from "./constants";
import {PokemonFactory} from "./creational-patterns/factory";
import {clientCode, GymLeader, PokemonTrainer} from "./creational-patterns/abstract-factory";
import {Singleton as Captain} from "./creational-patterns/singleton";

describe('Factory', () => {
    test('should create a fire pokemon & name is Charmander', () => {
        const pokemon = PokemonFactory.createPokemon(PokemonType.Fire);
        expect(pokemon.type).toBe(PokemonType.Fire);
        expect(pokemon.name).toBe('Charmander');
    });
    test('should create a normal pokemon & name is Togepi', () => {
        const pokemon = PokemonFactory.createPokemon(PokemonType.Normal);
        expect(pokemon.type).toBe(PokemonType.Normal);
        expect(pokemon.name).toBe('Togepi');
    });
});

describe('Abstract Factory', () => {
    const gymLeader = new GymLeader('Gary');
    clientCode(gymLeader);

    const pokemonTrainer = new PokemonTrainer('Ash');
    clientCode(pokemonTrainer);

    test('should create a gym leader & name is Gary', () => {
       expect(gymLeader.getName()).toBe('Gary');
    });

    test('should create a fire pokemon & name is Charmander', () => {
        const pokemon = gymLeader.getPokemons()[0];
        expect(pokemon.getName()).toBe('Charmander');
        expect(pokemon.getType()).toBe(PokemonType.Fire);
    });

    test('should create a trainer with 2 pokemons', () => {
        expect(pokemonTrainer.getPokemons().length).toBe(2);
    });

    test('should create an electric pokemon & name is Pikachu', () => {
       expect(pokemonTrainer.getPokemons()[1].getName()).toBe('Pikachu');
    });
});

describe('Singleton', () => {
    const captain1 = Captain.getCaptain(null);
    const captain2 = Captain.getCaptain("cassy ");

    test('should return the same captain', () => {
        expect(Captain.isCaptain(captain1)).toBe(true);
        expect(Captain.isCaptain(captain2)).toBe(true);
    });

    test('should return the same captain', () => {
        captain1.setName('Captain1');
        expect(captain2.getName()).toBe(captain1.getName());
    });
});