import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "./AuthProvider";
import { useForm } from "react-hook-form";

const Update = () => {
    const { user, updateInfo, setLoading } = useContext(AuthContext);
    const {
        register,
        handleSubmit,
        formState: { errors, isDirty }
    } = useForm({
        defaultValues: {
            displayName: user.displayName,
            photoURL: user.photoURL
        }
    });
    const onSubmit = (data) => {
        updateInfo(data)
        .then(res => {
            setLoading(false);
            console.log('profile updated');
        })
        .catch(error => console.error(error));
    };
    return (
        <div>
            <Helmet>
                <title>Update Profile</title>
            </Helmet>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">View your profile & update info!</h1>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleSubmit(onSubmit)} noValidate>
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
                            <input type="text" className="input input-bordered" {...register("displayName", { 
                                required: 'Name is required',
                                pattern: {
                                    value: /^[a-zA-Z\s]+$/,
                                    message: "Name can't contain digits or special characters"
                                } })}/>
                            <p className="text-red-500 mt-2">{errors.displayName?.message}</p>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="url" className="input input-bordered" {...register("photoURL", { required: 'Photo URL is required' })}/>
                            <p className="text-red-500 mt-2">{errors.photoURL?.message}</p>
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn bg-slate-800 text-white" disabled={!isDirty}>Update profile</button>
                        </div>                        
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Update;