import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'

const Demo = (props) => {
    console.log('hello from demo')
    const [demo, setDemo] = useState(null)
    
    const getDemo = async (props) => {
        const URL = `${props.baseBackendURL}demo/`
        console.log(`Demo connecting to backend on ${URL}`)
        const response = await fetch(URL)
        const data = await response.json()
        console.log(data)
        setDemo(JSON.stringify(data))
    }

    useEffect(() => {
        console.log('hello from demo useEffect')
        getDemo(props)
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