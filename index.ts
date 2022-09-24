import {PokemonFactory, PokemonType} from "./creational-patterns/factory";
import {AbstractPokemonFactory} from "./creational-patterns/abstract-factory";

const charmander = PokemonFactory.createPokemon("Charmander", PokemonType.Fire);
const squirtle = PokemonFactory.createPokemon("Squirtle", PokemonType.Water);
const bulbasaur = PokemonFactory.createPokemon("Bulbasaur", PokemonType.Grass);
const gengar = PokemonFactory.createPokemon("Gengar", PokemonType.Ghost);
const gibby = PokemonFactory.createPokemon("Gibby", PokemonType.Normal);

console.log('------abstract factory------');
charmander.attack();
squirtle.attack();
bulbasaur.attack();
gengar.attack();
gibby.attack();

const pokemonFactory = new AbstractPokemonFactory();
const charmander1 = pokemonFactory.createFirePokemon("Charmander");
const squirtle2 = pokemonFactory.createWaterPokemon("Squirtle");

console.log('------abstract factory------');
charmander1.attack();
squirtle2.attack();