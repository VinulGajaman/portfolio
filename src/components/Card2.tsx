import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import { techs } from "../shared/tech";

export const HoverEffectTech = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    

    return (
        <div className="flex justify-center">
            <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-7 gap-1 justify-items-center py-4">
                <AnimatePresence>
                    {techs.map((project, idx) => (
                        <motion.div
                            key={project?.link}
                            className="relative group block p-2 h-[140px] w-[120px] lg:h-[160px] lg:w-[140px]"
                            onMouseEnter={() => setHoveredIndex(idx)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            initial={{ opacity: 0, y: 20 }} // initial state: hidden and slightly below
                            animate={{ opacity: 1, y: 0 }} // animate to visible and normal position
                            exit={{ opacity: 0, y: 20 }} // exit state: hidden and slightly below
                            transition={{
                                opacity: { duration: 1 },
                                y: { duration: 1},
                                delay: idx * 1, // delay each card animation by 0.1s
                            }}
                        >
                            <AnimatePresence>
                                {hoveredIndex === idx && (
                                    <motion.span
                                        className="absolute inset-0 h-full w-full bg-primary-800/[0.8] block rounded-2xl"
                                        layoutId="hoverBackground"
                                        initial={{ opacity: 0 }}
                                        animate={{
                                            opacity: 1,
                                            transition: { duration: 0.15 },
                                        }}
                                        exit={{
                                            opacity: 0,
                                            transition: { duration: 0.15, delay: 0.2 },
                                        }}
                                    />
                                )}
                            </AnimatePresence>
                            <div className="hover:shadow-neon-primary dark:hover:shadow-neon-primary-dark-hover rounded-2xl h-full w-full p-2 overflow-hidden bg-gradient-to-br from-slate-800 to-slate-800/[0.2] border border-transparent group-hover:border-slate-700 relative z-4">
                                <div className="relative z-4 flex flex-col items-center justify-center">
                                    <h4 className="text-zinc-100 font-bold tracking-wide mt-2 text-center text-xs h-8 md:text-sm lg:text-base">
                                        {project.title}
                                    </h4>
                                    <img
                                        src={project.imgSrc}
                                        alt={project.title}
                                        className="pt-4 rounded-lg object-contain w-1/2 h-1/2"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </div>
    );
};
