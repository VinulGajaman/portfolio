"use client";
import { Card, Carousel } from "./apple-cards-carousel";
import mixlabImg from "../assets/projects/mixlab.png";
import GeminiAi from "../assets/projects/Gemini_AI_API.png";




export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card
      key={card.src}
      card={{
        ...card,
        content: (
          <ProjectCardContent
            title={card.title}
            tags={card.tags}
            description={card.description}
            imgSrc={card.src}
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

const ProjectCardContent = ({ title, description, imgSrc, tags }: { title: string; description: string; imgSrc: string, tags: string[] }) => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">{title}</span>{" "}
        {description}
      </p>
      {/* ✅ Better tag styling for readability */}
      <div className="mb-4 mt-4 flex flex-wrap gap-2">
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
        height="500"
        width="500"
        className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
      />
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
    description:
      "Built a POS system for pharmacy inventory and sales tracking. Features include transaction processing, stock validation, and automated reporting.",
    src: mixlabImg,
  },
  {
    category: "AI Productivity Tool",
    title: "Enhance your productivity with Gemini AI",
    tags: ["JAVA", "MYSQL", "JASPER REPORTS"],
    description:
      "Integrated Google Gemini AI API for smart task management and automated email replies, improving workflow efficiency.",
    src: GeminiAi,
  },
   {
    category: "MixLab Pharmacy",
    title: "Inventory and Sales Management",
    tags: ["JAVA", "MYSQL", "JASPER REPORTS"],
    description:
      "Built a POS system for pharmacy inventory and sales tracking. Features include transaction processing, stock validation, and automated reporting.",
    src: mixlabImg,
  },
  {
    category: "AI Productivity Tool",
    title: "Enhance your productivity with Gemini AI",
    tags: ["JAVA", "MYSQL", "JASPER REPORTS"],
    description:
      "Integrated Google Gemini AI API for smart task management and automated email replies, improving workflow efficiency.",
    src: GeminiAi,
  },
    {
    category: "MixLab Pharmacy",
    title: "Inventory and Sales Management",
    tags: ["JAVA", "MYSQL", "JASPER REPORTS"],
    description:
      "Built a POS system for pharmacy inventory and sales tracking. Features include transaction processing, stock validation, and automated reporting.",
    src: mixlabImg,
  },
  {
    category: "AI Productivity Tool",
    title: "Enhance your productivity with Gemini AI",
    tags: ["JAVA", "MYSQL", "JASPER REPORTS"],
    description:
      "Integrated Google Gemini AI API for smart task management and automated email replies, improving workflow efficiency.",
    src: GeminiAi,
  },

];
