import { Helmet } from "react-helmet-async";
import { AuthContext } from "./AuthProvider";
import { useContext } from "react";

const Contact = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <Helmet>
                <title>Contact Us</title>
            </Helmet>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Find us and get your dream property!</h1>
                    <h3 className="text-xl font-semibold mt-8">Urbanity Developers Ltd.</h3>
                    <p>Plot #15, Block #C,
                        Bashundhara Residential Area,
                        Bashundhara R/A,
                        Dhaka - 1229,
                        Bangladesh.</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" className="input input-bordered" defaultValue={user.email} disabled/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" className="input input-bordered" defaultValue={user.displayName} disabled/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Message</span>
                            </label>
                            <textarea className="textarea textarea-bordered" placeholder="Your message here"></textarea>
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn bg-slate-800 text-white">Send Message</button>
                        </div>                        
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;