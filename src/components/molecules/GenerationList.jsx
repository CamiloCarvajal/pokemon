import ItemGeneration from "../atoms/ItemGeneration"

function GenerationList({generations}) {

    return (

            <div>
                <h2>Generaciones</h2>
                <ul>
                    <ItemGeneration generations={generations} />
                </ul>
            </div>
        
    )

}

export default GenerationList
