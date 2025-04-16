import { motion } from "framer-motion";
import { SelectedPage } from "../../shared/types";
import HText from "../../shared/HText";
import { Timeline } from "../../components/TimeLine";
import { ExperienceData } from "../../shared/experience";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}



const Experience = ({ setSelectedPage }: Props) => {
    return (
        <section id="experience" className="mx-auto min-h-auto py-24 bg-gray-20">

            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.Experience)}
                className="mx-auto w-5/6 flex flex-col items-center justify-center"
            >
                {/* HEADING */}
                <div className="md:-my-25 text-center mb-4">
                    <HText>EXPERIENCE</HText>
                </div>
                <div className="items-center justify-between md:flex w-full">
                    <Timeline data={ExperienceData} />
                </div>
            </motion.div>

        </section >
    );
};

export default Experience;