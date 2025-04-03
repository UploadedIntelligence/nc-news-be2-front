import axios from "axios";

const api = axios.create({
    baseURL: 'https://nc-news-be2.onrender.com/api'
})

const getArticles = (selectedCategory) => {
    if (selectedCategory) {
        return api.get(`/articles?topic=${selectedCategory}`)
            .then(({data}) => {
                return data
        })
    } else {
        return api.get('/articles')
            .then(({data}) => {
                return data.articles
            })
    }
}

const getArticle = (articleId) => {
    return api.get(`/articles/${articleId}`)
        .then(({data}) => {
            return data.article
        })
}

const getComments = (articleId) => {
    return api.get(`/articles/${articleId}/comments`)
        .then(({data}) => {
            return data.comments
        })
}

const patchVote = (articleId, vote) => {
    return api.patch(`/articles/${articleId}/${vote}`)
        .then(({data}) => {
            return data.article
        })
}

const getTopics = () => {
    return api.get('/topics')
        .then(({data}) => {
            return data.topics
        })
}

export {getArticles, getArticle, getTopics, getComments, patchVote}