import './App.css'
import {Routes, Route} from "react-router-dom";
import {MainPage} from "./MainPage.jsx";
import {DisplayArticle} from "./DisplayArticle.jsx"


function App() {

    return (
        <div>
            <h1>Welcome to NC news</h1>
            <div className="display">
                    <Routes>
                        <Route path='' element={<MainPage/>}></Route>
                        <Route path='/articles/:article_id' element={<DisplayArticle/>}></Route>
                    </Routes>
            </div>
        </div>
    )
}

export default App
