import React from 'react';

const FirstBaggage = () => {
    return (
      <div className='w-full mt-6'>
          <div className="overflow-x-auto">
            <table className="table" >
               
                <thead className="bg-[#23e8b6] text-white">
                    <tr>
                        <th>Baggage</th>
                        <th>Check-In</th>
                        <th>Cabin</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    <tr className="bg-[#23e8b76b]">
                        <td>Adult</td>
                        <td>20 KG</td>
                        <td>M</td>
                
                    </tr>
                    {/* row 2 */}
                    <tr>
                        <td>Child</td>
                        <td>20 KG</td>
                        <td>M</td>
                        
                    </tr>
                    {/* row 3 */}
                    <tr className="bg-[#23e8b76b]">
                        <td>Infant</td>
                        <td>20 KG</td>
                        <td>M</td>
                    
                    </tr>
                </tbody>
            </table>
        </div>
      </div>
    );
};

export default FirstBaggage;