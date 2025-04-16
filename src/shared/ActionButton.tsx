import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { SelectedPage } from './types';

type Props = {
    children: React.ReactNode;
    setSelectedPage: (value: SelectedPage) => void;
}

const ActionButton = ({ children, setSelectedPage }: Props) => {
    const isContactButton = React.Children.toArray(children)
        .some(child => 
            typeof child === 'string' && child.includes('Contact') ||
            typeof child === 'object' && 'props' in child && child.props?.children?.includes('Contact')
        );
    
    const handleResumeClick = () => {
        // Replace '/path-to-your-resume.pdf' with the actual path to your resume file
        const resumePath = '/public/resume.pdf';
        
        // Create a temporary anchor element
        const link = document.createElement('a');
        link.href = resumePath;
        link.download = 'Vinul_Gajaman_CV.pdf'; // Replace with your desired filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    
    const ButtonComponent = isContactButton ? AnchorLink : 'button';
    const buttonProps = isContactButton 
        ? {
            href: "#contact",
            onClick: () => setSelectedPage(SelectedPage.Contact)
          }
        : {
            onClick: handleResumeClick
          };

    return (
        <ButtonComponent
            className='relative flex items-center justify-center space-x-2 text-primary-500 hover:text-white border-4 border-primary-500 
               hover:border-primary-500 hover:bg-primary-c rounded-lg text-sm px-4 py-2 mb-2 dark:border-primary-500 
               dark:text-primary-500 dark:hover:text-white dark:hover:bg-primary-800 dark:focus:ring-primary-500 
               font-bold transition-transform duration-200 hover:scale-105 w-full max-w-[150px] hover:shadow-neon-primary 
               dark:hover:shadow-neon-primary-dark-hover text-center gap-2'
            {...buttonProps}
        >
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-800 animate-ping"></span>
            {children}
        </ButtonComponent>
    )
}

export default ActionButton;