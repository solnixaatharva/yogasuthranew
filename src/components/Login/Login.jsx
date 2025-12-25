import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useState } from "react";
import swal from 'sweetalert';
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";

const Login = () => {
    useEffect(()=>{
        Aos.init({duration:1000})
    },[])
    const { logIn, googleSignIn } = useContext(AuthContext);
    const location = useLocation();
    console.log(location);
    const navigate = useNavigate()
    const [loginError, setLoginError] = useState()
    const [loginSuccess, setLoginSuccess] = useState()



    const handelSignIn = (e) => {
        setLoginError('')
        setLoginSuccess('')
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(name, email, password);
        logIn(email, password)
            .then(result => {
                console.log(result);
                // alert('Login Successfully')
                swal("Success!", "Login Successfully", "success")
                navigate(location?.state ? location.state : '/')
                return

            })
            .catch(error => {
                console.log(error);
                if (error.message) {
                    setLoginError("Password doesn't match")
                    return
                }
            })
    }

    const handelGoogleSignIn = () => {
        console.log('click google');
        googleSignIn()
            .then(result => {
                console.log(result);
                swal("Success!", "Login Successfully", "success")
                navigate(location?.state ? location.state : '/')
                return
            })
            .fatch(error => {
                console.log(error);
            })
    }

    return (
        <div>
            <div className=" max-w-7xl mx-auto">
                <h1 data-aos="flip-up" className="text-4xl font-extrabold text-center my-8 text-[#DC2C5C]">LOGIN</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-4 ">

                    <div data-aos="fade-up-right" className="shadow-md rounded-lg">
                        <h1 className="text-2xl font-bold text-gray-400 mt-4 text-center">Please Login & Access Yoga Service</h1>
                        <form onSubmit={handelSignIn} className="card-body px-4 ">
                            <div className="form-control">
                                <input type="text" name="name" placeholder="Name" className="input w-full input-bordered rounded-full" required />
                            </div>
                            <div className="form-control">
                                <input type="email" name="email" placeholder="Email" className="input input-bordered rounded-full my-4" required />
                            </div>
                            <div className="form-control">
                                <input type="password" name="password" placeholder="Password" className="input input-bordered rounded-full" required />
                            </div>
                            <h1 className="text-sm p-2">Forget Password</h1>
                            {
                                loginError && (
                                    <div className="text-red-500 font-bold text-center my-2">
                                        {<div className="text-red-500 font-bold text-center my-2">
                                            {loginError}
                                        </div>}
                                    </div>
                                )
                            }
                            {
                                loginSuccess && (
                                    <div >
                                        {<div className="text-green-500 font-bold text-center my-2">
                                            {loginSuccess}
                                        </div>}
                                    </div>
                                )
                            }
                            <div className="flex justify-center">
                                <button className="btn bg-[#ED0B5A] hover:text-gray-500 px-8 rounded-full text-white">Login</button>
                            </div>

                        </form>
                        <h2 className="text-center text-lg font-semibold">Not a member ? Please <Link to='/register' className="text-[#ED0B5A] underline">Register</Link> </h2>
                        <h4 className="text-md text-center">OR</h4>
                        <div className="flex justify-center ">
                            <div onClick={handelGoogleSignIn} className="cursor-pointer flex items-center my-2 gap-3 justify-center w-[250px] border p-2 rounded-full">
                                <FcGoogle className="text-xl"></FcGoogle>
                                <h2 className=" text-md font-bold ">Continue with Google</h2>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-up-left" className="">
                        <img src={'https://i.ibb.co/wC6YM3D/about003-d85a9cb4-d856-42e0-85ae-aa744e21e11a-600x.webp'} className=" rounded-lg shadow-2xl" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;