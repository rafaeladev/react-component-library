const BannerContent = ({ title, children }) => {
    return (
        <div className='bannerText'>
            <i className='bannerTitle'>{title}</i>
            {children}
        </div>
    );
};

export default BannerContent;
