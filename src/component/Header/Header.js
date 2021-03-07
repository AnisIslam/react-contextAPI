import React, { useContext, useState } from 'react';
import { CatagoryContext } from '../../App';

const Header = () => {
    const [count, setCount] = useContext(CatagoryContext);
    

    return (
        <div>
            <h1>This is a header: {count}</h1>
            <button onClick={() => setCount('Laptop')}>Laptop</button> <br /> <br />
            <button onClick={() => setCount('MObile')}>MObile</button> <br /> <br />
            <button onClick={() => setCount('Camera')}>Camera</button> <br /> <br />
            {/* <button onClick={() => setCount(count - 1)}>Decrease</button> */}

        </div>
    );
};

export default Header;