import React from 'react';

const FirstFlightDetails = () => {
    return (
        <section>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                <div>
                    <img className='w-8 h-8' src="https://i.ibb.co/DGCKnXV/airlines-logo.png" alt="" />
                    <h3>Biman Bangladesh Airlines</h3>
                    <p className='text-[#23e8b6] text-[18px]'>BG 617</p>
                    <span className='text-[14px]'>Operated by : BG</span> <br />
                    <span className='text-[14px]'>Economy: G</span>
                </div>
                <div>
                    <span className='text-[16px]'>Depart</span><br />
                    <h1 className='text-[24px]' >DAC</h1>
                    <p className='text-[18px]'>Dhaka, BD | 15.00</p>
                    <span className='text-[16px]'>Terminal, Hazrat Sha Jalal International Airport</span> <br />
                    <span className='text-[16px]'>Sun, 3rd june 2022</span>
                </div>
                <div>
                    <span>55 mins</span>
                    <img className='w-16 ' src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Arrow_right.svg/1280px-Arrow_right.svg.png" alt="" />
                </div>
                <div>
                    <span className='text-[16px]'>Depart</span><br />
                    <h1 className='text-[24px]'>DXB</h1>
                    <p className='text-[18px]'>Dhaka, BD | 15.00</p>
                    <span className='text-[16px]'> Terminal, Hazrat Sha Jalal International Airport</span> <br />
                    <span className='text-[16px]'>Sun, 3rd june 2022</span>
                </div>
            </div>
            <div className='bg-[#23e8b784] w-3/4 mx-auto my-4'>
                <p className='text-center text-[#3333339e]'>Change planes at International | Kuwait (KWI), connecting Time: 04h:10m</p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                <div>
                    <img className='w-8 h-8' src="https://i.ibb.co/DGCKnXV/airlines-logo.png" alt="" />
                    <h3>Biman Bangladesh Airlines</h3>
                    <p className='text-[#23e8b6] text-[18px]'>BG 617</p>
                    <span className='text-[14px]'>Operated by : BG</span> <br />
                    <span className='text-[14px]'>Economy: G</span>
                </div>
                <div>
                    <span className='text-[16px]'>Depart</span><br />
                    <h1 className='text-[24px]' >DXB</h1>
                    <p className='text-[18px]'>Dhaka, BD | 15.00</p>
                    <span className='text-[16px]'>Terminal, Hazrat Sha Jalal International Airport</span> <br />
                    <span className='text-[16px]'>Sun, 3rd june 2022</span>
                </div>
                <div>
                    <span>55 mins</span>
                    <img className='w-16 ' src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Arrow_right.svg/1280px-Arrow_right.svg.png" alt="" />
                </div>
                <div>
                    <span className='text-[16px]'>Depart</span><br />
                    <h1 className='text-[24px]'>JFK</h1>
                    <p className='text-[18px]'>Dhaka, BD | 15.00</p>
                    <span className='text-[16px]'> Terminal, Hazrat Sha Jalal International Airport</span> <br />
                    <span className='text-[16px]'>Sun, 3rd june 2022</span>
                </div>
            </div>
        </section>
    );
};

export default FirstFlightDetails;