import React from 'react';
import { Link } from 'react-router-dom';

const Navber = () => {

    const linkPath = <>
     <li><Link to={'/'}>Home</Link></li>
     <li><Link to={'/'}>Download App</Link></li>
     <li><Link to={'/'}>Contact</Link></li>
    </>





    return (
        <div>
            <div className="navbar font-extrabold bg-transparent shadow-md text-white">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm text-black dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {linkPath}
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">Shadi Ghor</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {linkPath}
    </ul>
  </div>
  <div className="navbar-end gap-2 ">
    <Link className="btn btn-success invisible sm:visible text-white">Join</Link>
    <Link className="btn btn-warning invisible sm:visible text-white">Log in</Link>
  </div>
  <div className="dropdown dropdown-end mx-1">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
</div>
        </div>
    );
};

export default Navber;