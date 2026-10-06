import { useState } from "react";

type istatus = "Pending" | "Approved" | "Rejected"

export const StatusSelector = () => {
    const [status, setStatus] = useState<istatus>("Pending");

    function changeStatus(props: istatus) {
        setStatus(props)
    }

    return (
        <>
            <div> The Status Of the User is : {status}</div>
            <select defaultValue={"Pending"} onClick={(e) => changeStatus(e.currentTarget.value as istatus)}>
                <option value={"Pending"} >Pending</option>
                <option value={"Approved"} >Approved</option>
                <option value={"Rejected"} >Rejected</option>
            </select>
        </>
    )
}