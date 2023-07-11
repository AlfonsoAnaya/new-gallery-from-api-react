import { Link } from "react-router-dom"

function Header() {
    return (
        <header>
            <Link to="/">
                <h1>
                    Explore Unsplash Images
                </h1>
            </Link>
            <Link to="/bookmarks">
                <p>Bookmarks</p>
            </Link>
        </header>
    )
}

export default Header;