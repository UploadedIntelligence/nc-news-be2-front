import './App.css'
import {Routes, Route} from "react-router-dom";
import {MainPage} from "./MainPage.jsx";
// import {DisplayArticle} from "./DisplayArticle.jsx"
// import {ArticlesProvider, TopicsProvider} from './Contexts.jsx'

function App() {

    return (
        <div>
            <h1>Welcome to NC news</h1>
            <div className="display">
                {/*<ArticlesProvider>*/}
                {/*<TopicsProvider>*/}
                    <Routes>
                        <Route path='' element={<MainPage/>}></Route>
                        {/*<Route path='/articles/:article_id' element={<DisplayArticle/>}></Route>*/}
                    </Routes>
                {/*</TopicsProvider>*/}
                {/*</ArticlesProvider>*/}
            </div>
        </div>
    )
}

export default App
