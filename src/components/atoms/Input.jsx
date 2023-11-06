function Input({setName}) {
    return (
        <input
        name="poke-name"
        className="poke-name"
        placeholder="Busca por nombre"
        onChange={setName}
        />

    )
}

export default Input