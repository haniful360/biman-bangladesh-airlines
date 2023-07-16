import React from 'react';
import { TbCurrencyTaka } from 'react-icons/tb';
const JFKtoDAC = () => {
    return (
        <div>
            <div className='lg:flex md:flex justify-center'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  shadow-sm border-dotted border-e-2 border-white-200 rounded-md'>
                    <div>
                        <img className='w-10 h-10' src="https://i.ibb.co/DGCKnXV/airlines-logo.png" alt="" />
                        <h3>Biman Bangladesh <br /> Airlines</h3>
                        <p className='text-[#23e8b6]'>BG 178 | W & BG 671 | E</p>
                        <span>5H 35MIN</span>
                        <span>2 STOP</span>
                    </div>
                    <div>
                        <h2>JFK</h2>
                        <p>Hazrat Shajalal Intl Airport</p>
                        <span className='text-[#23e8b6]'>19:05</span> <br />
                        <span>SUN 4TH JUL 2022</span>
                        <div className='flex justify-between text-[#23e8b6] mt-6'>
                            <span>Refundable</span>
                            <span>class-W</span>
                        </div>
                    </div>
                    <div className='relative'>

                    </div>
                    <div>
                        <h2>DFC</h2>
                        <p>JF Kennedy Intl Airport</p>
                        <span className='text-[#23e8b6]'>12:05</span> <br />
                        <p className='mb-6'>MON 6TH JUL 2022</p>
                        <span className='text-[#23e8b6]'>Baggage: 45 KG</span>
                    </div>
                </div>
                <div className='shadow rounded-md'>
                    <h2><TbCurrencyTaka></TbCurrencyTaka> 12000</h2>
                    <button className='btn bg-[#23e8b6] rounded-2xl text-white'>Book Now</button> <br />
                    <button>Flight Details</button>
                </div>
            </div> 
            
        </div>
    );
};

export default JFKtoDAC;