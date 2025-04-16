import { motion } from "framer-motion";
import { SelectedPage } from "../../shared/types";
import HText from "../../shared/HText";
import { HoverEffect } from "../../components/Card";
import SkillsProgress from "../../components/SkillsProgress";
import useMediaQuery from "../../hooks/useMediaQuery";
import LogoSlider from "../../components/LogoSlider";
import { HoverEffectTech } from "../../components/Card2";



type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Skills = ({ setSelectedPage }: Props) => {

    const isAboveMediaScreens = useMediaQuery("(min-width:1060px)")



    return (
        <section id="skills" className="mx-auto h-auto py-24 bg-gray-20 ">
           
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.Skills)}
                className="mx-auto w-5/6 flex flex-col items-center justify-center z-3"
            >
                {/* HEADING */}
                <div className="md:-my-25 text-center mb-8">
                    <HText>SKILLS</HText>
                </div>

                {/* SKILLS */}
                <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-16 mt-8">
                    {/* SkillsProgress will span 1 column on medium and larger screens */}
                    <div className="col-span-1">
                        <SkillsProgress />
                    </div>

                    {/* Main content area for larger screens */}
                    <div className="w-auto grid gap-4 grid-cols-1 md:col-span-2">
                        {isAboveMediaScreens ? (
                            <motion.div
                                className="grid gap-4"
                                initial={{ opacity: 0, y: 80 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, ease: "easeInOut" }}
                                viewport={{ once: false, amount: 0.2 }}
                            >
                                {/* HoverEffect and HoverEffectTech on large screens */}
                                <HoverEffect />
                                <HoverEffectTech />
                            </motion.div>
                        ) : (
                            // Only show LogoSlider on small screens
                            <LogoSlider />
                        )}
                    </div>
                </div>

            </motion.div>
        </section>
    );
};

export default Skills;
