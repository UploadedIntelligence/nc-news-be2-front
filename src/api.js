import axios from "axios";

const api = axios.create({
    baseURL: 'https://nc-news-be2.onrender.com/api'
})

const getArticles = (order='desc', sort_by='created_at', topic) => {
    if (topic) {
        return api.get(`/articles?order=${order}&sort_by=${sort_by}&topic=${topic}`)
            .then(({data}) => {
                return data.articles
            })
    } else {
        return api.get(`/articles?order=${order}&sort_by=${sort_by}`)
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

const postComment = (articleId, username, body) => {
    return api.post(`/articles/${articleId}/comments`,
        {username: username, body: body})
        .then(({data}) => {
            return data
        })
}

const deleteComment = (comment_id) => {
    return api.delete(`/comments/${comment_id}`)
}

const getUsers = () => {
    return api.get('/users')
        .then(({data}) => {
            return data.users
        })
}

const patchVote = (articleId, vote) => {
    console.log(vote)
    return api.patch(`/articles/${articleId}`, { inc_votes: vote })
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

export {getArticles, getArticle, getTopics, getComments, getUsers, patchVote, postComment, deleteComment}