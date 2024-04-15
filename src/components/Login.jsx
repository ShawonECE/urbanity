import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { useForm } from "react-hook-form";

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const location = useLocation();
    const navigate = useNavigate();
    const { signInWithGoogle, signInWithGithub, signInUser } = useContext(AuthContext);
    const onSubmit = (data) => {
        const { email, password } = data;
        signInUser(email, password)
            .then(result => {
                navigate(location.state ? location.state : '/');
                console.log('You have successfully signed in')
            })
            .catch(error => console.error(error));
    };
    const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then(result => {
            // alert('You have successfully signed in with Google');
            navigate(location.state ? location.state : '/');
        })
        .catch(error => console.error(error))
    };
    const handleGithubSignIn = () => {
        signInWithGithub()
        .then(result => {
            navigate(location.state ? location.state : '/');
            console.log('You have successfully signed in with Github');
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
                    <form className="card-body" onSubmit={handleSubmit(onSubmit)} noValidate>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Enter your email" className="input input-bordered" {...register("email", { 
                                required: 'Email is required',
                                pattern: {
                                    value: /^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,}$/,
                                    message: 'Please enter a valid email address'
                                } })} />
                            <p className="text-red-500 mt-2">{errors.email?.message}</p>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="Enter password" className="input input-bordered" {...register("password", {
                                required: 'Password is required', 
                            })} />
                            <p className="text-red-500 mt-2">{errors.password?.message}</p>
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn bg-slate-800 text-white">Log in</button>
                        </div>                        
                    </form>
                    <button onClick={handleGoogleSignIn} className="btn mx-8 -mt-6 mb-2"><FaGoogle />Log in with Google</button>
                    <button onClick={handleGithubSignIn} className="btn mx-8 mb-3"><FaGithub />Log in with GitHub</button>
                    <p className="text-center mb-8">
                        <Link to='/register' className="label-text-alt link link-hover">Don&apos;t have an account? Register now</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;