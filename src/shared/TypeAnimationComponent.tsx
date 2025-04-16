import { TypeAnimation } from 'react-type-animation';

const TypeAnimationComponent = () => {
    return (
        <TypeAnimation
            sequence={[
                'I am a Full-Stack Developer.',
                1000,
                'I am a FrontEnd Developer.',
                1000,
                'I am a BackEnd Developer.',
                1000,
                'I am a Software Engineer.',
                1000,
                'I am a Web Developer.',
                1000,
                
            ]}
            wrapper="span"
            speed={60}
            repeat={Infinity}
            className="text-2xl whitespace-nowrap" // Added whitespace-nowrap to prevent wrapping
            style={{ display: 'inline-block' }}
        />
    );
}

export default TypeAnimationComponent;


