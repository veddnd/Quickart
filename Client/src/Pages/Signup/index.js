import { useState, useEffect, useContext } from 'react';
import { MyContext } from '../../App';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Logo from '../../assests/images/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { GrTwitter } from "react-icons/gr";

const Signup = () => {
    const [formfields, setformfields] = useState({
        name: "",
        phone: "",
        email: "",
        password: ""
    });

    const [isloading, setisloading] = useState(false);
    const { setisheaderfootershow, setAlertBox } = useContext(MyContext);
    const navigate = useNavigate();

    const onchangeinput = (e) => {
        setformfields({
            ...formfields,
            [e.target.name]: e.target.value
        });
    };

    const signup = async (e) => {
        e.preventDefault();
        try {
            if (!formfields.name || !formfields.phone || !formfields.email || !formfields.password) {
                setAlertBox({
                    open: true,
                    error: true,
                    msg: "All fields are required"
                });
                return;
            }

            setisloading(true);

            const response = await fetch('http://localhost:4000/api/user/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formfields)
            });

            const data = await response.json();
            setisloading(false);

            if (response.ok) {
                setAlertBox({
                    open: true,
                    success: true,
                    msg: "Registered successfully!"
                });

                // Redirect to Signin page after 2 seconds
                setTimeout(() => {
                    navigate('/signin');
                }, 2000);
            } else {
                setAlertBox({
                    open: true,
                    error: true,
                    msg: data.message || 'Registration failed'
                });
            }
        } catch (error) {
            console.error(error);
            setAlertBox({
                open: true,
                error: true,
                msg: "Something went wrong"
            });
            setisloading(false);
        }
    };

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
                <div className="box card p-3 shadow border-0">
                    <div className='text-center'>
                        <img src={Logo} alt='Logo' />
                    </div>
                    <form onSubmit={signup} className="mt-0">
                        <h2>Sign up</h2>
                        <div className='row'>
                            <div className="col-md-6">
                                <div className='form-group'>
                                    <TextField 
                                        id="name" 
                                        name="name" 
                                        label="Name" 
                                        type="text" 
                                        value={formfields.name} 
                                        onChange={onchangeinput} 
                                        required 
                                        variant="standard" 
                                        className='w-100' 
                                    />
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='form-group'>
                                    <TextField 
                                        id="phone" 
                                        name="phone" 
                                        label="Phone no" 
                                        type="text" 
                                        value={formfields.phone} 
                                        onChange={onchangeinput} 
                                        required 
                                        variant="standard" 
                                        className='w-100' 
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='form-group'>
                            <TextField 
                                id="email" 
                                name="email" 
                                label="Email" 
                                type="email" 
                                value={formfields.email} 
                                onChange={onchangeinput} 
                                required 
                                variant="standard" 
                                className='w-100' 
                            />
                        </div>
                        <div className='form-group'>
                            <TextField 
                                id="password" 
                                name="password" 
                                label="Password" 
                                type="password" 
                                value={formfields.password} 
                                onChange={onchangeinput} 
                                required 
                                variant="standard" 
                                className='w-100' 
                            />
                        </div>
                        <div className='d-flex align-items-center mt-3 mb-3'>
                            <Button type="submit" className='action-btn btn-blue btn-lg col' variant="contained" disabled={isloading}>
                                {isloading ? 'Signing Up...' : 'Sign Up'}
                            </Button>
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
            </div>
        </section>
    );
};

export default Signup;
