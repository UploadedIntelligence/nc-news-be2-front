import {useState} from "react";
import {UpdateVotes} from "./UpdatedVotes.jsx";

const Votes = ({votes, article_id}) => {
    const [voteType, setVoteType] = useState(null)
    const [currentVotes, setCurrentVotes] = useState(votes)

    const castVote = (event) => {
        let arrow_value = event.target.innerText
        if (arrow_value === '↑') {
            setVoteType('upvote')
        } else {
            setVoteType('downvote')
        }
    }

    return (
        <div className='voting_card'>
            <button id='upvote' onClick={castVote}>↑</button>
            {voteType === null ?
                <p id='vote_count'>Votes: {currentVotes}</p> :
                <UpdateVotes article_id={article_id} voteType={voteType} setVoteType={setVoteType} setCurrentVotes={setCurrentVotes}/>}
            <button id='downvote' onClick={castVote}>↓</button>
        </div>
    )
}

export {Votes}