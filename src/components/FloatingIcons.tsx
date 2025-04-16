import { motion } from 'framer-motion';
import tsImg from "/src/assets/skills/ts.png";
import javaImg from "/src/assets/skills/java.png";
import firebaseImg from "/src/assets/skills/firebase.png";
import tailwindImg from "/src/assets/skills/tailwind.png";
//import muiImg from "/src/assets/skills/mui.png";
import reactImg from "/src/assets/skills/react.png";
import springImg from "/src/assets/skills/spring.png";
// import vueImg from "/src/assets/skills/vue.png";

type IconType = {
  src: string;
  delay: number;
};

export const FloatingIcons: React.FC = () => {
  const icons: IconType[] = [
    { src: tsImg, delay: 0 },
    { src: javaImg, delay: 0.2 },
    // { src: vueImg, delay: 0.4 },
    { src: firebaseImg, delay: 0.6 },
    { src: tailwindImg, delay: 0.8 },
    // { src: muiImg, delay: 1 },
    { src: reactImg, delay: 1.2 },
    { src: springImg, delay: 1.4 }
  ];

  return (
    <div className="absolute inset-0 flex items-center justify-center rounded-full">
      <motion.div
        className="absolute flex items-center justify-center "
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 20, // Rotation speed
          repeat: Infinity, // Keep rotating
          ease: "linear", // Smooth, continuous rotation
        }}
      >
        {icons.map(({ src, delay }, index) => {
          const radius = 165; // Radius of the circular path
          const angle = (index / icons.length) * Math.PI * 2;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          return (
            <motion.div
              key={index}
              className="absolute h-14 w-14"
              initial={{
                opacity: 0,
                x: 0,
                y: 0,
                scale: 0.5,
                zIndex: 0
              }}
              animate={{
                opacity: 1,
                scale: 1,
                x: x,
                y: y,
                zIndex: 0, // All icons have the same z-index
              }}
              transition={{
                duration: 1,
                delay,
                ease: "easeOut"
              }}
            >
              <div className="flex h-auto w-auto items-center justify-center shadow-lg backdrop-blur-sm z-0 ">
                <img src={src} alt="icon" className="bg-slate-950 h-14 w-14 rounded-full border-2 border-primary-800 p-1" />
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};
