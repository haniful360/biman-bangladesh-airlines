import React from 'react';

const FirstFireSummery = () => {
    return (
      <div className='w-full'>
          <div className="overflow-x-auto">
            <table className="table" >
               
                <thead>
                    <tr>
                        <th>Pax Type</th>
                        <th>Base Fare(BDT) </th>
                        <th>Tax(BDT)</th>
                        <th>Total(BDT)</th>
                        <th>Pax Count</th>
                        <th>Service Fee(BDT)</th>
                        <th>Sub Total (BDT)</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    <tr className="bg-[#23e8b6]">
                        <th>1</th>
                        <td>Cy Ganderton</td>
                        <td>Quality Control Specialist</td>
                        <td>Blue</td>
                    </tr>
                    {/* row 2 */}
                    <tr>
                        <th>2</th>
                        <td>Hart Hagerty</td>
                        <td>Desktop Support Technician</td>
                        <td>Purple</td>
                    </tr>
                    {/* row 3 */}
                    <tr>
                        <th>3</th>
                        <td>Brice Swyre</td>
                        <td>Tax Accountant</td>
                        <td>Red</td>
                    </tr>
                </tbody>
            </table>
        </div>
      </div>
    );
};

export default FirstFireSummery;