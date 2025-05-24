import React, { useEffect, useState } from 'react';
import './Loader.css';

const Loader = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    if (!isLoading) return null;

    return (
        <div className="loader-wrapper">
            <div className="loader">
                <div className="car-body">
                    <div className="car-top"></div>
                    <div className="car-window"></div>
                    <div className="headlight"></div>
                    <div className="taillight"></div>
                    <div className="wheel front-wheel"></div>
                    <div className="wheel back-wheel"></div>
                </div>
                <div className="road">
                    <div className="road-lines"></div>
                </div>
            </div>
            <div className="road-line"></div>
            <div className="loader-text">cabbmate</div>
        </div>
    );
};

export default Loader;