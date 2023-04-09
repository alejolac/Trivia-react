import React, { useState, useEffect } from 'react';

function ProgressBar({ value, max }) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setProgress(prevProgress => {
                const newProgress = prevProgress + 1;
                return newProgress >= value ? value : newProgress;
            });
        }, 50);

        return () => {
            clearInterval(intervalId);
        };
    }, [value]);

    const percentComplete = Math.floor((progress / max) * 100);

    return (
        <div className='progress-bar'>
            <div 
                style={{
                    width: `${percentComplete}%`,
                    height: '20px',
                    backgroundColor: 'blue',
                    borderRadius: '5px',
                    margin: '2px',
                    background: 'linear-gradient(to right, #3db0ef, #5e7ce2)',
                    transition: 'width 0.5s ease-in-out'
                }}
            />
        </div>
    );
}

export default ProgressBar;
