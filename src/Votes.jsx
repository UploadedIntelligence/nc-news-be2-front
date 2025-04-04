import {useEffect, useState} from "react";
import {patchVote} from "./api.js";

const Votes = ({current_article, article_id}) => {
    const [voteType, setVoteType] = useState(null)
    const [currentVotes, setCurrentVotes] = useState(current_article.votes)
    const [article, setArticle] = useState(current_article)

    const castVote = (event) => {
        let arrow_value = event.target.innerText
        if (arrow_value === '↑') {
            setVoteType('upvote')
        } else {
            setVoteType('downvote')
        }
    }

    useEffect(() => {
        if (voteType) {
            patchVote(article_id, voteType)
                .then((article) => {
                    setArticle(article)
                })
            setVoteType(null)
        }
    }, [voteType]);

    useEffect(() => {
        setCurrentVotes(article.votes)
    }, [article]);


    return (
        <div className='voting_card'>
            <button id='upvote' onClick={castVote}>↑</button>
            {voteType === null ?
                <p id='vote_count'>Votes: {currentVotes}</p> :
                <p id='vote_count'>Loading...</p>}
            <button id='downvote' onClick={castVote}>↓</button>
        </div>
    )
}

export {Votes}