import mixlabImg from "../assets/projects/mixlab.png";
import GeminiAi from "../assets/projects/Gemini_AI_API.png";



export const cards = [
  {
    description: "Java, MySQL",
    title: "MixLab Pharmacy",
    src: mixlabImg,
    ctaText: "VIEW",
    ctaLink: "https://github.com/VinulGajaman/Mix-Lab",
    content: () => {
      const tags: string[] = ["JAVA", "MYSQL", "JASPER REPORTS"];
      return (
        <p>
          <div className="mb-4 mt-2 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <kbd
                key={tag}
                className="px-2 py-1.5 text-xs font-semibold text-white bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-200 dark:border-gray-500"
              >
                #{tag}
              </kbd>
            ))}
          </div>
          MixLab Pharmacy is a comprehensive desktop application designed to streamline pharmacy management processes.
          Developed with Java Swing using NetBeans, the application provides functionality for creating, updating, deleting, and searching records for users, customers, and suppliers.
          It allows efficient management of products, including stock monitoring, low-stock alerts, and expiry notifications.
          The system also supports the creation of Goods Received Notes (GRNs) and invoices while offering detailed reporting capabilities through Jasper Reports. The backend is powered by MySQL, ensuring reliable data storage and retrieval, making MixLab Pharmacy a powerful solution for modern pharmacy operations.
        </p>

      );
    },
  },
  {
    description: "Java Springboot, React Js, Bootstrap CSS, Google Gemini AI",
    title: "Nexsus AI",
    src: GeminiAi,
    ctaText: "VIEW",
    ctaLink: "https://github.com/VinulGajaman/AiBot",
    content: () => {
      const tags: string[] = ["SPRINGBOOT", "REACT", "BOOTSTRAP", "GEMINI API"];
      return (
        <p>
          <div className="mb-4 mt-2 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <kbd
                key={tag}
                className="px-2 py-1.5 text-xs font-semibold text-white bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-200 dark:border-gray-500"
              >
                #{tag}
              </kbd>
            ))}
          </div>
          Nexsus AI is an intelligent chatbot application built using Java Spring Boot and React JS.
          It integrates Google’s Gemini API to deliver real-time conversational AI capabilities through a clean, responsive UI styled with Bootstrap.
          The chatbot enables users to ask questions in natural language and receive contextually relevant answers, powered by Gemini's advanced language model.
          On the backend, a Spring Boot service handles API calls securely using WebClient, dynamically sending user queries and returning responses.
          This project demonstrates modern full-stack development with AI integration for interactive user support experiences.
        </p>

      );
    },
  },

  

];
