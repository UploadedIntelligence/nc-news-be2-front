import {useContext, useState} from "react";
import {UserContext} from "./App.jsx";
import {getComments, postComment} from "./api.js";

const WriteComment = ({article_id, setComments}) => {
    const [comment, setComment] = useState('')
    const {loggedUser} = useContext(UserContext)

    const updateInput = (event) => {
        setComment(event.target.value)
    }

    const Submit = async (event) => {
        event.preventDefault()
        await postComment(article_id, loggedUser, comment)
        getComments(article_id)
            .then(data => {
                setComments(data)
            })
    }

    return (
        <>
            {
            loggedUser === null ? <h2>Login to comment</h2> :
                <>
                    <p>Logged as: <span id='logged_user_comment'>{loggedUser}</span></p>
                    <label htmlFor='comment_form'>Write a comment: </label>
                    <form id='comment_form' onSubmit={Submit}>
                    <textarea id='input_form' onChange={updateInput}></textarea>
                        <button>Submit</button>
                    </form>
                </>
            }
        </>
    )
}

export {WriteComment}