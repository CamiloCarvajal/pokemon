import { useEffect, useState } from "react"
import Generation from "../organisms/Generation"

function GenerationPage(params) {


    const [generation, setGeneration] = useState(null)

    useEffect(() => {

        const apiGenerations = 'https://pokeapi.co/api/v2/generation/'

        fetch(apiGenerations)
            .then((response) => { return response.json() })
            .then((response) => setGeneration(response.results))
            .catch((error) => (console.error(error)))
    }, [])


    if (generation) {
        return (
            <section className="generations-section">
                <Generation generations={generation} />
            </section>
        )
    }

}

export default GenerationPage