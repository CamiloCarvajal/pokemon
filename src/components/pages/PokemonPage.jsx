import { useState } from "react";
import Form from "../organisms/Form";
import PokeCard from "../organisms/PokeCard";

function PokemonPage() {

    const [pokeName, setPokeName] = useState('')
    const [pokemon, setPokemon] = useState(null)
    const [error, setError] = useState('')

    function getNameFromInput(event) {
        setPokeName(event.target.value)
    }

    function getPokeInfo() {

        if (pokeName) {

            const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`

            fetch(url)
                .then((pokemon) => {

                    if (pokemon.status === 200) {
                        return pokemon.json()
                    }
                })
                .then((pokemon) => {

                    if (pokemon) {
                        setError('')
                        setPokemon(pokemon)
                    } else {
                        setError('Pokemon no encontrado')
                        setPokemon(null)
                    }
                })
                .catch((error) => setError('Error buscando al pokemon'))

        }

    }

    return (
        <section className="pokemon-section">
            <Form setName={getNameFromInput} getInfo={getPokeInfo} />
            {
                pokemon ? (<PokeCard pokemon={pokemon} />) : <h1>{error}</h1>
            }
        </section>
    )
}

export default PokemonPage