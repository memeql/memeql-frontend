import { Link } from "react-router-dom"

function MemeIndex(props) {

    const loaded = () => {
    return props.memes.map((meme) => (
        <div key={meme._id} className="meme">
        <Link to={`/memes/${meme._id}`}>
            <h1>{meme.title}</h1>
        </Link>
        <img src={meme.image} alt={meme.title} />
        <p>{meme.description}</p>
        </div>
    ))
    }

    const loading = () => {
    return <h1>Loading...</h1>
    }

    return (
    <section>
        {props.memes ? loaded() : loading()}
    </section>
    )
}

export default MemeIndex