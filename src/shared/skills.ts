import htmlImg from "/src/assets/skills/html.png";
import cssImg from "/src/assets/skills/css.png";
import jsImg from "/src/assets/skills/js.png";
import phpImg from "/src/assets/skills/php.png";
import tsImg from "/src/assets/skills/ts.png";
import javaImg from "/src/assets/skills/java.png";
import mysqlImg from "/src/assets/skills/mysql.png";
import firebaseImg from "/src/assets/skills/firebase.png";
import bootstrapImg from "/src/assets/skills/bootstrap.png";
import tailwindImg from "/src/assets/skills/tailwind.png";
import muiImg from "/src/assets/skills/mui.png";
import reactImg from "/src/assets/skills/react.png";
import vueImg from "/src/assets/skills/vue.png";
import springImg from "/src/assets/skills/spring.png";

interface Skill {
    title: string;
    imgSrc: string;
    link: string;
}

export const skills: Array<Skill> = [
    {
      title: "HTML",
      imgSrc: htmlImg,
      link: "HTML",
    },
    {
      title: "CSS",
      imgSrc: cssImg,
      link: "CSS",
    },
    {
      title: "JavaScript",
      imgSrc: jsImg,
      link: "JAVASCRIPT",
    },
    {
      title: "PHP",
      imgSrc: phpImg,
      link: "PHP",
    },
    {
      title: "TypeScript",
      imgSrc: tsImg,
      link: "TYPESCRIPT",
    },
    {
      title: "Java",
      imgSrc: javaImg,
      link: "JAVA",
    },
    {
      title: "MySQL",
      imgSrc: mysqlImg,
      link: "MYSQL",
    },
    {
      title: "Firebase",
      imgSrc: firebaseImg,
      link: "FIREBASE",
    },
    {
      title: "Bootstrap",
      imgSrc: bootstrapImg,
      link: "BOOTSTRAP",
    },
    {
      title: "Tailwind",
      imgSrc: tailwindImg,
      link: "TAILWIND",
    },
    {
      title: "Material UI",
      imgSrc: muiImg,
      link: "MATERIAL",
    },
    {
      title: "React JS",
      imgSrc: reactImg,
      link: "REACT",
    },
    {
      title: "Vue JS",
      imgSrc: vueImg,
      link: "VUE",
    },
    {
      title: "Spring Boot",
      imgSrc: springImg,
      link: "SPRING",
    }
];
