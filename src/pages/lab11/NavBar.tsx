import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/posts">Post list</Link>
                </li>
            </ul>
        </nav>
    );
}