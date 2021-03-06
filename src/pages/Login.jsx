import React, { useState } from "react";
import { Link } from "react-router-dom";
import LandingContainer from "../components/LandingContainer";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState('')

    return (
        <LandingContainer>
            <h2 className="text-primary font-weight-bolder">
                Welcome back to Marki...
            </h2>
            <p className='hero-text font-weight-normal'>
                Glad to have you back. Do reach out to the team for inquiries, complaints and suggestions. You are appreciated
            </p>
            <div className="form-group">
                <label htmlFor="email">
                    Enter your email
                    <input
                        type="email"
                        className="form-control border-radius mt"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
            </div>
            <div className="form-group mt">
                <label htmlFor="password">
                    Enter your preferred password
                    <input
                        type="password"
                        className="form-control border-radius mt"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    
                </label>
                <i className="fas fa-eye icon--brand icon--brand__reg text-primary"></i>
            </div>
            <small className="text-primary">
                Let it include lowercase, uppercase and number
            </small>
            <Link to="./courses">
                <button
                    className="btn btn-primary btn-lg btn-md mt-2"
                    type="submit"
                >
                    Login
                </button>
            </Link>
            <h3 className="font-weight-normal">
                Don't have an account?
                <Link to="./register" className="text-primary pl">
                    Get Started
                </Link>
            </h3>
        </LandingContainer>
    );
};

export default Login;
