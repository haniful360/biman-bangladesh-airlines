import React, { useState } from 'react';
import DACtoJFK from '../DACtoJFK/DACtoJFK';
import JFKtoDAC from '../JFKtoDAC/JFKtoDAC';


const Home = () => {
    const [toggle, setToggle] = useState(true);

    return (
        <section className='max-w-5xl mx-auto relative px-4 lg:px-0 md:px-0'>
            <h1 className='text-[40px] text-center my-6 text-[#23e8b6] font-semibold'>Biman Bangladesh Airlines</h1>
            {
                toggle ? <DACtoJFK /> : <JFKtoDAC />
            }
            
            <div className='absolute top-32 right-6 lg:top-[120px] lg:right-[590px]'>
                <button onClick={() => setToggle(true)} className='btn'>airplane-1</button> <br />
                <button onClick={() => setToggle(false)} className='btn mt-2'>airplane-2</button>
            </div>
        </section>
    );
};

export default Home;