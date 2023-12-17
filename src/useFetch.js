import { useEffect, useState } from 'react'

function useFetch(url) {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const abortController = new AbortController()

        fetch(url, {signal: abortController.signal})
        .then(resp => {
            if(!resp.ok) {
                throw Error('Could not fetch the data for that resource.')
            }
            return resp.json()
        })
        .then(data => {
            setData(data)
            setIsPending(false)
            setError(null)
        })
        .catch(err => {
            if (err.name === "AbortError") {
                console.log('fetch aborted')
            } else {
                setIsPending(false)
                
                setError(err.message)
            }
        })
        return () => console.log("cleanup")
    }, [url])

    return {data, isPending, error}
}
export default useFetch