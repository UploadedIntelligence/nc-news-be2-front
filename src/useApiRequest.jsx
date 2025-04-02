import {useEffect, useState} from "react";


const useApiRequest = (apiFunction, ...args) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true)
        apiFunction(...args)
            .then((data) => {
                setData(data);
                console.log(data)
            })
            .catch((err) => {
                console.log(err)
                setError({ status: 404, statusText: 'Failed to load'})
            })
            .finally(() => {
                setIsLoading(false)
            })
    }, [...args])

    return {data, isLoading, error}
}

export {useApiRequest}