import React, {useState } from 'react';
import './FirstFlight.css'
import FirstFlightDetails from '../FirstFlightDetails/FirstFlightDetails';
import FirstFireSummery from '../FirstFareSummery/FirstFareSummery';
import FirstFarePolicy from '../FirstFarePolicy/FirstFarePolicy';
import FirstBaggage from '../FirstBaggage/FirstBaggage';
const FirstFlight = () => {
    const [toggleState, setToggleState] = useState(1);
    

    const toggleTab = (index) => {
        setToggleState(index);
    };
    

    return (
        <div className='p-2 pt-4 shadow rounded-md'>
            <div>
                <div className="bloc-tabs text-[16px]">
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
                        FARE SUMMERY
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
                        <FirstFlightDetails></FirstFlightDetails>
                    </div>

                    <div
                        className={toggleState === 2 ? "content  active-content" : "content"}
                    >
                        
                       
                       <FirstFireSummery></FirstFireSummery>
                        
                    </div>

                    <div
                        className={toggleState === 3 ? "content  active-content" : "content"}
                    >
                        <FirstFarePolicy></FirstFarePolicy>
                    </div>

                    <div
                        className={toggleState === 4 ? "content  active-content" : "content"}
                    >
                        <FirstBaggage></FirstBaggage>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FirstFlight;