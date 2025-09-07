import { motion } from "framer-motion";
import { CirclePower, CodeXml, GraduationCap } from "lucide-react";


export const ExperienceData = [
    {
        title: "June 2024 – Present",
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
                    <CirclePower className="w-5 h-5 md:w-7 md:h-7 lg:w-8 lg:h-8 text-primary-800 mr-2" />
                    Intern Software Engineer – DMS Software Technologies
                </h2>

                <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-lg font-normal mb-6">
                    Joined as a <strong>Full-Stack Intern</strong>, contributing to enterprise-scale projects with
                    <strong> Java Spring Boot, React.js, and Microservices</strong>. Hands-on in:
                </p>

                <ul className="list-disc pl-6 text-neutral-700 dark:text-neutral-300 text-sm md:text-lg space-y-3">
                    <li>Implemented <strong>microservices</strong> with Netflix Eureka for scalable service discovery.</li>
                    <li>Built responsive UI modules with <strong>React.js + Material-UI</strong>, supporting advanced filtering and pagination.</li>
                    <li>Containerized apps with <strong>Docker</strong>, ensuring smooth deployment across environments.</li>
                    <li>Developed <strong>AI-powered chatbot backend</strong> using Spring AI + OpenAI API (RAG), integrating PDF knowledge bases.</li>
                    <li>Designed <strong>custom Jasper Reports</strong> for client-facing dynamic data visualization.</li>
                    <li>Collaborated in Agile teams, resolving tickets via <strong>JIRA Service Management</strong>.</li>
                </ul>
            </motion.div>
        ),
    },
    {
        title: "Nov 2024",
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
                    <GraduationCap className="w-5 h-5 md:w-7 md:h-7 lg:w-8 lg:h-8 text-primary-800 mr-2" />
                    Graduated – BSc (Hons) in Software Engineering
                </h2>

                <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-lg font-normal">
                    Successfully completed <strong>BSc (Hons) in Software Engineering</strong> (BCU, UK – Java Institute).
                    Built strong foundations in <strong>OOP, REST APIs, Databases, and Android Application Development.</strong>,
                    complementing real-world internship projects.
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
                    <CodeXml className="w-5 h-5 md:w-7 md:h-7 lg:w-8 lg:h-8 text-primary-800 mr-2" />
                    Building Interactive React Applications
                </h2>

                <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-lg font-normal mb-6">
                    Gained strong React.js fundamentals by building dynamic applications like a
                    <strong> Todo List</strong> with state management, CRUD operations, and form validation.
                </p>
                <ul className="list-disc pl-6 text-neutral-700 dark:text-neutral-300 text-sm md:text-lg space-y-2">
                    <li>Integrated Formik + Yup for robust form validation.</li>
                    <li>Applied MUI components and interactive date pickers for better UX.</li>
                </ul>
            </motion.div>
        ),
    },
];
