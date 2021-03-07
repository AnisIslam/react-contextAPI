import React, { useContext, useEffect, useState } from 'react';
import { CatagoryContext } from '../../App';
import CataoryDetails from '../CatagoryDetails/CataoryDetails';

const allProducts = [
    { name: 'Lenovo', catagory: 'laptop' },{ name: 'Asus', catagory: 'laptop' },{ name: 'Microsoft', catagory: 'laptop' },
    { name: 'Samsung', catagory: 'Mobile' },{ name: 'Walton', catagory: 'Mobile' },{ name: 'Apple', catagory: 'Mobile' },
    { name: 'Sony', catagory: 'camera' },{ name: 'Nikkon', catagory: 'camera' },{ name: 'Canon', catagory: 'camera' }
]

const Catagory = () => {

    const [catagory] = useContext(CatagoryContext);
    const [products, setProduct] = useState([]);

    useEffect(() =>{
        console.log(catagory);
        const matchedProducts = allProducts.filter(pd=> pd.catagory.toLowerCase() === catagory.toLowerCase() );
        setProduct(matchedProducts);

    },[catagory])
    return (
        <div>
            <h4>Select your catagory: {catagory}</h4>
            {
                products.map(pd => <CataoryDetails product ={pd} ></CataoryDetails>)
            }


        </div>
    );
};

export default Catagory;