import { useState, useEffect } from 'react'

export const useFetch = (query) => {
    const [data, setData] = useState(null)

    useEffect(() => {
        const fetchData = async() => {
            const res = await fetch(`https://disease.sh/v3/covid-19/${query}`)
            const data = await res.json()

            setData(data)
        }

        fetchData()
    }, [query])

    return {
        data
    }

}


