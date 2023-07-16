import React, { useState } from 'react';
import { TbCurrencyTaka } from 'react-icons/tb';
import FirstFlight from '../FirstFlight/FirstFlight';
const DACtoJFK = () => {
    const [show, setShow] = useState(true)
    return (
        <div className=''>
            <div className='lg:flex md:flex justify-center'>
                <div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  border-dotted border-e-2 border-white-200 shadow rounded-md px-2'>
                        <div className='relative'>
                            <img className='w-10 h-10' src="https://i.ibb.co/DGCKnXV/airlines-logo.png" alt="" />
                            <h3>Biman Bangladesh <br /> Airlines</h3>
                            <p className='text-[#23e8b6]'>BG 178 | W & BG 671 | E</p>
                            <span className='text-[14px] flex justify-center'>5H 35MIN</span>
                            <div className='py-2'>
                                <p className='border-2 border-solid'></p>
                                <p className='absolute top-[167px] right-14 bg-[#23e8b6] w-2 h-2 rounded'></p>
                                <p className='absolute top-[167px] left-14 bg-[#23e8b6] w-2 h-2 rounded'></p>
                                <p className='absolute top-[165px] bg-[#d0d6d5] w-3 h-3 rounded-2xl'></p>
                                <p className='absolute top-[165px] right-0 bg-[#d0d6d5] w-3 h-3 rounded-2xl'></p>
                            </div>
                            <span className='text-[14px] flex justify-center'>2 STOP</span>
                        </div>
                        <div>
                            <h2 className='text-[26px]'>DAC</h2>
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
                            <h2 className='text-[26px]'>JFK</h2>
                            <p>JF Kennedy Intl Airport</p>
                            <span className='text-[#23e8b6]'>12:05</span> <br />
                            <p className='mb-6'>MON 6TH JUL 2022</p>
                            <span className='text-[#23e8b6]'>Baggage: 45 KG</span>
                        </div>
                    </div>
                    {show ? null : <FirstFlight />}
                </div>

                <div className='shadow rounded-md lg:h-[205px] lg:w-[20%] text-center'>
                    <div className='flex justify-center mt-2'>
                        <TbCurrencyTaka style={{ fontSize: '38px' }}></TbCurrencyTaka>
                        <h2 className='text-[30px]'>1800</h2>
                    </div>
                    <button className=' bg-[#23e8b6] px-4 py-2 my-4 rounded-2xl text-white'>Book Now</button> <br />
                    {show ? <button onClick={() => setShow(false)} >Fight Details</button> : <button onClick={() => setShow(true)} >Hide Details</button>}
                </div>
            </div>


        </div>
    );
};

export default DACtoJFK;