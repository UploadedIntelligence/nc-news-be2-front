import {getComments} from './api.js'
import {useApiRequest} from "./useApiRequest.jsx";
import {WriteComment} from "./WriteComment.jsx";

const Comments = ({article_id}) => {
    console.log(article_id)
    const { data: comments } = useApiRequest(getComments, article_id)

    return (
        <ul id='comment_section'>
            <WriteComment />
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