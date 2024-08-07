import { properties } from "../dummyData";
import Image from "next/image";
import heart from "../../app/assets/heart.png"

const PropertyCard = () => {
    const firstThreeProperties = properties.slice(0, 5); // Get the first 3 properties

    return (
        <div>
            {firstThreeProperties.map((property) => (
                <div className="flex justify-around" key={property.id}>
                    <Image className="m-5 rounded-2xl" width={100} height={100} src={property.image} />
                    <div className="m-5">
                        <p>Price: ${property.price}</p>
                        <p>Address: {property.address}</p>
                        <p>{property.sqFeet} Square ft</p>
                    </div>
                    <div className="m-5">
                    <Image width={30} height={30} src={heart}/>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PropertyCard;