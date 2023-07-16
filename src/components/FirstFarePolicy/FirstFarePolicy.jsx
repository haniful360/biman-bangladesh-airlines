import React from 'react';

const FirstFarePolicy = () => {
    return (
        <section className='mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6'>
            <div>
                <button className='py-1 px-4 text-[#333333ae] bg-[#23e8b778]'>Cancellation</button> <br />
                <span className='text-[#a2a7a7e3] text-[17px]'>Refund Amount = Paid Amount - Airline Cancellation Fee</span>
            </div>
            <div>
                <button className='py-1 px-4 text-[#333333ae] bg-[#23e8b778]'>Re-issue</button> <br />
                <span className='text-[#a2a7a7e3] text-[17px]'>Re-issue Fee = Airline Fee + Fare Difference </span>
            </div>
            <div>
                <button className='py-1 px-4 text-[#333333ae] bg-[#23e8b778]'>Void</button> <br />
                <span className='text-[#a2a7a7e3] text-[17px]'>Re-issue Fee = Airline Fee + Fare Difference </span>
            </div>
            <div>
                <button className='py-1 px-4 text-[#333333ae] bg-[#23e8b778]'>Refund</button> <br />
                <span className='text-[#a2a7a7e3] text-[17px]'>Re-issue Fee = Airline Fee + Fare Difference </span>
            </div>
        </section>
    );
};

export default FirstFarePolicy;