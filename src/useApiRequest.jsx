import {useEffect, useState} from "react";


const useApiRequest = (apiFunction, ...args) => {
    const [data, setData] = useState([]);
    // const [isLoading, setIsLoading] = useState(true);
    // const [error, setError] = useState(null);

    useEffect(() => {
        apiFunction(...args)
            .then((data) => {
                setData(data);
                console.log(data)
            })
    }, [...args])

    return {data}
}

export {useApiRequest}