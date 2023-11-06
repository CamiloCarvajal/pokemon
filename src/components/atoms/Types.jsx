function Types({ types }) {

    return (
        <>
            {
                types.map((t, index) => {

                    const {
                        type: { name: pokeType }
                    } = t;

                    return (
                        <p key={index}>{pokeType}</p>
                    )

                }
                )

            }
        </>
    )

}

export default Types