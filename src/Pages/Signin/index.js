import { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { MyContext } from "../../App";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Logo from "../../assests/images/logo.png";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { GrTwitter } from "react-icons/gr";
import axios from "axios";


const Signin = () => {
    const { setisheaderfootershow } = useContext(MyContext);
    const navigate = useNavigate(); // Initialize navigate
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        if (typeof setisheaderfootershow === "function") {
            setisheaderfootershow(false); // Hide the header
        }

        // Cleanup: Restore the header on component unmount
        return () => {
            if (typeof setisheaderfootershow === "function") {
                setisheaderfootershow(true);
            }
        };
    }, [setisheaderfootershow]);

    const handleSignin = async (e) => {
        e.preventDefault();
        setError(""); // Reset error message
        try {
            const response = await axios.post("http://localhost:4000/api/user/signin", { email, password });
            const { user,token, msg } = response.data;
            // Store token if needed (e.g., in localStorage)
            sessionStorage.setItem('userId', user._id);
            sessionStorage.setItem("authToken", token);
            console.log("User ID stored in sessionStorage:", user._id);
            console.log(msg);
            navigate("/"); // Redirect to home page

        } catch (error) {
            if (error.response && error.response.data.message) {
                setError(error.response.data.message);
            } else {
                setError("An error occurred. Please try again.");
            }
        }
    };

    return (
        <section className="section signinpage">
            <div>
                <div className="box card p-3 shadow border-0">
                    <div className="text-center">
                        <img src={Logo} alt="Logo" />
                    </div>

                    <form className="mt-0" onSubmit={handleSignin}>
                        <h2>Sign in</h2>
                        <div className="form-group">
                            <TextField
                                id="email"
                                label="Email"
                                type="email"
                                required
                                variant="standard"
                                className="w-100"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <TextField
                                id="password"
                                label="Password"
                                type="password"
                                required
                                variant="standard"
                                className="w-100"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        {error && <p className="text-danger">{error}</p>} {/* Display error message */}

                        <div className="frgtpas">
                            <a className="pass border-effect cursor">Forgot Password?</a>
                        </div>
                        <div className="d-flex align-items-center mt-3 mb-3">
                            <Button
                                className="action-btn btn-blue btn-lg col"
                                variant="contained"
                                type="submit"
                            >
                                Sign In
                            </Button>
                            <Link to="/" className="col">
                                <Button
                                    className="action-btn btn-blue btn-lg col"
                                    variant="contained"
                                >
                                    Cancel
                                </Button>
                            </Link>
                        </div>

                        <p className="mt-2">
                            Not registered?{" "}
                            <Link to="/Signup" className="border-effect cursor">
                                Sign up
                            </Link>
                        </p>
                        <h6 className="mt-4 text-center font-weight-bold">
                            Or continue with social account
                        </h6>
                        <div className="sclmdia text-center">
                            <Button>
                                <FaGoogle />
                            </Button>
                            <Button>
                                <FaFacebook />
                            </Button>
                            <Button>
                                <GrTwitter />
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Signin;
