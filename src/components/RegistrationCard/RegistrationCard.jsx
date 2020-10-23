import React from 'react';
import { PropTypes } from 'prop-types';

function RegistrationCard({ icon, title, description }) {
    return (
        <div class="flex bg-gray-200 rounded p-6 m-6">
            {/*  icon place */}
            {/* icon will be on svg tag */}
            <div class="flex-none h-16 w-16  md:h-24 md:w-24 rounded-full mx-auto mr-2 sm:mr-4 border-4 sm:border-6   border-gray-500">
                {icon}
            </div>
            <div className="  flex-1 my-6 mr-4 sm:mr-4">
                {/* title place */}
                <span className="text-primary-100 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">{title} - </span>
                {/* description place */}
                <span className="text-black text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                    {description}
                </span>
            </div>

        </div>
    );
}

RegistrationCard.propTypes = {
    icon: PropTypes.element.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};
export default RegistrationCard;