import { useMemo } from 'react';
import { icons } from './icons.js';

const BannerItem = ({ children, style = 'sucess' }) => {
    let icon = useMemo(() => {
        if (style === 'sucess') {
            return icons.success;
        } else if (style === 'warning') {
            return icons.warning;
        } else if (style === 'error') {
            return icons.error;
        } else {
            return icons.neutral;
        }
    }, [style]);

    return (
        <div className={`banner ${style}`}>
            <img src={icon} />
            {children}
        </div>
    );
};

export default BannerItem;
