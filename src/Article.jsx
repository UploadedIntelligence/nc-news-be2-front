import { Link } from "react-router-dom";

const Article = ({article}) => {

    return (
        <div className='article_card'>
            <Link to={`/articles/${article.article_id}`}>
                <h2 className='article_card_title'>{article.title}</h2>
            </Link>
            <div className='article_card_info'>
                <p>Author: {article.author}</p>
            </div>
        </div>
    )
}


export {Article}