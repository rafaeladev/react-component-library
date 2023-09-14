const Testimonials = ({ content }) => {
    if (content.pic) {
        return (
            <div className='testimonials testimonials--blue'>
                <img
                    className='testimonialsPic'
                    src={content.pic}
                    alt={content.Name}
                />

                <div className='testimonialsText--blue'>
                    <p>{content.Text}</p>
                </div>
            </div>
        );
    } else {
        return (
            <div className='testimonials'>
                <p>{content.text}</p>
            </div>
        );
    }
};

export default Testimonials;
