import axios from "axios";

const api = axios.create({
    baseURL: 'https://nc-news-be2.onrender.com/api'
})

const getArticles = (selectedCategory) => {
    if (selectedCategory) {
        return api.get(`/articles?topic=${selectedCategory}`)
            .then(({data}) => {
                console.log(data)
                return data
        })
    } else {
        return api.get('/articles')
            .then(({data}) => {
                console.log(data.articles)
                return data.articles
            })
    }
}

const getArticle = (articleId) => {
    return api.get(`/articles/${articleId}`)
        .then(({data}) => {
            console.log(data)
            return data.article
        })
}

const getComments = (articleId) => {
    return api.get(`/articles/${articleId}/comments`)
        .then(({data}) => {
            console.log(data)
            return data.comments
        })
}

const getTopics = () => {
    return api.get('/topics')
        .then(({data}) => {
            return data.topics
        })
}

export {getArticles, getArticle, getTopics, getComments}