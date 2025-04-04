import { Link } from "react-router-dom";

const ListArticles = ({articles}) => {

    return (
        <ul>
        {articles.map((article) => {
            return (
            <li key={article.article_id}>
                <div className='article_card'>
                    <Link to={`/articles/${article.article_id}`}>
                        <h2 className='article_card_title'>{article.title}</h2>
                    </Link>
                    <div className='article_card_info'>
                        <p>Author: {article.author}</p>
                    </div>
                </div>
            </li>
            )
        })}
        </ul>
    )
}


export {ListArticles}