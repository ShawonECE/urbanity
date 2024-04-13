import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { PropTypes } from 'prop-types';
const Facility = ({facility}) => {
    return (
        <div className="flex gap-2 items-center">
            <IoIosCheckmarkCircleOutline />
            <p>{facility[0].toUpperCase() + facility.slice(1)}</p>
        </div>
    );
};

Facility.propTypes = {
    facility: PropTypes.string.isRequired,
};

export default Facility;