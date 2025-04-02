import {getComments} from './api.js'
import {useApiRequest} from "./useApiRequest.jsx";

const Comments = ({article_id}) => {
    console.log(article_id)
    const { data: comments } = useApiRequest(getComments, article_id)

    return (
        <ul id='comment_section'>
            <p>Comments: </p>
            {comments.map(comment => {
                let [date, time] = comment.created_at.split('T')
                time = time.slice(0,5)
                return (
                    <div className='comment_body'>
                        <span id='comment_card_timestamp'>
                            On {date} at {time}
                        </span>
                        <span id='comment_card_author'> {comment.author}</span>
                        <span> said:</span>
                        <li key={comment.comment_id} className='article_comments'>
                        {comment.body}
                        </li>
                    </div>
                )
            })}
        </ul>
    )
}

export {Comments}