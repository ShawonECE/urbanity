import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";

const EstateCard = ({estate}) => {
    const navigate = useNavigate();
    const handleViewDetails = () => {
        navigate(`/details/${id}`);
    };
    const {estate_title, price, status, area, image, description, id} = estate;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold">
                    {estate_title}
                    <div className={`badge text-white ${status === 'rent' ? 'bg-orange-400' : 'bg-green-400'}`}>{status[0].toUpperCase() + status.slice(1)}</div>
                </h2>
                <p>{description}</p>
                <div className='flex font-semibold'>
                    <p>Area: {area}</p>
                    <p className='text-right'>Price: {price}</p>
                </div>
                <div className="card-actions justify-end mt-5">
                    <button onClick={handleViewDetails} className='btn bg-slate-800 text-white'>View details</button>
                </div>
            </div>
        </div>
    );
};

EstateCard.propTypes = {
    estate: PropTypes.object.isRequired,
};

export default EstateCard;