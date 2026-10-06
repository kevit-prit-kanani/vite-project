import React from "react";
import { useState } from "react";

const initiallist = [
    { id: 1, number: 1 },
    { id: 2, number: 2 },
    { id: 3, number: 3 },
    { id: 4, number: 4 },
    { id: 5, number: 5 },
    { id: 6, number: 6 },
    { id: 7, number: 7 },
    { id: 8, number: 8 },
    { id: 9, number: 9 },
    { id: 10, number: 10 },
]

export const NumberList = () => {
    const [list, setList] = useState<typeof initiallist>(initiallist);

    function remove(id: number) {
        setList((previousList) => previousList.filter((element) => element.id !== id))
    }
    return (
        <>
            <ul>
                {list.map((element) =>
                    <React.Fragment key={element.id}>
                        <li> {element.number}</li>
                        <button key={element.id} onClick={() => remove(element.id)}>delete</button>
                    </React.Fragment>
                )}
            </ul>
        </>
    )
}