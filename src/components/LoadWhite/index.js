import React from 'react';
import Lottie from 'react-lottie-web';
import animationBook from '../../assets/lotties/loadingBookWhite.json';

export default function Load({ size }) {
    return (
        <Lottie
            height={size || 60}
            width={size || 60}
            options={{
                animationData: animationBook,
            }}
        />
    );
}
