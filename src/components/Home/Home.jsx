import React, { useState } from 'react';
import DACtoJFK from '../DACtoJFK/DACtoJFK';
import JFKtoDAC from '../JFKtoDAC/JFKtoDAC';
import Navbar from '../Navbar/Navbar';


const Home = () => {
    const [toggle, setToggle] = useState(true);
    return (
        <section>
            {
                toggle ? <DACtoJFK /> : <JFKtoDAC />
            }
            
            <div className='absolute top-0 right-[650px]'>
                <button onClick={() => setToggle(true)} className='btn'>airplane 1</button> <br />
                <button onClick={() => setToggle(false)} className='btn mt-2'>airplane 2</button>
            </div>
        </section>
    );
};

export default Home;