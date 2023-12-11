import  { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png'
import { AuthProvider } from '../Server/AuthContext';


const Navber = () => {

  const {user, logout} = useContext(AuthProvider); 
  const navi = useNavigate();

    const linkPath = <>
     <li><Link to={'/'}>Home</Link></li>
     <li><a target='_blank' rel="noreferrer" href='https://play.google.com/store/apps/details?id=com.tech_land.shadighor&hl=en&gl=US'>Download App</a></li>
     <li><Link to={'/'}>Contact</Link></li>
    
     {
      user ?   '' : <li className='visible  sm:invisible'> <div className="">
      <Link to={'/join'} className="btn btn-success mx-2  text-white">Join</Link>
      <Link to={'/login'} className="btn btn-warning  mx-2 text-white">Log in</Link>
    </div>
     </li>
     }
     
    </>





    return (
        <div>
            <div className="navbar font-extrabold bg-transparent shadow-md text-orange-900">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm text-black dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52">
       {linkPath}
      </ul>
    </div>
    <Link to={'/'} className="btn btn-ghost normal-case text-xl">

     <img className='w-36' src={logo} alt="" srcSet="" />
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {linkPath}
    </ul>
  </div>
 <div className="navbar-end gap-2">
 {
    user ? <div className="dropdown dropdown-end mx-1">
    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
      <div className="w-10 rounded-full">
        <img src={user?.profile} />
      </div>
    </label>
    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      {/* <li>
        <a className="justify-between">
          Profile
          <span className="badge">New</span>
        </a>
      </li> */}
      {/* <li><a>Settings</a></li> */}
      <li><a onClick={()=>{ logout(); navi('/login')}}>Logout</a></li>
    </ul>
  </div> : <div  >
    <Link to={'/join'} className="btn btn-success mx-2 invisible sm:visible text-white">Join</Link>
    <Link to={'/login'} className="btn btn-warning mx-2 invisible sm:visible text-white">Log in</Link>
  </div>
  }
 </div>
  
</div>
        </div>
    );
};

export default Navber;