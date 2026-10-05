import { Link } from "react-router"
import "./Navbar.css"

export const Navbar = () => {
    return (
        <>
            <nav>
                <Link to="/" className="nav"> Dashboard</Link>
                <Link to="/profile" className="nav"> Profile</Link>
                <Link to="/settings" className="nav"> Settings</Link>
                <Link to="/like-posts" className="nav"> Like Post</Link>
                <Link to="/greetings" className="nav"> Greetings </Link>
                <Link to="/status-selector" className="nav"> Status Selector </Link>
                <Link to="/number-list" className="nav"> Number List </Link>
                <Link to="/product-detail" className="nav"> Product List </Link>
                <Link to="/redux-counter" className="nav"> Redux-counter </Link>
            </nav>
        </>
    )
}