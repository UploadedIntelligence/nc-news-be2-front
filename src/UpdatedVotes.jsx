import {useApiRequest} from "./useApiRequest.jsx";
import {patchVote} from "./api.js";
import {useEffect} from "react";

const UpdateVotes = ({article_id, voteType, setVoteType, setCurrentVotes}) => {
    const {data: article} = useApiRequest(patchVote, article_id, voteType)

    useEffect(() => {
        if (!Array.isArray(article)) {
            setVoteType(null)
            setCurrentVotes(article.votes)
        }
    }, [article])

    return (
        <p id='vote_count'>Loading...</p>
    )

}

export {UpdateVotes}