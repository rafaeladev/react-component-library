import testimonialsData from './data.json';
import Testimonials from './Testimonials.jsx';

const TestimonialsList = () => {
    return testimonialsData.map((item) => (
        <Testimonials
            key={item.id}
            content={item.content}
        />
    ));
};

export default TestimonialsList;
