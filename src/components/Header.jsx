import { Link } from "react-router-dom"
import './Header.css'

const Header = () => {
    return (
        <header className="header">
            <ul className="header-list  d-flex align-items-center justify-content-center">
                <li>
                    <Link to="/">Homepage</Link>
                </li>
                <li>
                    <Link to="/hakkimizda" prefetch="intent">About Us</Link>
                </li>
                <li>
                    <Link to="/haberler">News</Link>
                </li>
            </ul>
        </header>
    )
}
export default Header