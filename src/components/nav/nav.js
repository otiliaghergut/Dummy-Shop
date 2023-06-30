import { Link } from "react-router-dom"
import "./nav.css"

const Navigation = () => {
    return(
        <header className= "nav-container">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
        </header>
    )
}

export default Navigation;