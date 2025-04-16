
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import useMediaQuery from "../../hooks/useMediaQuery";
import { SelectedPage } from "../../shared/types";
import Link from "./Link";
import Logo from "/logo1.png"
import { useState } from "react";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";


type Props = {
  isTopOfPage: boolean,
  selectedPage: SelectedPage,
  setSelectedPage: (value: SelectedPage) => void

};

const NavBar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const flexBetween = "flex items-center justify-between";
  const flexCenter = "flex items-center justify-center";
  const [isMenuTogglled, setIsMenuTogglled] = useState<boolean>(false);
  const isAboveMediaScreens = useMediaQuery("(min-width:1060px)");
  const navbarBacground = isTopOfPage ? "" : "bg-white bg-opacity-5 backdrop-blur-lg rounded-full";


  return (
    <nav>
      <div
        className={`${navbarBacground} ${flexBetween} fixed top-0 z-40 w-full py-2`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>

            {/* {LEFT SIDE} */}

            <AnchorLink
              onClick={() =>
                isAboveMediaScreens
                  ? setSelectedPage(SelectedPage.Start)
                  : setSelectedPage(SelectedPage.About)
              }
              href={`#${isAboveMediaScreens ? SelectedPage.Start : SelectedPage.About}`}
            >
              <img
                src={Logo}
                alt="Logo"
                className="transition-transform duration-300 ease-in-out transform hover:scale-110 hover:cursor-pointer w-24 h-auto"
              />
            </AnchorLink>




            {/* {RIGHT SIDE} */}
            {isAboveMediaScreens ? (
              <div className={`${flexCenter} w-full`}>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: -150 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  className={`${flexBetween} gap-8 text-xl`}
                >
                  {["About", "Skills", "Experience", "Projects", "Contact"].map((page) => (
                    <Link
                      key={page}
                      page={page}
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    />
                  ))}
                </motion.div>
              </div>
            ) : (

              <button className="rounded-full p-2"
                onClick={() => setIsMenuTogglled(!isMenuTogglled)}>
                <Bars3Icon className="h-9 w-9 text-primary-500" />
              </button>
            )}
          </div>
        </div>
      </div>
      {/* MOBILE MENU MODAL */}
      {!isAboveMediaScreens && isMenuTogglled && (
        <motion.div
          className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-white bg-opacity-5 backdrop-blur-lg"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {/* CLOSE ICON */}
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuTogglled(!isMenuTogglled)}>
              <XMarkIcon className="h-7 w-7 text-primary-500" />
            </button>
          </div>
          {/* MENU ITEMS */}
          <motion.div
            className="ml-[33%] flex flex-col gap-10 text-2xl"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  delayChildren: 0.2,
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {['About', "Skills", "Experience", "Projects", 'Contact'].map((page) => (
              <motion.div
                key={page}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <Link
                  page={page}
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      )}

    </nav >
  )
}

export default NavBar