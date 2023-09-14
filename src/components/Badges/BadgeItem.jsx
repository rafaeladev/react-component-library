import { useMemo } from 'react';

const BadgeItem = ({ children, color, style }) => {
    const badgeStyle = useMemo(() => {
        return { borderRadius: `${style === 'Square' ? `4px` : `12px`}` };
    }, [style]);
    return (
        <li
            className={`badge badge--${color}`}
            style={badgeStyle}
            id={children}
        >
            {children}
        </li>
    );
};

export default BadgeItem;
