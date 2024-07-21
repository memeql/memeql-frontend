import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'

const Demo = () => {
    console.log('hello from demo')
    const [demo, setDemo] = useState(null)
    const URL = `https://backend-memeql-prod.azurewebsites.net/demo`

    const getDemo = async () => {
        const response = await fetch(URL)
        const data = await response.json()
        console.log(data)
        setDemo(JSON.stringify(data))
    }

    useEffect(() => {
        console.log('hello from demo useEffect')
        getDemo()
    }, [])

    return (
        <main>
            <Routes>
                <Route path="/" element={demo}>
                </Route>
            </Routes>
        </main>
    )
}

export default Demo