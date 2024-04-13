import { useEffect, useState } from "react";
import EstateCard from "./EstateCard";

const Estates = () => {
    const [estates, setStates] = useState([]);
    useEffect(() => {
        fetch('https://shawonece.github.io/fake-data/estate.json')
        .then(res => res.json())
        .then(data => setStates(data))
    }, []);
    return (
        <div>
            <h1 className="text-4xl font-bold text-center mt-12">Our Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-7">
                {
                    estates.map(estate => <EstateCard key={estate.id} estate={estate}></EstateCard>)
                }
            </div>
        </div>
    );
};

export default Estates;