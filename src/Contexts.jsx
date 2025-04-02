// import {createContext, useEffect, useState} from "react";
// import {getArticles, getTopics} from './api.js'
//
// const ArticlesContext = createContext();
//
// const ArticlesProvider = (({children}) => {
//     const [articles, setArticles] = useState([])
//
//     useEffect(() => {
//         getArticles()
//             .then((data) => {
//                 setArticles(data)
//             })
//     }, [])
//
//     return <ArticlesContext.Provider value={{articles, setArticles}}>
//         {children}
//     </ArticlesContext.Provider>
// })
//
// const TopicsContext = createContext();
//
// const TopicsProvider = (({children}) => {
//     const [topics, setTopics] = useState([])
//
//     useEffect(() => {
//         getTopics()
//             .then((data) => {
//                 setTopics(data)
//             })
//     }, [])
//
//     return <TopicsContext.Provider value={{topics, setTopics}}>
//         {children}
//     </TopicsContext.Provider>
// })
//
// export {ArticlesProvider, ArticlesContext, TopicsContext, TopicsProvider}