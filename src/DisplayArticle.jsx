import {getArticle} from "./api.js";
import {useParams} from "react-router-dom";
import {useApiRequest} from "./useApiRequest.jsx";
import {Loading} from "./Loading.jsx";
import {Error} from "./Error.jsx";
import {Comments} from "./Comments.jsx";


const DisplayArticle = () => {
    const {article_id} = useParams()
    console.log(article_id)
    const {data: article, isLoading, error} = useApiRequest(getArticle, article_id)

    if (isLoading) {
        return <Loading />
    }

    if (error) {
        console.log(error)
        return <Error error={error}/>
    }

    if (!article) {
        return <Loading />
    }

    // useEffect(() => {
    //     const display_date = article.created_at.split('T')[0]
    //     const display_time = article.created_at.split('T')[1].slice(0,5)
    //     console.log(display_date)
    //     console.log(display_time)
    // }, [article])

    return (
        <ul>
            <img src={article.article_img_url} alt='article image' className='article_img'/>
            <h2>{article.title}</h2>
            <span id='article_card_author'>by {article.author}</span>
            <p>{article.body}</p>
            <div>
                <Comments article_id={article_id}/>
            </div>
        </ul>
    )
}

export {DisplayArticle}