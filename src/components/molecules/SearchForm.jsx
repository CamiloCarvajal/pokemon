import Input from "../atoms/Input"
import SearchButton from "../atoms/SearchButton"


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