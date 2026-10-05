import { useState } from "react";

type istatus = "Pending" | "Approved" | "Rejected"

export const StatusSelector = () => {
    const [status, setStatus] = useState<istatus>("Pending");

    function onClick(props: istatus) {
        console.log(props)
    }

    return (
        <>
            <div> The Status Of the User is : {status}</div>
            <select defaultValue={"Pending"}>
                <option value={"Pending"} onClick={() => onClick("Pending")}>Pending</option>
                <option value={"Approved"} onClick={() => onClick("Approved")} >Approved</option>
                <option value={"Rejected"} onClick={() => onClick("Rejected")} >Rejected</option>
            </select>

        </>
    )
}