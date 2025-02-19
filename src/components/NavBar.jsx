import { Link, NavLink } from "react-router-dom";
import { LuUserCircle } from "react-icons/lu";
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";

const NavBar = () => {
    const {user, logOutUser, loading} = useContext(AuthContext);
    const handleLogOut = () => {
        logOutUser()
        .then(res => console.log(res))
        .catch(error => console.error(error));
    };
    return (
        <div className="navbar bg-base-100 px-0">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="text-base menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/contact">Contact us</NavLink></li>
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
                {
                    !loading && (user?.photoURL? 
                        <div className="avatar tooltip tooltip-bottom" data-tip={user.displayName}>
                            <div className="w-8 rounded-full">
                                <img src={user.photoURL} />
                            </div>
                        </div>
                        :
                        <LuUserCircle className="text-[32px]" />)
                }
                {
                    loading && 
                    <div className="skeleton w-8 h-8 rounded-full shrink-0"></div>
                }
                {
                    !loading && (user ?
                        <button onClick={handleLogOut} className="btn">Log Out</button>
                        :
                        <Link to='/login'><button className="btn">Log In</button></Link>)
                }
                {
                    loading &&
                    <div className="skeleton w-24 h-12"></div>
                }
            </div>
        </div>
    );
};

export default NavBar;