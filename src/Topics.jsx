import {useState, useRef, useEffect} from "react";

const Topics = ({topics, setSelectedTopic}) => {
    const [clicked, setClicked] = useState(false)
    const all_topics = topics.map(topic => topic.slug)
    const [results, setResults] = useState(all_topics)
    const topic_search = useRef(null)

    useEffect(() => {
        if(clicked) {
            topic_search.current.focus()
        }
    }, [clicked]);

    function handleSearch(e) {
        const value = e.target.value
        const filteredResult = all_topics.filter(topic => {
            return topic.toLowerCase().includes(value)
        })
        setResults(filteredResult)
    }

    function searchTopic(e) {
        if (e.target.value !== 'Select a topic') {
            setSelectedTopic(e.target.value)
        }
    }

    return (
        <div className='nav_item'>
            {!clicked ? (
                <button onClick={() => {
                    setClicked(true)
                    setResults(all_topics)
                }}>Topics</button>
            ) : (
                <div id='topic_search'>
                    <input type='text' ref={topic_search} onChange={handleSearch}/>
                    <select onChange={searchTopic}>
                        <option>Select a topic</option>
                        {results.map((item, idx) => {
                           return <option key={idx}>
                               {item}
                           </option>
                        })}
                    </select>
                    <p>
                        <button id='search_btn' onClick={() => setClicked(false)}>Close search</button>
                    </p>
                </div>
            )}
        </div>
    )
}

export {Topics}