import mixlabImg from "../assets/projects/mixlab.png";



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
    description: "Babbu Maan",
    title: "Mitran Di Chhatri2",
    src: mixlabImg,
    ctaText: "VIEW",
    ctaLink: "",
    content: () => {
      return (
        <p>
          Babu Maan, a legendary Punjabi singer, is renowned for his soulful
          voice and profound lyrics that resonate deeply with his audience. Born
          in the village of Khant Maanpur in Punjab, India, he has become a
          cultural icon in the Punjabi music industry. <br /> <br /> His songs
          often reflect the struggles and triumphs of everyday life, capturing
          the essence of Punjabi culture and traditions. With a career spanning
          over two decades, Babu Maan has released numerous hit albums and
          singles that have garnered him a massive fan following both in India
          and abroad.
        </p>
      );
    },
  },

  {
    description: "Metallica",
    title: "For Whom The Bell Tolls",
    src: "https://assets.aceternity.com/demos/metallica.jpeg",
    ctaText: "VIEW",
    ctaLink: "",
    content: () => {
      return (
        <p>
          Metallica, an iconic American heavy metal band, is renowned for their
          powerful sound and intense performances that resonate deeply with
          their audience. Formed in Los Angeles, California, they have become a
          cultural icon in the heavy metal music industry. <br /> <br /> Their
          songs often reflect themes of aggression, social issues, and personal
          struggles, capturing the essence of the heavy metal genre. With a
          career spanning over four decades, Metallica has released numerous hit
          albums and singles that have garnered them a massive fan following
          both in the United States and abroad.
        </p>
      );
    },
  },
  {
    description: "Led Zeppelin",
    title: "Stairway To Heaven",
    src: "https://assets.aceternity.com/demos/led-zeppelin.jpeg",
    ctaText: "VIEW",
    ctaLink: "",
    content: () => {
      return (
        <p>
          Led Zeppelin, a legendary British rock band, is renowned for their
          innovative sound and profound impact on the music industry. Formed in
          London in 1968, they have become a cultural icon in the rock music
          world. <br /> <br /> Their songs often reflect a blend of blues, hard
          rock, and folk music, capturing the essence of the 1970s rock era.
          With a career spanning over a decade, Led Zeppelin has released
          numerous hit albums and singles that have garnered them a massive fan
          following both in the United Kingdom and abroad.
        </p>
      );
    },
  },
  {
    description: "Mustafa Zahid",
    title: "Toh Phir Aaogg",
    src: "https://assets.aceternity.com/demos/toh-phir-aao.jpeg",
    ctaText: "VIEW",
    ctaLink: "",
    content: () => {
      return (
        <p>
          &quot;Aawarapan&quot;, a Bollywood movie starring Emraan Hashmi, is
          renowned for its intense storyline and powerful performances. Directed
          by Mohit Suri, the film has become a significant work in the Indian
          film industry. <br /> <br /> The movie explores themes of love,
          redemption, and sacrifice, capturing the essence of human emotions and
          relationships. With a gripping narrative and memorable music,
          &quot;Aawarapan&quot; has garnered a massive fan following both in
          India and abroad, solidifying Emraan Hashmi&apos;s status as a
          versatile actor.
        </p>
      );
    },
  },
  {
    description: "Mustafa Zahid",
    title: "Toh Phir Aao978",
    src: "https://assets.aceternity.com/demos/toh-phir-aao.jpeg",
    ctaText: "VIEW",
    ctaLink: "",
    content: () => {
      return (
        <p>
          &quot;Aawarapan&quot;, a Bollywood movie starring Emraan Hashmi, is
          renowned for its intense storyline and powerful performances. Directed
          by Mohit Suri, the film has become a significant work in the Indian
          film industry. <br /> <br /> The movie explores themes of love,
          redemption, and sacrifice, capturing the essence of human emotions and
          relationships. With a gripping narrative and memorable music,
          &quot;Aawarapan&quot; has garnered a massive fan following both in
          India and abroad, solidifying Emraan Hashmi&apos;s status as a
          versatile actor.
        </p>
      );
    },
  },
  {
    description: "Mustafa Zahid",
    title: "Toh Phir Aao66",
    src: "https://assets.aceternity.com/demos/toh-phir-aao.jpeg",
    ctaText: "VIEW",
    ctaLink: "",
    content: () => {
      return (
        <p>
          &quot;Aawarapan&quot;, a Bollywood movie starring Emraan Hashmi, is
          renowned for its intense storyline and powerful performances. Directed
          by Mohit Suri, the film has become a significant work in the Indian
          film industry. <br /> <br /> The movie explores themes of love,
          redemption, and sacrifice, capturing the essence of human emotions and
          relationships. With a gripping narrative and memorable music,
          &quot;Aawarapan&quot; has garnered a massive fan following both in
          India and abroad, solidifying Emraan Hashmi&apos;s status as a
          versatile actor.
        </p>
      );
    },
  },

];
