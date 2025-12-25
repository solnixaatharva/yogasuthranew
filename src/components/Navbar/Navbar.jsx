import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import swal from 'sweetalert';


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)
    console.log(user);

    const handelLogout = () => {
        logOut()
            .then(result => {
                // console.log(result);
                swal("Success", "Logout successfully", "success")
                return
            })
            .catch(err => {
                swal("Error", "Logout not successfully", "Error")
            })
    }



    const home = <NavLink
        to="/"
        className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? " text-red-400 border-b px-2 py-1 rounded-lg font-bold bgTrans" : "bgTrans"
        }
    >
        HOME
    </NavLink>;
    const shop = <NavLink
        to="/shop"
        className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? " text-red-400 border-b px-2 py-1 rounded-lg font-bold bgTrans" : "bgTrans"
        }
    >
        SHOP
    </NavLink>;
    const blog = <NavLink
        to="/blog"
        className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? " text-red-400 border-b px-2 py-1 rounded-lg font-bold bgTrans " : ""
        }
    >
        BLOGS
    </NavLink>;
    const aboutUs = <NavLink
        to="/aboutus"
        className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? " text-red-400 border-b px-2 py-1 rounded-lg font-bold bgTrans " : ""
        }
    >
        ABOUT US
    </NavLink>;
    const contactUs = <NavLink
        to="/contactus"
        className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? " text-red-400 border-b px-2 py-1 rounded-lg font-bold bgTrans " : ""
        }
    >
        CONTACT US
    </NavLink>;
    const faq = <NavLink
        to="/faq"
        className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? " text-red-400 border-b px-2 py-1 rounded-lg font-bold bgTrans " : ""
        }
    >
        FAQ'S
    </NavLink>;





    return (
        <div className="bg-[#DC2C5C]">
            <div className="max-w-screen-xl	 mx-auto md:px-2">
                <div className="px-4 md:px-4 lg:px-4   bg-none z-30 relative ">
                    <div className="navbar flex justify-between items-center ">
                        <div>
                            <img className="w-[250px] " src={'https://i.ibb.co/Mk1f8sQf/logoyogasuthra.png'} alt="" />
                            <h1 className="text-white text-5xl font-bold"></h1>
                        </div>
                        <div className="">
                            <div className="dropdown">
                                <label tabIndex={1} className="btn btn-ghost lg:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-[50px] text-white w-[50px]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                                </label>
                                <ul tabIndex={0} className=" menus menu-sm dropdown-content bg-white  py-4 border z-[10]  rounded-box  -left-20 ">
                                    <li className="text-4xl px-3">{home}</li>
                                    <li className="text-4xl px-3">{shop}</li>
                                    <li className="text-4xl px-3">{blog}</li>
                                    <li className="text-4xl px-3">{aboutUs}</li>
                                    <li className="text-4xl px-3">{contactUs}</li>
                                    <li className="text-4xl px-3 mb-5">{faq}</li>
                                    {
                                        user ? <>
                                            <Link onClick={handelLogout} className=" py-2 px-4 rounded-full font-bold bg-white text-gray-500 md:ml-4 lg:ml-6">
                                                Logout
                                            </Link>
                                        </> :
                                            <>
                                                <Link to='/login' className=" py-2 px-4 rounded-full font-bold bg-white text-gray-500 md:ml-4 lg:ml-6">
                                                    Login
                                                </Link>
                                            </>
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className="navbar-center hidden lg:flex">
                            <ul className=" menu-horizontal flex items-center px-4 gap-2 lg:gap-5  text-white font-medium md:font-bold">
                                <li className="">{home}</li>
                                <li className="">{shop}</li>
                                <li>{blog}</li>
                                <li>{aboutUs}</li>
                                <li>{contactUs}</li>
                                <li>{faq}</li>

                                {
                                    user ? <>

                                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                            {
                                                user ? <>
                                                    <div className="w-10 rounded-full flex items-center">
                                                        <img src={user.photoURL == null ? 'https://i.ibb.co/2vkJbGD/images.png' : user.photoURL} alt="" />
                                                    </div>
                                                    <p className="font-mono">{user.displayName == null ? 'MR' : user.displayName}</p>
                                                </> :
                                                    <>

                                                    </>
                                            }

                                        </label>
                                        <Link onClick={handelLogout} className=" py-2 px-4 rounded-full font-bold bg-white text-gray-500 md:ml-4 lg:ml-6">
                                            Logout
                                        </Link>
                                    </> :
                                        <>

                                            <Link to='/login' className=" py-2 px-4 rounded-full font-bold bg-white text-gray-500 md:ml-4 lg:ml-6">
                                                Login
                                            </Link>
                                        </>
                                }

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;