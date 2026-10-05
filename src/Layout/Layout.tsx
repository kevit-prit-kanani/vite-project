import { Outlet } from "react-router"
import { Navbar } from "../component/Navbar"

export const Layout = () => {
    return (
        <>
            <Navbar />
            <main>
                <Outlet />
            </main>

        </>
    )
}