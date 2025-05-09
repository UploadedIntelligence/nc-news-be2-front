import {getArticle} from "./api.js";
import {useParams} from "react-router-dom";
import {useApiRequest} from "./useApiRequest.jsx";
import {Loading} from "./Loading.jsx";
import {Error} from "./Error.jsx";
import {Comments} from "./Comments.jsx";
import {Votes} from "./Votes.jsx";


const DisplayArticle = () => {
    const {article_id} = useParams()
    const {data: article, isLoading, error} = useApiRequest(getArticle, article_id)

    if (isLoading) {
        return <Loading />
    }

    if (error) {
        return <Error error={error}/>
    }

    return (
        <ul>
            <img src={article.article_img_url} alt='article image' className='article_img'/>
            <h2 id='article_title'>{article.title}</h2>
            <span id='article_card_author'>by {article.author}</span>
            <p id='article_card_body'>{article.body}</p>
            <Votes current_article={article} article_id={article_id}/>
            <div>
                <Comments article_id={article_id}/>
            </div>
        </ul>
    )
}

export {DisplayArticle}