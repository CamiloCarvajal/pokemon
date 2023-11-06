import Image from "../atoms/Image"
import PokeName from "../atoms/PokeName"
import Types from "../atoms/Types";

function PokeDescription({ pokemon }) {

    const {
        sprites: { front_default: image }
    } = pokemon;

    const name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

    return (
        <>
            <Image source={image} alt={name} />
            <PokeName name={name} />
            <label>Atura: </label> <p>{pokemon.height}</p>
            <label>Peso: </label> <p>{pokemon.weight}</p>
            <label>Tipo: </label> <Types types={pokemon.types}/>
        </>
    )
}

export default PokeDescription