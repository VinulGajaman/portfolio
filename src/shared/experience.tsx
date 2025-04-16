import { motion } from "framer-motion";
import { Blocks, CirclePower } from "lucide-react";


export const ExperienceData = [
    {
        title: "2024",
        content: (
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false }}
                whileHover={{
                    scale: 1.05,
                    rotateX: 2,
                    rotateY: -2,
                    boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.2)",
                }}
                className="p-4 bg-gray-50 shadow-lg rounded-xl border-2 border-primary-500"
            >
                <h2 className="text-xl md:text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-4 flex items-center">
                    <CirclePower className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 text-primary-800 mr-2" />
                    Launching a Full-Stack E-commerce Application
                </h2>

                <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-lg font-normal mb-8 flex items-center">
                    Developed and launched a comprehensive e-commerce application with a focus on user authentication, including sign-in and sign-up pages. Implemented best practices using React.js and Spring Boot for a full-stack solution.
                </p>
                <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-lg font-normal mb-8 flex items-center">
                    Created reusable UI components and responsive designs using Tailwind CSS, enhancing the user experience with a creative hero section and animations.
                </p>
            </motion.div>
        ),
    },
    {
        title: "Early 2023",
        content: (
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false }}
                whileHover={{
                    scale: 1.05,
                    rotateX: 2,
                    rotateY: -2,
                    boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.2)",
                }}
                className="p-4 bg-gray-50 shadow-lg rounded-xl border-2 border-primary-500"
            >
                <h2 className="text-xl md:text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-4 flex items-center">
                    <CirclePower className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 text-primary-800 mr-2" />
                    Building Interactive React Applications
                </h2>

                <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-lg font-normal mb-8 flex items-center">
                    Built a dynamic Todo List application in React, focusing on state management and CRUD functionality. Enhanced understanding of props, states, and component structure in React.
                </p>
                <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-lg font-normal mb-8 flex items-center">
                    Integrated Formik and Yup for form validation, applying best practices for data handling and validation within UI components.
                </p>
                <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-lg font-normal mb-8 flex items-center">
                    Leveraged MUI and date pickers for interactive form fields in the user interface, enhancing form data management and date validation.
                </p>
            </motion.div>
        ),
    },

    {
        title: "2022",
        content: (
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ 
                    opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false }}
                whileHover={{
                    scale: 1.05,
                    rotateX: 2,
                    rotateY: -2,
                    boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.2)",
                }}
                className="p-4 bg-gray-50 shadow-lg rounded-xl border-2 border-primary-500"
            >
                <p className="text-neutral-800 font-bold dark:text-neutral-200 text-sm md:text-lg mb-4">
                    Gained hands-on experience in a software internship, working on a variety of front-end and back-end projects. Key achievements included:
                </p>
                <div className="mb-8">
                    <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm md:text-lg mb-4">
                        <Blocks className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 text-primary-500 mr-2" />
                        Developed a multi-tab UI component with data validation and dynamic tab generation in React.
                    </div>
                    <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm md:text-lg mb-4">
                        <Blocks className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 text-primary-500 mr-2" />
                        Created reusable DatePicker components, integrating current date and time management with Moment.js.
                    </div>
                    <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm md:text-lg mb-4">
                        <Blocks className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 text-primary-500 mr-2" />
                        Implemented a REST API in Spring Boot, handling data storage in DATETIME format for enhanced data precision.
                    </div>
                    <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm md:text-lg mb-4">
                        <Blocks className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 text-primary-500 mr-2" />
                        Set up a database structure for storing date and time fields in Spring Boot applications.
                    </div>
                    <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm md:text-lg">
                        <Blocks className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 text-primary-500 mr-2" />
                        Applied Java Spring Boot, React.js, and Tailwind CSS to build and deploy project components in a structured manner.
                    </div>
                </div>
            </motion.div>
        ),
    },
];
