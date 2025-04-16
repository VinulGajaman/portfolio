import { useEffect, useState } from "react";
import NavBar from "./scenes/navbar";

import { SelectedPage } from "./shared/types";
import Skills from "./scenes/skills";
import About from "./scenes/about";
import Experience from "./scenes/experience";
import Start from "./scenes/start";
import Projects from "./scenes/projects";
import ScrollToTopButton from "./components/ScrollToTopButton ";
import Contact from "./scenes/contact";
import Footer from "./components/Footer";



function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.About);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the scroll position is at the top of the page
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.About);
      } else {
        setIsTopOfPage(false);
      }
    };

    // Add the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <>

      <div className="app bg-gray-20">

        <header>
          <NavBar
            isTopOfPage={isTopOfPage}
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        </header>
        <main>
          <Start setSelectedPage={setSelectedPage} />
          <About setSelectedPage={setSelectedPage} />
          <Skills setSelectedPage={setSelectedPage} />
          <Experience setSelectedPage={setSelectedPage} />
          <Projects setSelectedPage={setSelectedPage} />
          <Contact setSelectedPage={setSelectedPage} />
        </main>
        <ScrollToTopButton />
        <Footer />
      </div>


    </>
  );
}

export default App;
