import React from 'react';

const Card = ({ icon = null, children }) => {
    if (icon) {
        return (
            <div className='card'>
                <figure className='cardIcon'>{icon}</figure>
                {children}
            </div>
        );
    }
    return <div className='card'>{children}</div>;
};

export default Card;
