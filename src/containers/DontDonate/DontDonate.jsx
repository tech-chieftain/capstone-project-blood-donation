import React from 'react';
import image from './images/doctor-office-and-blood-donation-design-vector-22887400.jpg';

function DontDonate() {
  const styleClass = {
    headerStyle: `text-primary-100  sm:text-xl md:text-2xl lg:text-3xl text-center font-semibold `,
    paragrphStyle: `  sm:text-sm md:text-base lg:text-lg text-center `,
  };

  return (
    <div className="flex">
      <div className="  sm:w-full  md:w-full lg:w-6/12 p-10  ">
        <h1 className={styleClass.headerStyle}>We are sorry but you are unable to donate. </h1>
        <p className={styleClass.paragrphStyle}>
          <br /> We really appreciate your support but unfortunately you will not be able to donate.
          <br /> <br />
          We realise this can be disappointing but we thank you for coming forward today. <br />
          <br />
          Ask your friends and family to join the blood donor community, ready to help when our NHS
          needs them.
          <br /> As well as specific blood groups, the NHS particularly needs more men to donate
          donate blood.
        </p>
      </div>

      <div className="  sm: hidden  md: hidden 	lg:flex w-6/12  p-10 ">
        <img src={image} alt="donateImage " />
      </div>
    </div>
  );
}

export default DontDonate;
