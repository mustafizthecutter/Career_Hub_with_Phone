import { NavLink } from "react-router-dom";
import './Header.css'
// import { Link } from "react-router-dom";
const NavBar = () => {
    return (
        <nav>
            <div className="flex gap-6">
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/products'}>Products</NavLink>
                <NavLink to={'/dashboard'}>Dashboard</NavLink>
            </div>
        </nav>
    );
};

export default NavBar;