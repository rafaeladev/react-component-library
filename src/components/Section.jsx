const Section = ({ children, title }) => {
    return (
        <section>
            <h2 className='SectionTitle'>{title}</h2>
            {children}
        </section>
    );
};

export default Section;
