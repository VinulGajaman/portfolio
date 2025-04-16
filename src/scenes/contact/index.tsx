import { motion } from "framer-motion";
import { SelectedPage } from "../../shared/types";
import HText from "../../shared/HText";
import { useForm, SubmitHandler } from "react-hook-form";
import { BackgroundGradient } from "../../components/background-gradient";
import { TextGenerateEffect } from "../../components/text-generate-effect";
import { useState } from "react";
import SmallSocialButtons from "../../shared/SmallSocailButtons";
import { LuGithub, LuInstagram, LuLinkedin } from "react-icons/lu";
import { PiTelegramLogo } from "react-icons/pi";
import { HiOutlineMail } from "react-icons/hi";
import { IoClose } from "react-icons/io5";






type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

type FormData = {
    name: string;
    email: string;
    message: string;
};

const Contact = ({ setSelectedPage }: Props) => {

    const inputStyles = `text-md mb-5 w-full rounded-xl bg-gray-100 px-5 py-2 placeholder-primary-800 text-primary-500 border-primary-500 border focus:ring-2 focus:ring-primary-500 focus:outline-none`;
    const [triggerTextAnimation, setTriggerTextAnimation] = useState<boolean>(false); // State to track trigger
    const words =
        'Dream big, code bigger – Every great idea starts with a conversation. Whether you’re planning your next project, brainstorming solutions, or exploring new possibilities, I’m here to listen and collaborate. Together, let’s turn visions into reality and build something extraordinary!';
    const [isToastVisible, setIsToastVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(false);


    const {
        register,
        formState: { errors },
        reset,
        handleSubmit,
        trigger,
    } = useForm<FormData>();


    const onSubmit: SubmitHandler<FormData> = async (data) => {
        const isValid = await trigger();
        if (!isValid) return;

        setIsLoading(true);
        try {
            await fetch("https://formsubmit.co/41eb10103f5063ddb507279102f05ec0", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
            reset();
            setIsToastVisible(true);
            setTimeout(() => setIsToastVisible(false), 5000);
        } catch (error) {
            console.error("Error submitting the form", error);
        } finally {
            setIsLoading(false);
        }
    };


    return (
        <section id="contact" className="mx-auto min-h-auto py-24 bg-gray-20">

            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.Contact)}
                className="mx-auto w-5/6 flex flex-col items-center justify-center "
            >
                {/* HEADING */}
                <div className="md:-my-25 text-center mb-4">
                    <HText>CONTACT</HText>
                </div>
                <motion.div
                    className="w-full basis-4/5 mt-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <h1
                        className="font-montserrat text-2xl font-bold bg-gradient-to-r from-primary-100 via-primary-500 to-primary-800 text-transparent bg-clip-text"
                    >
                        Lets Get In Touch!
                    </h1>
                    {/* <p className="my-5">
                        Whether you have a question, a project idea, or just want to say hello, feel free to reach out.
                    </p> */}



                    {/* FORM AND IMAGE */}
                    <motion.div className="mt-8 justify-between gap-32 md:flex"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0 },
                        }}>
                        <BackgroundGradient className="rounded-3xl p-1 bg-gray-50">
                            <div
                                className="mt-10 basis-1/5 md:mt-0 p-5 rounded-3xl"
                            >

                                <form
                                    target="_blank"
                                    onSubmit={handleSubmit(onSubmit)}
                                    method="POST"
                                    className="relative"
                                >
                                    {errors.name && (
                                        <p className=" text-red-600">
                                            {errors.name.type === "required" && "This Field is Required."}
                                            {errors.name.type === "maxLength" && "Max Length is 100 Characters."}
                                        </p>
                                    )}

                                    <input
                                        className={inputStyles}
                                        type="text"
                                        placeholder="NAME"
                                        {...register("name", {
                                            required: true,
                                            maxLength: 100,
                                        })}
                                    />

                                    {errors.email && (
                                        <p className="text-red-600">
                                            {errors.email.type === "required" && "This Field is Required."}
                                            {errors.email.type === "pattern" && "Invalid Email Address."}
                                        </p>
                                    )}
                                    <input
                                        className={inputStyles}
                                        type="email"
                                        placeholder="E-MAIL"
                                        {...register("email", {
                                            required: true,
                                            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        })}
                                    />

                                    {errors.message && (
                                        <p className=" text-red-600">
                                            {errors.message.type === "required" && "This Field is Required."}
                                            {errors.message.type === "maxLength" && "Max Length is 2000 Characters."}
                                        </p>
                                    )}
                                    <textarea
                                        className={inputStyles}
                                        rows={6}
                                        cols={60}
                                        placeholder="MESSAGE"
                                        {...register("message", {
                                            required: true,
                                            maxLength: 2000,
                                        })}
                                    />


                                    <button
                                        type="submit"
                                        disabled={isLoading}
                                        className="mt-3 relative flex items-center justify-center space-x-2 text-primary-500 hover:text-white border-2 border-primary-500 hover:border-primary-500 hover:bg-primary-c rounded-lg text-md px-4 py-2 mb-2 dark:border-primary-500 dark:text-primary-500 dark:hover:text-white dark:hover:bg-primary-800 dark:focus:ring-primary-500 font-bold transition-transform duration-200 hover:scale-105 w-full max-w-[150px] hover:shadow-neon-primary dark:hover:shadow-neon-primary-dark-hover disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isLoading ? (
                                            <div className="flex items-center gap-2">
                                                <div className="w-5 h-5 border-t-2 border-r-2 border-primary-500 rounded-full animate-spin"></div>
                                                <span>Sending...</span>
                                            </div>
                                        ) : (
                                            'SUBMIT'
                                        )}
                                    </button>
                                </form>
                            </div>
                        </BackgroundGradient>


                        {/* IMAGE */}
                        <motion.div
                            className="relative mt-16 basis-4/5 md:mt-0"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.5 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            onViewportEnter={() => setTriggerTextAnimation(true)} // Trigger animation on viewport enter
                        >
                            <div className="w-full">
                                <div>
                                    <TextGenerateEffect words={words} trigger={triggerTextAnimation} />
                                </div>
                                <motion.div className="flex gap-4 mt-12"
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: false, amount: 0.5 }}
                                    transition={{ delay: 0.5, duration: 0.8 }}
                                    variants={{
                                        hidden: { opacity: 0, y: 50 },
                                        visible: { opacity: 1, y: 0 },
                                    }}>
                                    <SmallSocialButtons
                                        Icon={<LuLinkedin className="w-6 h-8" />}
                                        href="https://www.linkedin.com/in/vinul-gajaman-a788a92b8/"
                                    />
                                    <SmallSocialButtons
                                        Icon={<LuInstagram className="w-6 h-8" />}
                                        href="https://www.instagram.com/.b_o_s_s./profilecard/?igsh=Nm9ldmV1OHM3djNm"
                                    />
                                    <SmallSocialButtons
                                        Icon={<LuGithub className="w-6 h-8" />}
                                        href="https://github.com/VinulGajaman"
                                    />
                                    <SmallSocialButtons
                                        Icon={<PiTelegramLogo className="w-6 h-8" />}
                                        href="https://t.me/Vinul_Gajaman"
                                    />
                                </motion.div>
                                <div className="mt-8">
                                </div>
                            </div>

                        </motion.div>

                    </motion.div>

                </motion.div>
            </motion.div>
            {/* Toast Notification */}
            {isToastVisible && (
               <div className="z-20 shadow-neon-primary dark:shadow-neon-primary-dark fixed bottom-4 left-1/2 transform -translate-x-1/2 flex items-center w-full max-w-xs p-4 mb-24 text-gray-500 bg-gray-800 rounded-lg dark:text-gray-400 border-2 border-primary-500 transition-all duration-300 ease-in-out" role="alert">
                    <HiOutlineMail className="text-primary-500 text-2xl" />
                    <div className="ms-3 text-sm font-normal">Email sent successfully.</div>
                    <button type="button" onClick={() => setIsToastVisible(false)} className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-default" aria-label="Close">
                        <span className="sr-only">Close</span>
                        <IoClose className="text-primary-500 text-2xl" />
                    </button>
                </div>
            )}

        </section >

    );
};

export default Contact;