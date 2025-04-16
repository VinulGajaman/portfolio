
import React from "react";

type Props = {
    ButtonText: string; // Text to display on the button
    Icon: React.ReactNode; // The icon component to display
    href: string;
};

const SocialButton = ({ ButtonText, Icon, href }: Props) => {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer" className="inline-block">
            <button
                type="button"
                className="flex items-center justify-center space-x-2 text-primary-500 hover:text-white border border-primary-500 
                    hover:border-primary-500 hover:bg-primary-c rounded-lg text-sm 
                    px-4 py-2 mb-2 dark:border-primary-500 dark:text-primary-500 dark:hover:text-white dark:hover:bg-primary-800 
                    dark:focus:ring-primary-500 font-bold transition-transform duration-200 hover:scale-105 w-full max-w-[140px]
                    hover:shadow-neon-primary dark:hover:shadow-neon-primary-dark-hover"
            >
                {Icon}
                <span>{ButtonText}</span>
            </button>
        </a>
    );
};


// For Neon Colos
//shadow-neon-primary dark:shadow-neon-primary-dark hover:shadow-neon-primary-hover dark:hover:shadow-neon-primary-dark-hover
export default SocialButton;
