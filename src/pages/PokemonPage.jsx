import { useState } from "react";
import Form from "../organisms/Form";

function PokemonPage() {

    const [pokeName, setPokeName] = useState('')
    const [pokemon, setPokemon] = useState(null)

    function getNameFromInput(event) {
        setPokeName(event.target.value)
    }

    function getPokeInfo() {
        if (pokeName) {

            const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`

            fetch(url)
                .then((pokemon) => { return pokemon.json() })
                .then((pokemon) => console.log(pokemon))
                .catch((error) => console.log(error))

        }

    }

    return (
        <section className="pokemon-section">
            <Form setName={getNameFromInput} getInfo={getPokeInfo} />
        </section>
    )
}

export default PokemonPage