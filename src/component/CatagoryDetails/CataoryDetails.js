import React, { useContext } from 'react';
import { CatagoryContext } from '../../App';

const CataoryDetails = (props) => {
    const {name} = props.product;
    
    return (
        <div>
            <h1>Cataory details : {name}</h1>
            <h6>Selected catagory : {name}</h6>
            
        </div>
    );
};

export default CataoryDetails;