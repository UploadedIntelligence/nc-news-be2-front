import { Link } from "react-router-dom";
import {Votes} from "./Votes.jsx";

const ListArticles = ({articles}) => {

    return (
        <ul>
        {articles.map((article) => {
            return (
            <li key={article.article_id}>
                <div className='article_card'>
                    <Link to={`/articles/${article.article_id}`}>
                        <h3>{article.topic}</h3>
                        <h2 className='article_card_title'>{article.title}</h2>
                        <img src={article.article_img_url} alt='article image' className='article_img'/>
                    </Link>
                    <Votes current_article={article} article_id={article.article_id}></Votes>
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