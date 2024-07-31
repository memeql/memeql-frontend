import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import DemoPage from '../pages/DemoPage.jsx'

const Demo = (props) => {
    console.log(props.userData)
    console.log('hello from demo')
    const [demo, setDemo] = useState(null)
    
    const getDemo = async (props) => {
        const URL = `${props.baseBackendURL}demo/`
        console.log(`Demo connecting to backend on ${URL}`)
        const response = await fetch(URL, {
            method: "GET",
            credentials: 'include'
        })
        const data = await response.json()
        console.log(data)
        setDemo(JSON.stringify(data))
    }
    useEffect(() => {
        console.log('hello from demo useEffect')
        getDemo(props)
    }, [props.userData])

    return (
        <main>
            <Routes>
                <Route path="/" element={<DemoPage demo={demo} userData = {props.userData}
                  />}/>
            </Routes>
        </main>
    )
}

export default Demo