import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../middleware/userProvider";
import { useNavigate } from "react-router-dom";
export default function NavBar() {
    const navigate = useNavigate();
    const { logout } = useContext(UserContext);
    const handleClick = () => {
        logout();
        navigate("/");
    };
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light p-3">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/home">
                    GEO
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div
                    className=" collapse navbar-collapse"
                    id="navbarNavDropdown"
                >
                    <ul className="navbar-nav ms-auto ">
                        <li className="nav-item">
                            <Link to="/home" className="nav-link mx-2">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <button
                                onClick={handleClick}
                                className="btn btn-info"
                                type="button"
                            >
                                Logout
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
