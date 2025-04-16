import Marquee from 'react-fast-marquee';

const LOGOS = [
    "FRONTEND",
    "BACKEND",
    "FULL-STACK",
    "WEB DEVELOPMENT",
    "UI/UX DESIGN",
    "MOBILE APPS",
    "API DEVELOPMENT",
    "DATABASE MANAGEMENT",
    "SOFTWARE TESTING",
];

const InfiniteSlider: React.FC = () => {  // Define the component without props
    return (
        <div className="h-auto w-full bg-gray-50">
            <Marquee gradient={false} pauseOnHover={true} speed={80} className="border-t border-b overflow-hidden flex">
                {LOGOS.map((logo, index) => (
                    <div
                        key={index}
                        className="flex flex-col justify-center items-center mx-10 text-2xl md:text-3xl lg:text-4xl font-bold text-primary-300"
                    >
                        {logo}
                    </div>
                ))}
            </Marquee>
        </div>
    );
};

export default InfiniteSlider;
