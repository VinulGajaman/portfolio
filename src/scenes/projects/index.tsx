import { motion } from "framer-motion";
import { SelectedPage } from "../../shared/types";
import HText from "../../shared/HText";
// import { ProjectsCards } from "../../components/ProjectsCards";
import { AppleCardsCarouselDemo } from "../../components/AppleCardsCarouselDemo";


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}



const Projects = ({ setSelectedPage }: Props) => {
    return (
        <section id="projects" className="mx-auto min-h-auto py-24 bg-gray-20 ">

            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.Projects)}
                className="mx-auto w-5/6 flex flex-col items-center justify-center"
            >
                {/* HEADING */}
                <div className="md:-my-25 text-center mb-4">
                    <HText>PROJECTS</HText>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeInOut" }}
                    viewport={{ once: false, amount: 0.2 }}

                    className="items-center justify-between md:flex w-full mt-16 bg-gray-50 rounded-lg p-4 shadow-lg"
                >
                    {/* <ProjectsCards /> */}
                    <AppleCardsCarouselDemo />
                </motion.div>

            </motion.div>

        </section >
    );
};

export default Projects;