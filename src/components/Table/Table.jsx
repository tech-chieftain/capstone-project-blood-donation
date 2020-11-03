import React, { useState } from 'react';

function Table() {
  const [donors, setDonors] = useState([]);

 //here this function not working !!
   getDonors() {
    const donors = [
      {
        id: '1',
        name: 'ali',
        City: 'Aden',
        bloodType: 'A+',
        Phone: '772455696',
        Email: 'ali@gmail.com',
      },
      {
        id: '1',
        name: 'ali',
        city: 'Aden',
        bloodType: 'A+',
        phone: '772455696',
        email: 'ali@gmail.com',
      }
    ];
    setDonors(donors);
  };

  const renderDonors = () => donors.map((donor) => <donorRow key={donor.id} {...donor} />);

  return (
    <div>
      <table className="border table-auto w-full">
        <thead>
          <tr className="bg-primary">
            <th className=" border px-4 py-2">Name</th>
            <th className="border px-4 py-2">City</th>
            <th className="border px-4 py-2">BloodType</th>
            <th className="border px-4 py-2">Phone</th>
            <th className="border px-4 py-2">email</th>
          </tr>
        </thead>
        <tbody>{renderDonors}</tbody>
      </table>
    </div>
  );
}
export default Table;
