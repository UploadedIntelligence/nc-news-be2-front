import {ListArticles} from "./ListArticles.jsx";
import {useApiRequest} from "./useApiRequest.jsx";
import {getArticles} from "./api.js";
import {Loading} from "./Loading.jsx";
import {Error} from "./Error.jsx";


const MainPage = ({users, loggedUser, setLoggedUser, order, sortBy, selectedTopic}) => {
    const {data: articles, isLoading, error} = useApiRequest(getArticles, order, sortBy, selectedTopic)

    if (isLoading) {
        return <Loading />
    }

    if (error) {
        return <Error error={error}/>
    }

    const userChoice = (event) => {
        setLoggedUser(event.target.value)
    }

    const logOut = () => {
        setLoggedUser(null)
    }

    return (
        <div className='articles'>
            {loggedUser === null ?
            <form id='list_users_dropdown'>
                <label htmlFor='users' className='list_users_field'>Log in as: </label>
                <select name="users" id='users' className='users' onChange={userChoice}>
                    <option value="">Select a user</option>
                    {users.map(user => <option value={user.username} key={user.username}>{user.username}</option>)}
                </select>
            </form> :
                <div className='display_logged_user'>
                    Now logged in as: {loggedUser}
                    <p>
                        <button onClick={logOut}>Log out</button>
                    </p>
                </div>
            }
            <ListArticles articles={articles}/>
        </div>
    )
}

export {MainPage}