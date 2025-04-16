import { motion, useScroll, useTransform } from 'framer-motion';
import { GoogleGeminiEffect } from '../../components/google-gemini-effect';
import React, { useRef, useLayoutEffect, forwardRef } from 'react';
import useMediaQuery from '../../hooks/useMediaQuery';
import { SelectedPage } from '../../shared/types';
import { ScrollIndicator } from '../../components/ScrollIndicator';

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const Start = forwardRef<HTMLElement, Props>(({ setSelectedPage }, ref) => {
    const isAboveMediaScreens = useMediaQuery("(min-width:1060px)");

    // Internal ref for scroll target
    const internalRef = useRef<HTMLDivElement | null>(null);
    const [, setIsRefReady] = React.useState<boolean>(false);

    // Ensure ref is ready before initializing useScroll
    useLayoutEffect(() => {
        if (internalRef.current) {
            setIsRefReady(true);
        }
    }, []);

    // Scroll progress transformation
    const { scrollYProgress } = useScroll({
        target: internalRef.current ? internalRef : undefined,
        offset: ["start start", "end end"],
    });

    // Path lengths for the GoogleGeminiEffect animation
    const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
    const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
    const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
    const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
    const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);

    // Adjust opacity for fade-out effect
    const opacity = useTransform(scrollYProgress, [0.8, 1], [1, 0]);

    // Scroll indicator transformation
    const indicatorOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]); // Fades out as scrolling progresses
    const indicatorY = useTransform(scrollYProgress, [0, 0.2], [0, -50]); // Moves up as scrolling progresses

    return (
        <>
            {isAboveMediaScreens && (   
                <section id="start" className="bg-gray-20 py-3 min-h-auto md:pb-0" ref={ref as React.RefObject<HTMLElement>}>
                    <motion.div
                        className="h-[400vh] bg-black w-full dark:border dark:border-white/[0.1] rounded-md relative pt-40 overflow-clip"
                        onViewportEnter={() => setSelectedPage(SelectedPage.About)}
                        ref={internalRef}
                        style={{ opacity, position: 'relative' }} // Ensure motion.div itself has relative position
                    >
                        {/* Scroll Indicator */}
                        <ScrollIndicator
                            indicatorOpacity={indicatorOpacity}
                            indicatorY={indicatorY}
                        />

                        {/* GoogleGeminiEffect */}
                        <GoogleGeminiEffect
                            pathLengths={[
                                pathLengthFirst,
                                pathLengthSecond,
                                pathLengthThird,
                                pathLengthFourth,
                                pathLengthFifth,
                            ]}
                        />
                    </motion.div>
                </section>
            )}
        </>
    );
});

export default Start;