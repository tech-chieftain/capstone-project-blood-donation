import React, { useState } from 'react';

function Table() {
    const StylesClass = {
        grayColor: 'w-full bg-gray-200',
        whiteColor: 'we-full bg-red',
        ceilClass: 'border px-4 py-2 lg:px-6 mt-4 md:mt-0  whitespace-no-wrap border-b bg-gray',
        headerStyle:'border px-4 py-2 text-white leading-4 text-sm tracking-wider text-left'
    }
  
        const donors = [
            {
                id: 1,
                name: 'ali',
                city: 'sanaa',
                bloodType: 'A+',
                phone: '772455696',
                email: 'ali@gmail.com',
            },
            {
                id: 2,
                name: 'mohamed',
                city: 'Aden',
                bloodType: 'A+',
                phone: '772455696',
                email: 'mo@gmail.com',
            }
        ];
   
//   const renderDonors = donors.map((donor) => <DonorRow key={donor.id} {...donor} />);
     const renderDonors = donors.map((donor) =>{
         return (
            <tr className={donor.id % 2 === 0 ? StylesClass.grayColor : StylesClass.whiteColor}>
        <td className={StylesClass.ceilClass}>{donor.name}</td>
        <td className={StylesClass.ceilClass}>{donor.city}</td>
        <td className={StylesClass.ceilClass}>{donor.bloodType}</td>
        <td className={StylesClass.ceilClass}>{donor.phone}</td>
        <td className={StylesClass.ceilClass}>{donor.email}</td>
      </tr> 
         )
     }
     );
    
  return (
     
    <div>
      <table className="border table-auto  min-w-full">
        <thead>
          <tr className="bg-primary">
            <th className={StylesClass.headerStyle}>Name</th>
            <th className={StylesClass.headerStyle}>City</th>
            <th className={StylesClass.headerStyle}>Blood Type</th>
            <th className={StylesClass.headerStyle}>Phone</th>
            <th className={StylesClass.headerStyle}>Email</th>
          </tr>
        </thead>
        <tbody>{renderDonors}</tbody>
      </table>
    </div>
  );
}
export default Table;
