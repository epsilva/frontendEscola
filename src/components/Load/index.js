import React from 'react';
import Lottie from 'react-lottie-web';
import animationBook from '../../assets/lotties/loadingBook.json';
// import { Container } from './styles';

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
