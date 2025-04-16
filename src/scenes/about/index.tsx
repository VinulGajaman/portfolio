import { SelectedPage } from "../../shared/types"
// import HomePageMe from "@/assets/home/img-logo-me.png";
import HomePageMe1 from "@/assets/home/img-sm.png";

import useMediaQuery from "../../hooks/useMediaQuery";

import { MdDownloading } from "react-icons/md";

import { GoRocket } from "react-icons/go";
//import SocialButton from "../../shared/SocialButton";
import HomePageMe from "@/assets/home/img-logo-me.png";
import { motion } from "framer-motion";
//import TypeAnimationComponent from "../../shared/TypeAnimationComponent";
import ActionButton from "../../shared/ActionButton";
import InfiniteSlider from "../../components/InfiniteSlider ";
import { FloatingIcons } from "../../components/FloatingIcons";
//import { LampDemo } from "../../components/Lamp";
//import AnchorLink from "react-anchor-link-smooth-scroll";


type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const About = ({ setSelectedPage }: Props) => {

    const isAboveMediaScreens = useMediaQuery("(min-width:1060px)")

    return (
        <section id="about" className="gap-16 bg-gray-20 py-10 min-h-auto md:pb-0">

            {/* IMAGE AND MAIN HEADER */}
            <motion.div
                className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6 mt-10"
                onViewportEnter={() => setSelectedPage(SelectedPage.About)}>

                {!isAboveMediaScreens && (
                    <motion.div
                        className="flex basis-3/5 justify-center z-10 mt-20 rounded-full sm:mb-28"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9 }}

                    >
                        <img
                            src={HomePageMe1}
                            alt="home-pageGraphic"
                            className="w-64 h-64 object-contain rounded-full border-4 border-primary-800 p-2 bg-cover shadow-[0_0_10px_3px_rgba(0,255,255,0.7),0_0_20px_5px_rgba(0,255,255,0.5)]"
                        />
                    </motion.div>
                )}


                {/* MAIN HEADER */}
                <div className={`z-10 md:basis-3/5 ${!isAboveMediaScreens ? (
                    `mt-8`
                ) : (
                    `mt-24`
                )} `}>
                    <motion.div
                        className="sm:-mt-16"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.1 }}
                        transition={{ delay: 0.1, duration: 0.7 }}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 }
                        }}>



                        {/* TYPE ANIMATION */}
                        <div className={`relative ${!isAboveMediaScreens ? (
                            `mt-12`
                        ) : (
                            `mt-44`
                        )} `}>
                            <div className="mt-8 mb-8 font-bold" >
                                <h1 className={`${!isAboveMediaScreens ? (
                                    `text-6xl text-center `
                                ) : (
                                    `text-7xl `
                                )} `}>
                                    VINUL GAJAMAN


                                </h1>
                                <p className={`${!isAboveMediaScreens ? (
                                    `text-center text-md text-primary-800`
                                ) : (
                                    `text-sm text-primary-800 font-bold`)} `}>
                                    BSc (Hons) in Software Engineering
                                </p>
                            </div>
                            {/* <TypeAnimationComponent /> */}
                        </div>

                        <p className="mt-8 text-md">
                            Hey there! I’m Vinul, a full-stack developer driven by a mission to build more than just applications—I create experiences.
                            My code doesn’t just solve problems; it brings ideas to life with precision, creativity, and a deep understanding of user needs.
                            Skilled in React, TypeScript, and Spring Boot, I combine technical expertise with a designer’s eye for detail, delivering solutions that feel intuitive, look stunning, and perform seamlessly. If you’re looking for a developer who’s as passionate about your vision as you are, let’s connect and make it happen!
                        </p>


                        {/* ACTIONS */}
                        <motion.div
                            className={`mt-4 flex items-center gap-4 ${!isAboveMediaScreens ? (
                                `justify-center `
                            ) : (
                                ``
                            )} `}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.5 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            variants={{
                                hidden: { opacity: 0, x: -50 },
                                visible: { opacity: 1, x: 0 },
                            }}
                        >
                            <ActionButton setSelectedPage={setSelectedPage}>
                                Contact  <GoRocket className="w-5 h-5" />
                            </ActionButton>

                            <ActionButton setSelectedPage={setSelectedPage}>
                                Resume  <MdDownloading  className="w-5 h-5" />
                            </ActionButton>
                            {/* <div className="flex gap-1">
                                <SmallSocialButtons
                                    Icon={<LuLinkedin className="w-4 h-4 " />}
                                    href="https://www.linkedin.com/in/vinul-gajaman-a788a92b8/"
                                />
                                <SmallSocialButtons
                                    Icon={<LuInstagram className="w-4 h-4" />}
                                    href="https://www.instagram.com/.b_o_s_s./profilecard/?igsh=Nm9ldmV1OHM3djNm"
                                />
                                <SmallSocialButtons
                                    Icon={<LuGithub className="w-4 h-4" />}
                                    href="https://github.com/VinulGajaman"
                                />
                            </div> */}
                        </motion.div>


                    </motion.div>

                </div>




                {/* IMAGE */}
                {isAboveMediaScreens && (
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end "
                    >
                        <div className="relative w-[500px] h-[500px]"> {/* Adjust size based on your image */}
                            <img src={HomePageMe} className="relative z-10 w-full h-full object-contain" alt="home-pageGraphic" />
                            <FloatingIcons />
                        </div>
                    </motion.div>
                )}

            </motion.div >

            {/* SPONSORS */}

            <div className=
                {`bg-gray-50  ${isAboveMediaScreens ? (
                    `mt-36`
                ) : (
                    `mt-16`)} `}>

                <InfiniteSlider />
            </div>


        </section >
    );

};

export default About