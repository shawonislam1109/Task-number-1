import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Navbar = () => {
    const { user, LogOUt } = useContext(AuthContext);
    const itemMenu = <React.Fragment>
        <li><Link to='/'>Add Task</Link></li>
        <li><p>My Task </p></li>
        <li><p>Complete Task</p></li>
    </React.Fragment>

    const logingOUt = () => {
        LogOUt()
            .then(result => { })
            .catch(error => console.log(error))
    }
    return (
        <div>
            <div className="navbar md:w-9/12 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {itemMenu}
                        </ul>
                    </div>
                    <Link className="btn btn-ghost normal-case text-xl font-bold"> Daily <span className='text-violet-500 ml-2'> Task</span></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {itemMenu}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user?.uid ?

                            <>
                                <div className='flex justify-around items-center'>
                                    <Link to='/login'><button onClick={logingOUt} className=' btm-nav-xs md:btm-nav-sm btn btn-active btn-error'>Log Out</button></Link>
                                    <div className="avatar">
                                        <div className="w-12 md:w-16 rounded-full ml-2">
                                            <img src="https://placeimg.com/192/192/people" alt='' />
                                        </div>
                                    </div>
                                </div>
                            </>
                            :
                            <>
                                <div className='flex justify-around items-center'>
                                    <Link to='/login'><button className=' btn-nav-xs md:btm-nav-sm btn btn-active btn-error'>Log In</button></Link>
                                    <Link to='/signup'><button className='btn-nav-xs md:btm-nav-sm btn btn-active btn-error md:ml-3 ml-2'>Sign Up</button></Link>
                                </div>
                            </>
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;