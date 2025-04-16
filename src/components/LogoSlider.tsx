import Marquee from 'react-fast-marquee';
import { skills } from '../shared/skills';

const LogoSlider: React.FC = () => {  // Define the component without props
    return (
        <div className="h-auto w-full bg-gray-20 mt-2">
            <Marquee gradient={false} pauseOnHover={true} speed={150} className=" overflow-hidden flex">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="flex flex-col justify-center items-center mx-10 p-2"
                    >
                        <img src={skill.imgSrc} className='w-3/4 h-3/4' />

                    </div>
                ))}
            </Marquee>
        </div>
    );
};

export default LogoSlider;