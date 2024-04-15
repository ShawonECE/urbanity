import { useLoaderData, useParams } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import Facility from "./Facility";
import { Helmet } from "react-helmet-async";
const EstateDetails = () => {
    const estates = useLoaderData();
    const {id} = useParams();
    const estate = estates.find(estate => estate.id == id);
    const {estate_title, segment_name, long_description, price, status, area, location, image, facilities} = estate;
    return (
        <div className="mt-6">
            <Helmet>
                <title>Estate Details</title>
            </Helmet>
            <div className="flex justify-between">
                <h1 className="text-3xl font-semibold">{estate_title} ({segment_name})</h1>
                <h1 className="text-3xl font-bold">{price}</h1>
            </div>
            <div className="flex justify-between mt-3">
                <div className="flex items-center gap-3">
                    <div className="badge badge-success gap-2 text-white p-3">FOR {status.toUpperCase()}</div>
                    <div className="badge badge-outline gap-2 p-3">
                        <FaLocationDot />
                        <p>{location.toUpperCase()}</p>
                    </div>
                </div>
                <h3 className="text-xl font-medium">{area}</h3>
            </div>
            <img src={image} alt="" className="w-full rounded-3xl mt-8" />
            <h2 className="text-2xl font-semibold mt-8 mb-2">Description</h2>
            <hr />
            <p className="text-lg mt-3">{long_description}</p>
            <h2 className="text-2xl font-semibold mt-8 mb-2">Facilities</h2>
            <hr />
            <div className="text-lg mt-3 grid grid-cols-1 md:grid-cols-2">
                {
                    facilities.map((facility, idx) => <Facility key={idx} facility={facility}></Facility>)
                }
            </div>
        </div>
    );
};

export default EstateDetails;