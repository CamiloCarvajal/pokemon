import PokeDescription from "../molecules/PokeDescription"

function PokeCard({ pokemon }) {
    return (
        <div className="pokemon-card">
            <PokeDescription pokemon={pokemon} />
        </div>
    )

}

export default PokeCard