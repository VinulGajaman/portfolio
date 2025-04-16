"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "../utils/Util";
import useMediaQuery from "../hooks/useMediaQuery";




export const TextGenerateEffect = ({

    words,
    className,
    filter = true,
    duration = 0.5,
    trigger = false,
}: {
    words: string;
    className?: string;
    filter?: boolean;
    duration?: number;
    trigger?: boolean; // New prop to control animation
}) => {
    const [scope, animate] = useAnimate();
    const wordsArray = words.split(" ");

    const isAboveMediaScreens = useMediaQuery("(min-width:1060px)")

    useEffect(() => {
        if (trigger) {
            animate(
                "span",
                {
                    opacity: 1,
                    filter: filter ? "blur(0px)" : "none",
                },
                {
                    duration: duration || 1,
                    delay: stagger(0.2),
                }
            );
        }
    }, [trigger]); // Trigger animation only when trigger prop changes

    const renderWords = () => {
        return (
            <motion.div ref={scope}>
                {wordsArray.map((word, idx) => {
                    return (
                        <motion.span
                            key={word + idx}
                            className="dark:text-white text-black opacity-0"
                            style={{
                                filter: filter ? "blur(10px)" : "none",
                            }}
                        >
                            {word}{" "}
                        </motion.span>
                    );
                })}
            </motion.div>
        );
    };

    return (
        <div className={cn("font-bold", className)}>
            <div className="mt-4">
                <div className={`dark:text-white text-black leading-snug tracking-wide ${isAboveMediaScreens ? (`text-2xl`) : (`text-xl`)} `}>
                    {renderWords()}
                </div>
            </div>
        </div>
    );
};
