import { Link, NavLink } from "react-router-dom";
import { FaHome, FaQuestionCircle, FaUserCircle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { BiSolidDonateHeart } from "react-icons/bi";
import { FaUserPen } from "react-icons/fa6";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const links = (
    <>
      <li className="text-gray-700 font-bold">
        <NavLink to={"/"}>
          <FaHome />
          Home
        </NavLink>
      </li>
      <li className="text-gray-700 font-bold">
        <NavLink to={"/donationcampaigns"}>
          <BiSolidDonateHeart />
          Donation Campaigns
        </NavLink>
      </li>
      <li className="text-gray-700 font-bold">
        <NavLink to={"/howtohelp"}>
          <FaQuestionCircle />
          How to Help
        </NavLink>
      </li>
      <li className="text-gray-700 font-bold">
        <NavLink to={"/dashboard"}>
          <FaUserPen />
          Dashboard
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 lg:px-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to={"/"} className="lg:text-2xl font-bold">
          Winter Clothing Donation
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end gap-5 pr-4">
        {user && user.email ? (
          <Link to="/dashboard">
            <img
              referrerPolicy="no-referrer"
              className="w-10 h-10 bg-slate-500 rounded-full"
              src={user?.photoURL}
              alt="User Photo"
            />
          </Link>
        ) : (
          <Link to="/dashboard">
            <FaUserCircle className="w-10 h-10" />
          </Link>
        )}

        {user && user.email ? (
          <button
            onClick={logOut}
            className="bg-gray-700 text-white p-2 rounded"
          >
            Log Out
          </button>
        ) : (
          <Link className="bg-gray-700 text-white p-2 rounded" to="/auth/login">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
