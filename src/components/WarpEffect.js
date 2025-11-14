import React from 'react';

const WarpEffect = () => {
    // Increase star count for a denser tunnel effect
    const stars = Array.from({ length: 200 });

    return (
        <div className="warp-container">
            <div className="warp-field">
                {stars.map((_, i) => {
                    // Randomize animation properties for each star
                    const style = {
                        '--star-angle': `${Math.random() * 360}deg`,
                        '--star-delay': `${Math.random() * -2}s`, // Start at different times
                        '--star-duration': `${Math.random() * 2 + 1}s` // Varying speeds
                    };
                    return <div key={i} className="warp-star" style={style} />;
                })}
            </div>
        </div>
    );
};

export default WarpEffect;