import { useEffect, useState } from "react"
import { api } from "../axios/axios"

type Users = {
    name: string,
    email: string
}

export const AxiosUser = () => {
    const [user, setUser] = useState<Users[]>([])
    async function getUsers() {
        const users = await api.get('/users')
        setUser(users.data)
    }
    useEffect(() => {
        getUsers()
    }, [user])

    return (
        <>
            <ol>
                {
                    user && user.map((element) =>
                        <>
                            <div> Name: {element.name} | email: {element.email}  </div>
                            <br />
                        </>
                    )
                }
            </ol>
        </>
    )

}