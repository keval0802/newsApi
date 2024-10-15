import React, { useEffect } from 'react'

function NewData() {
    useEffect(() => {
        fetchData()
    }, [])
    const fetchData = async () => {
        const URL = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=af38b42e1f974d2cb9758cf5ef4122ba"
        const response = await fetch(URL)
        if (response) {
            const data = await response.json()
            console.log(data, "data===>")
        }
    }
    return (
        <div>

        </div>
    )
}

export default NewData
