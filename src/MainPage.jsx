import {Article} from "./Article.jsx";
import {useApiRequest} from "./useApiRequest.jsx";
import {getArticles} from "./api.js";
import {Loading} from "./Loading.jsx";
import {Error} from "./Error.jsx";

const MainPage = () => {
    const {data: articles, isLoading, error} = useApiRequest(getArticles)

    if (isLoading) {
        return <Loading/>
    }

    if (error) {
        return <Error error={error}/>
    }

    return (
        <div className='articles'>
            <ul>
                {articles.map((article) => {
                    return <li key={article.article_id}>
                        {<Article article={article}/>}
                    </li>
                })}
            </ul>
        </div>
    )
}

export {MainPage}