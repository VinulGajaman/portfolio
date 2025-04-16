import { motion, MotionValue } from 'framer-motion';

type Props = {
    indicatorOpacity: MotionValue<number>;
    indicatorY: MotionValue<number>;
};

export const ScrollIndicator = ({ indicatorOpacity, indicatorY }: Props) => {
    return (
        <motion.div
            className="fixed bottom-10 left-1/2 transform -translate-x-1/2 z-50 flex flex-col items-center"
            style={{
                opacity: indicatorOpacity,
                y: indicatorY,
            }}
        >
            <p className="text-gray-400 text-sm mb-2 font-montserrat">Scroll Down</p>
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="w-8 h-12 border-2 border-primary-800 rounded-full flex items-center justify-center"
            >
                <motion.div
                    className="w-2 h-2 bg-primary-800 rounded-full"
                    animate={{ y: [0, 4, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                />
            </motion.div>
        </motion.div>
    );
};
