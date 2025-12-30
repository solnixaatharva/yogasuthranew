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



    const linkClass = ({ isActive, isPending }) =>
        isPending
            ? "pending"
            : isActive
                ? "px-3 py-2 rounded-full font-bold text-neutral-900"
                : "px-3 py-2 text-neutral-800";

    const home = <NavLink to="/" className={linkClass}>HOME</NavLink>;
    const shop = <NavLink to="/shop" className={linkClass}>SHOP</NavLink>;
    const trainer = <NavLink to="/trainer" className={linkClass}>TRAINER</NavLink>;
    const classes = <NavLink to="/classes" className={linkClass}>CLASSES</NavLink>;

    /*const aboutUs = <NavLink to="/aboutus" className={linkClass}>ABOUT US</NavLink>;*/
    const yogasuthra = <NavLink to="/yogasuthra" className={linkClass}>YOGASUTHRA</NavLink>;
    const contactUs = <NavLink to="/contactus" className={linkClass}>CONTACT US</NavLink>;
    /*const faq = <NavLink to="/faq" className={linkClass}>FAQ'S</NavLink>;*/





    return (
        <div className="relative bg-sun shadow-none">

            <div className="max-w-screen-xl	 mx-auto md:px-2">
                <div className="px-4 md:px-4 lg:px-4   bg-none z-30 relative ">
                    <div className="navbar flex justify-between items-center ">
                        <div className="flex items-center py-2 relative">

                            <div className="p-0 z-40 bg-transparent">
                                <div className="w-20 h-20 md:w-22 md:h-22 lg:w-24 lg:h-24 rounded-full overflow-hidden bg-white shadow-sm flex items-center justify-center">
                                    <img
                                        className="w-full h-full object-contain p-2"
                                        src="/images/newyogasuthralogo.jpeg"
                                        alt="YogaSuthra logo"
                                    />
                                </div>

                            </div>

                        </div>
                        <div className="">
                            <div className="dropdown">
                                <label tabIndex={1} className="btn btn-ghost lg:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-[50px] text-neutral-800 w-[50px]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                                </label>
                                <ul tabIndex={0} className=" menus menu-sm dropdown-content text-neutral-800 py-4 z-[10] rounded-box -left-20 shadow-md bg-sun">
                                    <li className="text-4xl px-3">{home}</li>
                                    <li className="text-4xl px-3">{shop}</li>
                                    <li className="text-4xl px-3">{trainer}</li>
                                    <li className="text-4xl px-3">{classes}</li>

                                    {/*<li className="text-4xl px-3">{aboutUs}</li>*/}
                                    <li className="text-4xl px-3">{yogasuthra}</li>
                                    <li className="text-4xl px-3">{contactUs}</li>
                                    {/*<li className="text-4xl px-3 mb-5">{faq}</li>*/}
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
                            <ul className=" menu-horizontal flex items-center px-4 gap-8 lg:gap-12  text-neutral-800 font-medium md:font-bold tracking-wide">
                                <li className="">{home}</li>
                                <li className="">{shop}</li>
                                <li className="">{trainer}</li>
                                {/*<li>{aboutUs}</li>*/}
                                <li className="">{classes}</li>

                                <li className="">{yogasuthra}</li>
                                <li className="">{contactUs}</li>
                                {/*<li>{faq}</li>*/}

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