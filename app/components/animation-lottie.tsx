"use client";

import dynamic from 'next/dynamic';
import code  from '../assets/code.json';
import study from '../assets/study.json';

const Lottie = dynamic(() => import("lottie-react"), {ssr: false});

const AnimationLottie = ({ animationData }: { animationData: typeof code | typeof study }) => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        style: {
            width: "95%"
        }
    };

    return (
        <Lottie {...defaultOptions} />
    );
};

export default AnimationLottie;