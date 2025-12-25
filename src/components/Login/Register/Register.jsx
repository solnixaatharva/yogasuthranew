

import { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { BiError } from "react-icons/bi";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";




const Register = () => {
    useEffect(()=>{
        Aos.init({duration:1000})
    },[])

    const { createUser } = useContext(AuthContext);
    const [registerError, setRegisterError] = useState()
    const [passwordError, setSetPasswordError] = useState()
    const [upperCaseErr, setUpperCaseErr ] = useState()
    const [success, setSuccess] = useState('')



    const handelRegister = (e) => {
        e.preventDefault()
        // reset error 
        
        setRegisterError('');
        setSuccess('');
        setSetPasswordError('')
        setUpperCaseErr('')
        
        const displayName = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(name, email, password);
        if (password.length < 6) {
            // Password is too short
            console.log('Password at least 6 characters');
            setSetPasswordError('Password at least 6 characters');
            return; 
        } else if ((/^(?![A-Z])[^!@#$%^&*()_+{}\[\]:;<>,.?~\\\/]*$/.test(password))) {
            setUpperCaseErr(' At least one uppercase(A-Z) and Special Character');
            return; 
        }
        
        
       

        createUser(email, password, displayName)
            .then(result => {
                // console.log(result);
                setSuccess('User Created Successfully')
                return
            })
            .catch(error => {
                // setRegisterError(error.message);
                // setRegisterError(error.message)
                if(error.message){
                    setRegisterError('Already Register')
                    return
                }

            })
    }



    return (
        <div>
            <div>
                <div className=" max-w-7xl mx-auto">
                    <h1 data-aos="flip-up" className="text-4xl font-extrabold text-center my-8 text-[#DC2C5C]">REGISTER</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-4 ">

                        <div data-aos="fade-up-right" className="shadow-md rounded-lg">
                            <h1 className="text-2xl font-bold text-gray-400 mt-4 text-center">Please Register & Access Yoga Service</h1>
                            <form onSubmit={handelRegister} className="card-body px-4 ">
                                <div className="form-control">
                                    <input type="text" placeholder="Name" name='name' className="input w-full input-bordered rounded-full" required />
                                </div>
                                <div className="form-control">
                                    <input type="email" placeholder="Email" name='email' className="input input-bordered rounded-full my-4" required />
                                </div>
                                <div className="form-control">
                                    <input type="password" name='password' placeholder="Password" className="input input-bordered rounded-full" required />
                                </div>
                                <h1 className="text-sm p-2">Forget Password</h1>
                                {/* Display the error message */}
                                {registerError && (
                                    <div className="text-red-500 font-bold text-center my-2">      
                                          {registerError}
                                    </div>
                                )}
                                {upperCaseErr && (
                                    <div className="text-red-500 font-bold text-center my-2">      
                                          {upperCaseErr}
                                    </div>
                                )}
                                {passwordError && (
                                    <div className="text-red-500 font-bold text-center my-2">      
                                          {passwordError}
                                    </div>
                                )}
                                {success && (
                                    <div className="text-green-500 font-bold text-center my-2">      
                                         {success}  
                                    </div>
                                )}
                                <div className="flex justify-center">
                                    <button className="btn bg-[#ED0B5A] hover:text-gray-500 px-8 rounded-full text-white">Register</button>
                                </div>

                            </form>
                            <h2 className="text-center text-lg font-semibold">Already have an Account ? Please <Link to='/login' className="text-[#ED0B5A] underline">Login</Link> </h2>


                        </div>
                        <div data-aos="fade-up-left" className="">
                            <img src={'https://i.ibb.co/wC6YM3D/about003-d85a9cb4-d856-42e0-85ae-aa744e21e11a-600x.webp'} className=" rounded-lg shadow-2xl" />
                        </div>
                    </div>
                </div>
            </div>
            {/* <ToastContainer /> */}
        </div>
    );
};

export default Register;