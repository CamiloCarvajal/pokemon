function ItemGeneration({ generations }) {

    return (
        <>
            {
                generations.map((g, index) => {
                    return (
                        <li key={index}>
                            {g.name}
                        </li>
                    )
                }
                )
            }
        </>
    )

}

export default ItemGeneration
