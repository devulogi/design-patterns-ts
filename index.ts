import {PokemonFactory, PokemonType} from "./creational-patterns/factory";

const charmander = PokemonFactory.createPokemon("Charmander", PokemonType.Fire);
const squirtle = PokemonFactory.createPokemon("Squirtle", PokemonType.Water);
const bulbasaur = PokemonFactory.createPokemon("Bulbasaur", PokemonType.Grass);
const gengar = PokemonFactory.createPokemon("Gengar", PokemonType.Ghost);
const gibby = PokemonFactory.createPokemon("Gibby", PokemonType.Normal);

charmander.attack();
squirtle.attack();
bulbasaur.attack();
gengar.attack();
gibby.attack();