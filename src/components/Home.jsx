import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Estates from "./Estates";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Urbanity | Home</title>
            </Helmet>
            <Banner></Banner>
            <Estates></Estates>
        </div>
    );
};

export default Home;