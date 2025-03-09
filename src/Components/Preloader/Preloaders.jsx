import React, { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

const Preloaders = () => {
    const [count, setCount] = useState(0);
    const container = useRef();

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(prevCount => {
                if (prevCount < 100) {
                    return prevCount + 1;
                } else {
                    clearInterval(interval);
                    return prevCount;
                }
            });
        }, 30);

        return () => clearInterval(interval);
    }, []);

    useGSAP(() => {
        gsap.fromTo('.count', 
            { opacity: 0 },
            { opacity: 1, duration: 1, ease: 'power2.out' } 
        );
    }, { scope: container });

    return (
        <div className="">
        
                <h1 className='text-white font-black text-6xl mb-10'>Loading....</h1>
            <p className="text-white text-6xl font-bold text-center">{count.toString().padStart(3, '0')}%</p>
        </div>
    );
};

export default Preloaders;