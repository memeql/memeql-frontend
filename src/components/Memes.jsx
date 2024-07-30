import { useEffect, useState } from "react"
import { Route, Routes } from 'react-router-dom'
import MemeIndex from "../pages/MemeIndex.jsx"

const Memes = (props) => {
  const [memes, setMemes] = useState(null)
  const [newMeme, setNewMeme] = useState(null)
  const [updatedMeme, setUpdatedMeme] = useState(null)
  const [deletedMeme, setDeletedMeme] = useState(null)

  const getMemes = async (props) => {
    const URL = `${props.baseBackendURL}memes/`
    console.log(`Memes connecting to backend on ${URL}`)
    const reponse = await fetch(URL, {
      method: "GET",
      credentials: 'include'
    })
    const data = await reponse.json()
    setMemes(data.data)
  }

  const createMeme = async (memeData) => {
    const URL = `${props.baseBackendURL}memes/`
    console.log(`Creating meme on ${URL}`)
    const response = await fetch(URL, {
      method: "POST",
      credentials: 'include',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(memeData),
    })
    const data = await response.json()
    console.log(data)
    setNewMeme(data.data)
  }

  const updateMeme = async (memeId, memeData) => {
    const URL = `${props.baseBackendURL}memes/${memeId}`;
    console.log(`Updating meme with ID ${memeId} on ${URL}`);
    const response = await fetch(URL, {
        method: "PUT",
        credentials: 'include',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(memeData),
    });
    const data = await response.json();
    console.log(data);
    setUpdatedMeme(data);
};


  const deleteMeme = async (memeId) => {
    const URL = `${props.baseBackendURL}memes/${memeId}`
    console.log(`Deleting meme with ID ${memeId} on ${URL}`)
    const response = await fetch(URL, {
      method: "DELETE",
      credentials: 'include'
    })
    const data = await response.json()
    console.log(data)
    setDeletedMeme(data.data)
  }


  useEffect(() => {
    getMemes(props)
  }, [])

  return (
    <main>
      <Routes>
        <Route path="/memes" element={<MemeIndex
          memes={memes} createMeme={createMeme} updateMeme={updateMeme} deleteMeme={deleteMeme}
        />} />
      </Routes>
    </main>
  )
}

export default Memes