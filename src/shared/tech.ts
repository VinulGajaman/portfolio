import androidImg from "/src/assets/tech/android.png";
import intellijImg from "/src/assets/tech/intellij.png";
import netbeansImg from "/src/assets/tech/netbeans.png";
import postmanImg from "/src/assets/tech/postman.png";
import vscodeImg from "/src/assets/tech/vscode.png";

interface Tech {
    title: string;
    imgSrc: string;
    link: string;
}

export const techs: Array<Tech> = [
    {
      title: "VS Code",
      imgSrc: vscodeImg,
      link: "VS Code",
    },
    {
      title: "Intellij IDEA",
      imgSrc: intellijImg,
      link: "Intellij IDEA",
    },
    {
      title: "Apache Netbeans",
      imgSrc: netbeansImg,
      link: "Apache Netbean",
    },
    {
      title: "Postman",
      imgSrc: postmanImg,
      link: "PHP",
    },
    {
      title: "Android Studio",
      imgSrc: androidImg,
      link: "Android Studi",
    },
    
];
