"use client";
import { Card, Carousel } from "./apple-cards-carousel";
import mixlabImg from "../assets/projects/mixlab.png";
import GeminiAi from "../assets/projects/Gemini_AI_API.png";
import mixlablogo from "../assets/projects/mixlablogo.png";
import Geminiailogo from "../assets/projects/Geminiailogo.png";
import emailailogo from "../assets/projects/email_extention_logo.png";
import emailai from "../assets/projects/emailai.png";



import { motion } from "framer-motion";




export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card
      key={card.src}
      card={{
        ...card,
        content: (
          <ProjectCardContent
            category={card.category}
            title={card.title}
            tags={card.tags}
            description={card.description}
            imgSrc={card.src}
            sourceUrl={card.sourceUrl}
          />
        ),
      }}
      index={index}
    />
  ));

  return (
    <div className="w-full h-full">
      <Carousel items={cards} />
    </div>
  );
}

// export function AppleCardsCarouselDemo() {
//   const cards = data.map((card, index) => (
//     <Card key={card.src} card={card} index={index} />
//   ));

//   return (
//     <div className="w-full h-full">
//       <Carousel items={cards} />
//     </div>
//   );
// }

const ProjectCardContent = ({ category, title, description, imgSrc, tags, sourceUrl }: { category: string, title: string; description: string; imgSrc: string, tags: string[], sourceUrl: string; }) => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">{category}</span>{" "}
        {description}
      </p>
      <div className="mb-4 mt-4 ms-7 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-1.5 text-xs font-semibold text-gray-700 bg-gray-200 border border-gray-300 rounded-lg 
                       dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
          >
            #{tag}
          </span>
        ))}
      </div>
      <img
        src={imgSrc}
        alt={title}
        height="650"
        width="650"
        className="h-full w-full mx-auto object-contain"
      />

      <div className="mt-8 flex justify-center">
        <motion.a
          href={sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
          className="relative px-8 py-3 rounded-full 
               bg-gradient-to-r from-primary-500 via-primary-800 to-secondary-500
               text-white text-sm font-semibold tracking-wide
               border border-gray-500 shadow-lg overflow-hidden group"
        >
          {/* Top glowing gradient line */}
          <span className="absolute inset-x-0 top-0 h-px w-1/2 mx-auto 
                     bg-gradient-to-r from-transparent via-primary-100 to-transparent animate-pulse" />

          {/* Background animated shimmer */}
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-300/20 to-transparent 
                     translate-x-[-100%] group-hover:translate-x-[100%] 
                     transition-transform duration-700 ease-in-out" />

          {/* Button label */}
          <span className="relative z-10">View Source Code</span>
        </motion.a>
      </div>

    </div>
  );
};

// const DummyContent = () => {
//   return (
//     <>
//       <div
//         key={"dummy-content"}
//         className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
//       >
//         <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
//           <span className="font-bold text-neutral-700 dark:text-neutral-200">
//             The first rule of Apple club is that you boast about Apple club.
//           </span>{" "}
//           Keep a journal, quickly jot down a grocery list, and take amazing
//           class notes. Want to convert those notes to text? No problem.
//           Langotiya jeetu ka mara hua yaar is ready to capture every
//           thought.
//         </p>
//         <img
//           src="https://assets.aceternity.com/macbook.png"
//           alt="Macbook mockup from Aceternity UI"
//           height="500"
//           width="500"
//           className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
//         />
//       </div>

//     </>
//   );
// };

const data = [
  {
    category: "MixLab Pharmacy",
    title: "Inventory and Sales Management",
    tags: ["JAVA", "MYSQL", "JASPER REPORTS"],
    description: `
      is a comprehensive desktop application designed to streamline pharmacy management processes.
      Developed with Java Swing using NetBeans, the application provides functionality for creating, updating, deleting, and searching records for users, customers, and suppliers.
      It allows efficient management of products, including stock monitoring, low-stock alerts, and expiry notifications.
      The system also supports the creation of Goods Received Notes (GRNs) and invoices while offering detailed reporting capabilities through Jasper Reports.
      The backend is powered by MySQL, ensuring reliable data storage and retrieval, making MixLab Pharmacy a powerful solution for modern pharmacy operations.
    `,
    src: mixlabImg,
    srcMain: mixlablogo,
    sourceUrl: "https://github.com/VinulGajaman/Mix-Lab",
  },

  {
    category: "Nexsus AI",
    title: "Enhance your productivity with Gemini AI",
    tags: ["SPRINGBOOT", "REACT", "BOOTSTRAP", "GEMINI API"],
    description:
      ` is an intelligent chatbot application built using Java Spring Boot and React JS,
          It integrates Google’s Gemini API to deliver real-time conversational AI capabilities through a clean, responsive UI styled with Bootstrap.
          The chatbot enables users to ask questions in natural language and receive contextually relevant answers, powered by Gemini's advanced language model.
          On the backend, a Spring Boot service handles API calls securely using WebClient, dynamically sending user queries and returning responses.
          This project demonstrates modern full-stack development with AI integration for interactive user support experiences.`,
    src: GeminiAi,
    srcMain: Geminiailogo,
    sourceUrl: "https://github.com/VinulGajaman/AiBot",

  },
  {
    category: "AI Email Extention",
    title: "AI-powered Email Reply Generator",
    tags: ["SPRINGBOOT", "GEMINI API", "WEB CLIENT", "WEB CLIENT"],
    description:
      "An AI-powered Gmail extension that automatically generates email replies based on the original email content. Users can select the tone (Professional, Casual, Friendly) from a dropdown in the frontend. Built with Spring Boot, Gemini API, and ReactJS, it sends the email content to the backend and returns intelligent, context-aware replies, streamlining email communication.",
    src: emailai,
    srcMain: emailailogo,
    sourceUrl: "https://github.com/VinulGajaman/ai-email-reply",
  },
  {
    category: "AI Productivity Tool",
    title: "Enhance your productivity with Gemini AI",
    tags: ["JAVA", "MYSQL", "JASPER REPORTS"],
    description:
      "Integrated Google Gemini AI API for smart task management and automated email replies, improving workflow efficiency.",
    src: GeminiAi,
    srcMain: Geminiailogo,
    sourceUrl: "https://github.com/VinulGajaman/AiBot",
  },
  {
    category: "MixLab Pharmacy",
    title: "Inventory and Sales Management",
    tags: ["JAVA", "MYSQL", "JASPER REPORTS"],
    description:
      "Built a POS system for pharmacy inventory and sales tracking. Features include transaction processing, stock validation, and automated reporting.",
    src: mixlabImg,
    srcMain: mixlablogo,
    sourceUrl: "https://github.com/VinulGajaman/AiBot",
  },
  {
    category: "AI Productivity Tool",
    title: "Enhance your productivity with Gemini AI",
    tags: ["JAVA", "MYSQL", "JASPER REPORTS"],
    description:
      "Integrated Google Gemini AI API for smart task management and automated email replies, improving workflow efficiency.",
    src: GeminiAi,
    srcMain: Geminiailogo,
    sourceUrl: "https://github.com/VinulGajaman/AiBot"
  },

];
