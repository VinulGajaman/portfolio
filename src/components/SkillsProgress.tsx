// src/components/SkillsProgress.tsx

import React from "react";
import ProgressBar from "./ProgressBar";

const SkillsProgress: React.FC = () => {
    const skills = [
        { label: "Web Application Development", progress: 90 },
        { label: "Data Structures & Algorithms", progress: 75 },
        { label: "Java Programming", progress: 80 },
        { label: "React & TypeScript", progress: 75 },
        { label: "Database Management", progress: 90 },
        { label: "Problem Solving", progress: 95 },
        { label: "UI/UX Design", progress: 75 },
        { label: "API Integration", progress: 80 },
        
        
    ];

    return (
        <div className="space-y-4">
            {skills.map((skill) => (
                <ProgressBar key={skill.label} label={skill.label} progress={skill.progress} />
            ))}
        </div>
    );
};

export default SkillsProgress;
