import {deleteComment, getComments} from './api.js'
import {WriteComment} from "./WriteComment.jsx";
import {UserContext} from "./App.jsx";
import {useContext, useEffect, useState} from "react";

const Comments = ({article_id}) => {
    const {loggedUser} = useContext(UserContext)
    const [comments, setComments] = useState([])

    useEffect(() => {
        getComments(article_id)
            .then(data => {
                setComments(data)
            })
    }, []);

    const queryDeleteComment = async (comment_id) => {
        await deleteComment(comment_id)
        getComments(article_id)
            .then(data => {
                setComments(data)
            })
    }

    return (
        <ul id='comment_section'>
            <WriteComment article_id={article_id} setComments={setComments}/>
            <p>Comments: </p>
            {comments.map(comment => {
                let [date, time] = comment.created_at.split('T')
                time = time.slice(0,5)
                return (
                    <div className='comment_body' key={comment.comment_id}>
                        <span id='comment_card_timestamp'>
                            On {date} at {time}
                        </span>
                        <span id='comment_card_author'> {comment.author}</span>
                        <span> said:</span>
                        {comment.author === loggedUser ?
                            <div>
                                <button onClick={() => {
                                    queryDeleteComment(comment.comment_id);
                                }}>Delete comment</button>
                            </div> : null}
                        <li className='article_comments'>
                        {comment.body}
                        </li>
                    </div>
                )
            })}
        </ul>
    )
}

export {Comments}