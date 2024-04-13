import { Link, NavLink } from "react-router-dom";
import { LuUserCircle } from "react-icons/lu";

const NavBar = () => {
    return (
        <div className="navbar bg-base-100 px-0">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="text-base menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 z-10">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/about">About us</NavLink></li>
                        <li><NavLink to="/update-profile">Update Profile</NavLink></li>
                    </ul>
                </div>
                <p className="text-lg font-bold">Urbanity</p>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-base">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/contact">Contact us</NavLink></li>
                    <li><NavLink to="/update-profile">Update Profile</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end gap-3">
                <div className="avatar">
                    <div className="w-8 rounded-full">
                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </div>
                <LuUserCircle className="text-[32px]" />
                <Link to='/login'><button className="btn">Log In</button></Link>
            </div>
        </div>
    );
};

export default NavBar;