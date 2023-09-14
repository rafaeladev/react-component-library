import { useMemo, lazy, Suspense, useState } from 'react';
import Badge from './components/Badges/index.jsx';
import Section from './components/Section.jsx';
import Banner from './components/Banners/index.jsx';
import Card from './components/Cards/index.jsx';

// Lazy import
const TestimonialsList = lazy(() => {
    return import('./components/Testimonials/index.jsx');
});

import { BsCloudUpload } from 'react-icons/bs';

function App() {
    const colors = useMemo(() => {
        return ['Gray', 'Red', 'Yellow', 'Green', 'Blue', 'Indigo', 'Purple', 'Pink'];
    }, []);
    const badgeForm = ['Square', 'Pill'];

    const bannerStyle = ['success', 'warning', 'error', 'neutral'];
    const bannerTitle = [
        'Congratulations!',
        'Attention',
        'There is a problem with your application',
        'Update available',
    ];

    const [showTestimonials, setshowTestimonials] = useState(false);

    return (
        <>
            <h1>React Component Library</h1>

            <Section title='Badges'>
                {badgeForm.map((format) => (
                    <Badge key={format}>
                        <Badge.Title>{format}</Badge.Title>
                        <Badge.List>
                            {colors.map((item) => (
                                <Badge.Item
                                    color={item}
                                    style={format}
                                    key={item}
                                >
                                    Badge
                                </Badge.Item>
                            ))}
                        </Badge.List>
                    </Badge>
                ))}
            </Section>

            <Section title='Banners'>
                {bannerStyle.map((item, index) => (
                    <Banner key={item}>
                        <h3>{item}</h3>
                        <Banner.Item style={item}>
                            <Banner.Content title={bannerTitle[index]}>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                                    pariatur, ipsum similique veniam.
                                </p>
                            </Banner.Content>
                        </Banner.Item>
                    </Banner>
                ))}
            </Section>

            <Section title='Cards'>
                <Card icon={<BsCloudUpload />}>
                    <Card.Title>Easy Deployment</Card.Title>
                    <p>
                        Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit
                        morbi lobortis.
                    </p>
                </Card>
            </Section>

            <Section title='Testimonials'>
                <button
                    className='button'
                    onClick={() => setshowTestimonials((prev) => !prev)}
                >
                    Show Testimonials
                </button>
                <br />
                <Suspense fallback={<h2>Loading...</h2>}>
                    {showTestimonials && <TestimonialsList />}
                </Suspense>
            </Section>
        </>
    );
}

export default App;
