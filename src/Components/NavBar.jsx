import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="flex gap-6">
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/products'}>Products</NavLink>
            <NavLink to={'/dashboard'}>Dashboard</NavLink>
        </div>
    );
};

export default NavBar;