import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../services/api";

const ProductDetails = () => {

    const params = useParams();
    console.log(params);

    useEffect(() => {
        getProductById(params.id)
        .then(res => console.log(res))
    }, []) 

    return(
        <div>
            Details
        </div>
    )
}

export default ProductDetails;