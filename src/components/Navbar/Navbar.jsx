import React, {useState } from 'react';
import './Navbar.css'
const Navbar = () => {
    const [toggleState, setToggleState] = useState(1);
    

    const toggleTab = (index) => {
        setToggleState(index);
    };
    

    return (
        <div className='max-w-4xl mx-auto'>
            <div className="shadow">
                <div className="bloc-tabs">
                    <button
                        className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                        onClick={() => toggleTab(1)}
                    >
                        Flight Details
                    </button>
                    <button
                        className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                        onClick={() => toggleTab(2)}
                    >
                        Fire SUMMERY
                    </button>
                    <button
                        className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                        onClick={() => toggleTab(3)}
                    >
                        FARE POLICY
                    </button>
                    <button
                        className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
                        onClick={() => toggleTab(4)}
                    >
                       BAGGAGE
                    </button>
                </div>

                <div className="content-tabs">
                    <div
                        className={toggleState === 1 ? "content  active-content" : "content"}
                    >
                        <h2 className='text-2xl text-[#105397]'>content:1</h2>
                        <hr />
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                            LOREM 1
                        </div>
                    </div>

                    <div
                        className={toggleState === 2 ? "content  active-content" : "content"}
                    >
                        <h2 className='text-2xl text-[#105397]'>content:2</h2>
                        <hr />
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        LOREM 2
                        </div>
                    </div>

                    <div
                        className={toggleState === 3 ? "content  active-content" : "content"}
                    >
                        <h2 className='text-2xl text-[#105397]'>content:3</h2>
                        <hr />
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                            LOREM 3
                        </div>
                    </div>

                    <div
                        className={toggleState === 4 ? "content  active-content" : "content"}
                    >
                        <h2 className='text-2xl text-[#105397]'>content:4</h2>
                        <hr />
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                            LOREM 4
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;