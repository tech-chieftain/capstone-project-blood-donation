import React from 'react';
import '../styles/main.css';
import cardImage from '../../../src/Components/images/logoimage.png'; // with import

function CardsAboutUs() {

    const classesObjectStyles = {
        cardProperties:
            'max-w-sm  shadow-lg ml-8 mt-15 border rounded',
        cardImageSection:
            'hero container max-w-screen-lg mx-auto',
        cardimageProperties:
            'mx-auto mt-8',
        cardTitle:
            'text-orange-800  font-bold text-xl mb-2 text-center',
        cardParagraph:
            'text-gray-700 text-lg text-center ml-8 mr-8'
    };

    const classObjectContents = {
        cardTitle:
            'What we do ?',
        cardParagraph:
            'We connect blood donors with recipient, for an efficient and seamless process.'
    }

    return (
        <div>

            <div className="CardsAboutUs">
                <div class={classesObjectStyles.cardProperties}>

                    <section class={classesObjectStyles.cardImageSection}>
                        <img class={classesObjectStyles.cardimageProperties} src={cardImage} alt="screenshot" />
                    </section>

                    <div class="px-6 py-4">
                        <div class={classesObjectStyles.cardTitle} >{classObjectContents.cardTitle}</div>
                        <p class={classesObjectStyles.cardParagraph}> {classObjectContents.cardParagraph} </p>
                    </div>
                </div>
            </div>

        </div>

    );
}

export default CardsAboutUs;
