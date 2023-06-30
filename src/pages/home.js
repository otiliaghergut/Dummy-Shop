import { useEffect, useState } from "react";
import { getProducts, getProductCategories, getProductsByCategory, getProductById} from "../services/api";
import Card from "../components/card/card";
import { useNavigate } from "react-router-dom";

const Home = () => {

    const [products, setProducts] = useState([]);
    const[categories, setCategories] = useState([]);
    const[page, setPage] = useState(0);
    
    const navigate = useNavigate();

    const pageQty = 10;

    useEffect(() => {
        getProductCategories()
            .then(res => setCategories(res))
    }, []);

    useEffect(() => {
        console.log("componenet did mount");
        getProducts(page, pageQty) 
            .then(res => setProducts(res.products))
    }, [page])

    const handlePrevPage = () => {
        if(page === 0)return;
        setPage(state => state-1)
    }
    
    const handleNextPage = () => {
        //if(page === 0)return;
        setPage(state => state+1)
    }

    const handleSelectCategory = (e) => {
         const category = e.target.value;
         if(category !== 'all') {
            getProductsByCategory(category)
                .then(res => setProducts(res.products))
        }
        else {
            getProducts(page, pageQty) 
            .then(res => setProducts(res.products))
        }
    }

    const handleRedirect = (productId) => {
        console.log(productId)
        navigate(`details/${productId}`)
    }

    return(
        <>
            <div className="home-controls">    
                <select onChange={handleSelectCategory} placeholder="selecy category">
                    {["all", ...categories].map(cat => <option key={cat} value={cat}>{cat}</option>)}
                </select>
                <button onClick={handlePrevPage}>Prev</button>
                <button onClick={handleNextPage}>Next</button>
            </div>
            <div className="home-container">
                {products.length > 0 &&  products.map((product) => (
                    <Card 
                        key={product.id}
                        imgSrc={product.thumbnail}
                        title={product.title}
                        description={product.description}
                        price={product.price}
                        onClick={() => handleRedirect(product.id)}
                    />))}
            </div>
        </>
    )
}

export default Home;