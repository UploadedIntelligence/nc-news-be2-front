import './App.css'
import {Routes, Route, Link} from "react-router-dom";
import {MainPage} from "./MainPage.jsx";
import {DisplayArticle} from "./DisplayArticle.jsx"
import {useApiRequest} from "./useApiRequest.jsx";
import {getUsers} from "./api.js";
import {createContext, useState} from "react";

const UserContext = createContext(null);

function App() {
    const {data: users} = useApiRequest(getUsers)
    const [loggedUser, setLoggedUser] = useState(null)

    return (
        <div>
            <h1>Welcome to NC news</h1>
            <Link to={''}>
                <h2>Home</h2>
            </Link>
            <div className="display">
                <UserContext.Provider value={{loggedUser}}>
                    <Routes>
                        <Route path='' element={<MainPage users={users} loggedUser={loggedUser} setLoggedUser={setLoggedUser}/>}></Route>
                        <Route path='/articles/:article_id' element={<DisplayArticle />}>
                        </Route>
                    </Routes>
                </UserContext.Provider>
            </div>
        </div>
    )
}

export {App, UserContext}
