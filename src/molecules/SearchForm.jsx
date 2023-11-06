import Input from "../components/atoms/Input"
import SearchButton from "../components/atoms/SearchButton"

function SearchForm({ setName, getInfo }) {
    return (
        <>
            <h3>Busca tu pokemon favorito</h3>
            <Input setName={setName} />
            <SearchButton getInfo={getInfo} />
        </>
    )
}

export default SearchForm