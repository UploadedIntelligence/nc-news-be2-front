import './App.css'
import {Routes, Route, Link, useLocation} from "react-router-dom";
import {MainPage} from "./MainPage.jsx";
import {DisplayArticle} from "./DisplayArticle.jsx"
import {useApiRequest} from "./useApiRequest.jsx";
import {getTopics, getUsers} from "./api.js";
import {createContext, useState} from "react";
import {Topics} from "./Topics.jsx";

const UserContext = createContext(null);

function App() {
    const {data: users} = useApiRequest(getUsers)
    const {data: topics} = useApiRequest(getTopics)
    const [loggedUser, setLoggedUser] = useState(null)
    const [selectedTopic, setSelectedTopic] = useState(undefined)
    const [order, setOrder] = useState(undefined)
    const [sortBy, setSortBy] = useState(undefined)
    const location = useLocation()

    const homeRefresh = (e) => {
        if (location.pathname === '/') {
            e.preventDefault()
            window.location.reload()
        }
    }

    return (
        <div className='home_page'>
            <h1>Welcome to NC news</h1>
            <div className='nav_bar'>
                <Link to={''} onClick={homeRefresh}>
                    <button className='nav_item' >Home</button>
                </Link>
                <Topics topics={topics} setSelectedTopic={setSelectedTopic}/>
            </div>

            <div className="display">
                <UserContext.Provider value={{loggedUser}}>
                    <Routes>
                        <Route path='' element={<MainPage users={users} loggedUser={loggedUser}
                                                          setLoggedUser={setLoggedUser} selectedTopic={selectedTopic}
                                                            order={order} sortBy={sortBy} />}>
                        </Route>
                        <Route path='/articles/:article_id' element={<DisplayArticle />}></Route>
                    </Routes>
                </UserContext.Provider>
            </div>
        </div>
    )
}

export {App, UserContext}
