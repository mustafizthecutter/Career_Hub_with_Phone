import Logo from "./Logo";
import NavBar from "./NavBar";
const Header = () => {
    return (
        <div className="flex justify-between p-6 shadow-md mb-6 mt-2 rounded-lg">
            <Logo></Logo>
            <NavBar></NavBar>
        </div>
    );
};

export default Header;