import React, { useContext } from 'react';
import { CatagoryContext } from '../../App';
import Catagory from '../Catagories/Catagory';

const Home = () => {
    const  [count, setCount]  = useContext(CatagoryContext);

    return (
        <div>
            <h1>This is from home: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increase</button> <br /> <br />
            
            <button onClick={() => setCount(count - 1)}>Decrease</button> 

            <Catagory ></Catagory> 
        </div>
    );
   
};

export default Home;