import React from 'react';

const FirstFireSummery = () => {
    return (
      <div className='w-full mt-6'>
          <div className="overflow-x-auto">
            <table className="table" >
               
                <thead className="bg-[#23e8b6] text-white">
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
                    <tr className="bg-[#23e8b76b]">
                        <td>Adult x1</td>
                        <td>4090 TK</td>
                        <td>275 TK</td>
                        <td>4815 TK</td>
                        <td>1</td>
                        <td>0 BDT</td>
                        <td>4815 TK</td>
                    </tr>
                    {/* row 2 */}
                    <tr>
                        <td>Child x1</td>
                        <td>4090 TK</td>
                        <td>275 TK</td>
                        <td>4815 TK</td>
                        <td>1</td>
                        <td>0 BDT</td>
                        <td>4815 TK</td>
                    </tr>
                    {/* row 3 */}
                    <tr className="bg-[#23e8b76b]">
                        <td>Infant x1</td>
                        <td>4090 TK</td>
                        <td>275 TK</td>
                        <td>4815 TK</td>
                        <td>1</td>
                        <td>0 BDT</td>
                        <td>4815 TK</td>
                    </tr>
                </tbody>
            </table>
        </div>
      </div>
    );
};

export default FirstFireSummery;