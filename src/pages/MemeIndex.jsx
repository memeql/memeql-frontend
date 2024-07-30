import { useState } from "react"
import { Link } from "react-router-dom"

const MemeIndex = (props) => {
  const [newMemeData, setNewMemeData] = useState({ title: '', imageUrl: '' })

  const handleNewMemeSubmit = (event) => {
    event.preventDefault()
    props.createMeme(newMemeData)
    setNewMemeData({ title: '', imageUrl: '' })
  }

  const handleNewMemeInputChange = (event) => {
    setNewMemeData({ ...newMemeData, [event.target.name]: event.target.value })
  }

  const handleDeleteMemeClick = (memeId) => {
    props.deleteMeme(memeId);
  }

  return (
    <div>
      <h1>Memes</h1>
      <ul>
        {props.memes && props.memes.map((meme) => (
          <li key={meme.id}>
            <h2>{meme.title}</h2>
            <img src={meme.imageUrl} alt={meme.title} />
            <button onClick={() => handleDeleteMemeClick(meme.id)}>Delete</button>
            <button onClick={() => props.onEditMeme(meme)}>Edit</button>
          </li>
        ))}
      </ul>
      <form onSubmit={handleNewMemeSubmit}>
        <input type="text" name="title" placeholder="Title" value={newMemeData.title} onChange={handleNewMemeInputChange} />
        <input type="text" name="imageUrl" placeholder="Image URL" value={newMemeData.imageUrl} onChange={handleNewMemeInputChange} />
        <button type="submit">Create</button>
      </form>
    </div>
  )
}


export default MemeIndex