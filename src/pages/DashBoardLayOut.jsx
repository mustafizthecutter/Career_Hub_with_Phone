import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
const DashBoardLayOut = () => {
    return (
        <div>
            <h1 className="text-center font-bold text-3xl mb-4">this is dashboard layout</h1>

            <div className="flex gap-12">
                <div>
                    <div className="w-20% bg-orange-300 p-20 text-2xl  rounded-sm ">
                        <NavLink className={'block mb-4'} to={'/dashboard'}>DashBoard</NavLink>
                        <NavLink className={'block mb-4'} to={'/dashboard/profile'}>Profile</NavLink>
                        <NavLink className={'block mb-4'} to={'/dashboard/editProfile'}>EditProfile</NavLink>
                    </div>
                </div>
                <div className="w-80%">
                    <Outlet></Outlet>
                </div>
            </div>

        </div>
    );
};

export default DashBoardLayOut;