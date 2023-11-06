function SearchButton({ getInfo }) {

    // console.log(getInfo)
    return (
        <button
            onClick={getInfo}>
            Buscar
        </button>
    )
}

export default SearchButton