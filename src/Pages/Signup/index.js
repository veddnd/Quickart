import { useEffect, useContext } from 'react';
import { MyContext } from '../../App';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Logo from '../../assests/images/logo.png'
import { Link } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { GrTwitter } from "react-icons/gr";

const Signup = () => {
    const { setisheaderfootershow } = useContext(MyContext);

    useEffect(() => {
        if (typeof setisheaderfootershow === 'function') {
            setisheaderfootershow(false); // Hide the header
        }

        // Cleanup: Restore the header on component unmount
        return () => {
            if (typeof setisheaderfootershow === 'function') {
                setisheaderfootershow(true);
            }
        };
    }, [setisheaderfootershow]);

    return (
        <section className="section signinpage signuppage">
            <div>
                <div className=" box card p-3 shadow border-0">
                    <div className='text-center'>
                        <img src={Logo} alt='Logo' />
                    </div>

                    <form className="mt-0">
                        <h2>Sign up</h2>
                        <div className='row '>
                            <div className="col-md-6">
                                <div className='form-group'>
                                    <TextField id="standard-basic" label="Name" type="name" required variant="standard" className='w-100' />
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className=' form-group'>
                                    <TextField id="standard-basic" label="Phone no" type="text" required variant="standard" className='w-100' />
                                </div>
                            </div>
                        </div>

                        <div className='form-group'>
                            <TextField id="standard-basic" label="Email" type="email" required variant="standard" className='w-100' />
                        </div>


                        <div className='form-group'><TextField id="standard-basic" label="Password" type="Password" required variant="standard" className='w-100' /></div>




                        <div className='frgtpas'> <a className='pass border-effect cursor'>Forgot Password?</a></div>

                        <div className='d-flex align-items-center mt-3 mb-3'>
                            <Button className='action-btn btn-blue btn-lg col' variant="contained">Sign Up</Button>
                            <Link to='/' className='col'>
                                <Button className='action-btn btn-blue btn-lg col' variant="contained">Cancel</Button>
                            </Link>
                        </div>


                        <p className='mt-2'>Not registered? <Link to="/Signup" className="border-effect cursor" >Sign up</Link></p>
                        <h6 className='mt-4 text-center font-weight-bold'>Or continue with social account</h6>
                        <div className='sclmdia text-center'>
                            <Button><FaGoogle /></Button>
                            <Button><FaFacebook /></Button>
                            <Button><GrTwitter /></Button>
                        </div>
                    </form>

                </div>
            </div >
        </section >
    );
};

export default Signup;
