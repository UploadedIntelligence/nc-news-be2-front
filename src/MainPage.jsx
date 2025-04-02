import {Article} from "./Article.jsx";
import {useApiRequest} from "./useApiRequest.jsx";
import {getArticles} from "./api.js";

const MainPage = () => {
    const result = useApiRequest(getArticles)

    return (
        <div className='articles'>
            <ul>
                {result.data.map((article) => {
                    return <li key={article.article_id}>
                        {<Article article={article}/>}
                    </li>
                })}
            </ul>
        </div>
    )
}

export {MainPage}