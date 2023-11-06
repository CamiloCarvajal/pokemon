function ItemGeneration({ generations }) {

    return (
        <>
            {
                generations.map((g) => {
                    return (
                        <li>
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
