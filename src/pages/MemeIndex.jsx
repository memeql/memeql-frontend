import { Link } from "react-router-dom"
import { useState } from "react"

function MemeIndex(props) {

    const loaded = () => {

        const [newMemeData, setNewMemeData] = useState({
            title: '',
            image: '',
            description: '' 
        })
    
        const handleChange = (event) => {
            setNewMemeData({...newMemeData, [event.target.name]: event.target.value})
        }
    
        const handleSubmit = async (event) => {
            event.preventDefault()
            await props.createMeme(newMemeData)
            setNewMemeData({
                title: '',
                image: '',
                description: '' 
            })
        }

        const memes = props.memes.map((meme) => (
            <div key={meme._id} className="col">
            <Link to={`/memes/${meme._id}`}>
                <h3>{meme.title}</h3>
            </Link>
            <img src={meme.image} alt={meme.description} title={meme.description}/>
            </div>
        ))
        return (
        <>
            <div className="container">
                <h1>Memes</h1>
                <h3>Add a new meme:</h3>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="title" placeholder="title" value={newMemeData.title} onChange={handleChange} />
                    <input type="text" name="image" placeholder="image url" value={newMemeData.image} onChange={handleChange} />
                    <input type="text" name="description" placeholder="meme description" value={newMemeData.description} onChange={handleChange} />
                    <input type="submit" value="Submit" />
                </form>
                <div className="row">
                    {memes}
                </div>
            </div>
        </>
        ) 
    }

    const loading = () => {
    return (
        <div className="container">
            <h1>Loading...or are you not logged in?</h1>
            <img src="https://memeql.blob.core.windows.net/public/memeAboutMemes.jpg" alt="memeAboutMemes.jpg" />
        </div>
        ) 
    }

    return (
    <section>
        {props.memes ? loaded() : loading()}
    </section>
    )
}

export default MemeIndex