import React from 'react';
import Lottie from 'react-lottie-web';
import animationBook from '../../assets/lotties/loadingBook.json';

export default function Load() {
    return (
        <Lottie
            height={60}
            width={60}
            options={{
                animationData: animationBook,
            }}
        />
    );
}
