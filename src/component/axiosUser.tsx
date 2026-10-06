import { useEffect, useState } from "react"
import { api } from "../axios/axios"

type User = {
    name: string,
    email: string
}

type FetchUser = {
    users: User | null,
    error: boolean | null,
    loading: boolean | null
}

export const AxiosUser = () => {
    const [data, setData] = useState<FetchUser>({
        users: null,
        error: false,
        loading: true
    });


    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const getUser = await api.get('/users/1')
                setData({
                    users: getUser.data,
                    error: false,
                    loading: false
                })
            }
            catch (error) {
                setData({
                    users: null,
                    error: true,
                    loading: false
                })
            }
        };
        fetchUsers();
    }, [])

    return (
        <>
            <ol>
                {
                    data.loading ? <p>Loading</p> : data.error ? <p>Error</p> :
                        <>
                            <p>Name: {data.users?.name}</p>
                            <p>Email: {data.users?.email}</p>
                        </>
                }
            </ol>
        </>
    )

}