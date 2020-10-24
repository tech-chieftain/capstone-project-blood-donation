import React from 'react';
import '../styles/main.css';
import cardImage from '../../../src/Components/images/cardimage.png'; // with import

function CardsMain() {

    const classesObjectStyles = {
        cardProperties:
            'max-w-sm  shadow-lg ml-8 mt-15 border rounded',
        cardImageSection:
            'hero container max-w-screen-lg mx-auto',
        cardimageProperties:
            'mx-auto mt-8',
        cardTitle:
            'text-orange-800  font-bold text-xl mb-2',
        cardParagraph:
            'text-gray-700 text-lg'
    };

    const classObjectContents = {
        cardTitle:
            'I am Afraid I will Faint',
        cardParagraph:
            'If you do feel faint or fatigued, simply lie down until you feel better. think that you have about 10 pints of blood in your body. Roughly 1 pint is given.'
    }

    return (
        <div>

            <div className="Card">
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

export default CardsMain;
