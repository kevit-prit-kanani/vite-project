import { useState } from "react"

interface Like {
    count: number,
    flage: boolean
}

const initialState = {
    count: 0,
    flage: true
}
export const Posts = () => {
    return (
        <>
            <h1>This is the post</h1>
            <br />
            <p>Here is the discription</p>
            <br />
            <LikePost />
        </>
    )
}

const LikePost = () => {
    const [like, setLike] = useState<Like>(initialState)

    function onClick() {
        if (like?.flage) {
            setLike({ flage: false, count: like.count + 1 })
        }
        else {
            setLike({ flage: true, count: like!.count - 1 })
        }
    }

    return (
        <>
            <button
                type="button"
                className="counter"
                onClick={onClick}
            >
                {like.flage ? <p>Like this</p> : <p>Dislike this</p>}
            </button>
            <p> Like Count: {like?.count}</p>
        </>
    )

}