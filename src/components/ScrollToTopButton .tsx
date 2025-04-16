import { motion } from "framer-motion";
import { ChevronUp } from "lucide-react"; // Ensure this is the correct icon
import { useState, useEffect } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 2500); // Show button when scrolled down 300px
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-transparent border-4 border-primary-500 text-primary-500 p-3 rounded-full shadow-lg focus:outline-none z-50 
           hover:border-primary-500 hover:bg-primary-c  dark:border-primary-500 dark:hover:text-white dark:hover:primary-500  dark:hover:bg-primary-800 dark:focus:ring-primary-500 hover:shadow-neon-primary 
               dark:hover:shadow-neon-primary-dark-hover"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            animate={{
              y: [0, -6, 0], // Icon moves up by 6px and back down
            }}
            transition={{
              duration: 1.2, // Time for one bounce
              repeat: Infinity, // Loop the animation
              repeatType: "loop", // Seamless looping
            }}
          >
            <ChevronUp className="h-6 w-6 font-bold" />   
          </motion.div>
        </motion.button>
      )}
    </>
  );
};

export default ScrollToTopButton;
