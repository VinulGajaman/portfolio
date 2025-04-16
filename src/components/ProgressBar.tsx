import React from "react";
import { motion } from "framer-motion";

interface ProgressBarProps {
    label: string;
    progress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ label, progress }) => {
    return (
        <div className="mb-6 py-2 w-full">
            <div className="flex justify-between mb-1 gap-10">
                <span className="text-lg font-medium text-blue-700 dark:text-white">{label}</span>
                <span className="text-sm font-medium text-blue-700 dark:text-white">{progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                <motion.div
                    className="h-2 rounded-full bg-gradient-to-r from-primary-300 to-primary-500
                    shadow-neon-primary hover:shadow-neon-primary-hover dark:shadow-neon-primary-dark dark:hover:shadow-neon-primary-dark-hover"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${progress}%` }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    viewport={{ once: false, amount: 0.2 }} // Triggers when 20% of the bar is in view
                />
            </div>
        </div>
    );
};

export default ProgressBar;
