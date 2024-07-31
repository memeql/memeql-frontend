import { useEffect, useState } from "react"
import {useParams, useNavigate} from "react-router-dom"

const ShowMeme = (props) => {
    console.log(props.comments)
    const params = useParams()
    const navigate = useNavigate()
    const memeId = params.id
    console.log(props.memes)
    const meme = props.memes.find((m) => m._id === memeId)
    const comments = (props.comments).filter((c) => c.parent_meme_id === memeId) 
    
    const [editMemeForm, setEditMemeForm] = useState(meme)
    
    const handleMemeChange = (event) => {
        setEditMemeForm({ ...editMemeForm, [event.target.name]: event.target.value })
    }

    const handleMemeSubmit = (event) => {
        event.preventDefault()
        props.updateMeme(editMemeForm, meme._id)
        navigate("/")
    }

    const removeMeme = (event) => {
        event.preventDefault()
        props.deleteMeme(meme._id)
        navigate("/")
    }

    const commentsShow = comments.map((comment) => (
        <div key={comment._id} className="comment">
            <h6>{comment.author_user_id} says:</h6>
            <p>{comment.comment_text}</p>
        </div>
    ))

    const [newComment, setNewComment] = useState({
        comment_text: ''
    })
    
    const handleCommentChange = (event) => {
        setNewComment({...newComment, [event.target.name]: event.target.value})
    }

    const handleCommentSubmit = (event) => {
        event.preventDefault()
        props.createComment(newComment, meme._id)
        setNewComment({
            comment_text: ''
        })
    }

    return (
    <div className="meme_show">
        <div className="container">
            <div className="row">
                <div className="col">
                    <form onSubmit={handleMemeSubmit}>
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input className="form-control" type="text" name="title" id="title" value={editMemeForm.title} onChange={handleMemeChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <input className="form-control" type="text" name="description" id="description" value={editMemeForm.description} onChange={handleMemeChange} />   
                        </div>
                        <input type="submit" value="Update Meme" />
                    </form>
                    <p><button id="delete_meme" onClick={removeMeme}>Delete Meme</button></p>
                    <img src={meme.image} alt={meme.title} />
                </div>
                <div className="comments col">
                    <h4>Comments</h4>
                        {commentsShow}
                        <form onSubmit={handleCommentSubmit}>
                            <input type="text" name="comment_text" value={newComment.comment_text} onChange={handleCommentChange} />
                            <input type="submit" value="Add Comment" />
                        </form>
                </div>
            </div>
        </div>
    </div>
    )
}

export default ShowMeme