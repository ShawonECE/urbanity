import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";

const Login = () => {
    const {user, setUser, signInWithGoogle, signInWithGithub} = useContext(AuthContext);
    const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then(result => {
            const {displayName, email, photoURL} = result.user;
            const newUser = {displayName, email, photoURL};
            setUser(newUser);
        })
        .catch(error => console.error(error))
    };
    const handleGithubSignIn = () => {
        signInWithGithub()
        .then(result => {
            const {displayName, email, photoURL} = result.user;
            const newUser = {displayName, email, photoURL};
            setUser(newUser);
        })
        .catch(error => console.error(error))
    };
    return (
        <div className="hero min-h-screen bg-base-200 rounded-2xl">
            <Helmet>
                <title>Urbanity | Log In</title>
            </Helmet>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login here to get all access!</h1>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn bg-slate-800 text-white">Log in</button>
                        </div>
                        <button onClick={handleGoogleSignIn} className="btn"><FaGoogle />Log in with Google</button>
                        <button onClick={handleGithubSignIn} className="btn"><FaGithub />Log in with GitHub</button>
                        <p className="text-center">
                            <Link to='/register' className="label-text-alt link link-hover">Don&apos;t have an account? Register now</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;