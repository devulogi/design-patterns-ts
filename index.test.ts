import {describe, expect, test} from '@jest/globals';

import {PokemonType} from "./constants";
import {PokemonFactory} from "./creational-patterns/factory";
import {clientCode, GymLeader, PokemonTrainer, Pokemon} from "./creational-patterns/abstract-factory";

describe('Factory', () => {
    xtest('should create a fire pokemon & name is Charmander', () => {
        const pokemon = PokemonFactory.createPokemon(PokemonType.Fire);
        expect(pokemon.type).toBe(PokemonType.Fire);
        expect(pokemon.name).toBe('Charmander');
    });
    xtest('should create a normal pokemon & name is Togepi', () => {
        const pokemon = PokemonFactory.createPokemon(PokemonType.Normal);
        expect(pokemon.type).toBe(PokemonType.Normal);
        expect(pokemon.name).toBe('Togepi');
    });
});

describe('Abstract Factory', () => {
    test('should create a gym leader', () => {
        const gymLeader = new GymLeader('Gary');
        clientCode(gymLeader);
        expect(gymLeader.getName()).toBe('Gary');
    });
    test('should create a pokemon and check if pokemon is instance of Pokemon', () => {
        const pokemonTrainer = new PokemonTrainer('Ash');
        clientCode(pokemonTrainer);
        pokemonTrainer.getPokemons().forEach(pokemon => {
            expect(pokemon).toBeInstanceOf(Pokemon);
        });
    });
});