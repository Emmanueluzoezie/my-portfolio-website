import {useState} from "react"
import Link  from "next/link"
import { Transition } from "@headlessui/react";
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import Image from "next/image"
import logo from "../public/logo.png";
import useDarkMode from "./useDarkMode";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

const Menu = () => {

      const [colorTheme, setTheme] = useDarkMode();
      const [isOpen, setIsOpen] = useState(false);

      return (
        <div>
          <nav className=" w-screen z-10 border-b-4 border-gray-500 bg-gray-300 dark:bg-gray-800 dark:border-white" style={{ position: "-webkit-sticky", position: "sticky", top: '0'}}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between px-2 h-20">
                <div className="flex items-center">
                  <div className="">
                    <Link href="/" passHref>
                    <Image src={logo} alt="logo" width="130px" height="130px" className="cursor-pointer"/>
                    </Link>
                  </div>
                  <div className="hidden md:block ">
                    <div className="md:ml-16 lg:ml-80 flex bg-red items-baseline space-x-4">
                        <Link href="/" passHref>
                        <a  className=" text-black hover:bg-gray-200 hover:text-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium lg:text-xl" 
                      >
                        Home
                      </a >
                        </Link>
                        <Link href="/projects" passHref>
                        <a  className="text-black hover:bg-gray-200 hover:text-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium lg:text-xl" 
                      >
                        Projects
                      </a >
                        </Link>
                       <Link href="/about" passHref>
                        <a  className="text-black hover:bg-gray-200 hover:text-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium lg:text-xl" 
                      >
                        About
                      </a >
                       </Link>
                        <Link href="/contact" passHref>
                        <a className="text-black hover:bg-gray-200 hover:text-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white  px-3 py-2 rounded-md text-sm font-medium lg:text-xl" 
                      >
                        Contact
                      </a >
                        </Link>
                    </div>
                  </div>
                </div>
                {colorTheme === "light"? (<div className="cursor-pointer text-black hidden hover:bg-gray-200 hover:text-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white  px-3 py-2 rounded-md text-sm font-medium lg:text-xl md:flex items-center" onClick={() => setTheme("light")}>Light <LightModeIcon className="ml-2" /> </div>) : (<div className="cursor-pointer text-black hover:bg-gray-200 hover:text-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white hidden  px-3 py-2 rounded-md text-sm font-medium lg:text-xl md:flex items-center" onClick={() => setTheme("dark")}>Dark<DarkModeIcon className="ml-2"/></div>)}
                <div className="-mr-2 flex md:hidden ">
                  <a
                    onClick={() => setIsOpen(!isOpen)}
                    type="button"
                    className="bg-gray-300 dark:bg-gray-900  inline-flex items-center justify-center p-2 rounded-md text-black hover:bg-gray-200 hover:text-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-whit focus:outline-none cursor-pointer  focus:ring-offset-2 focus:ring-offset-gray-800 mr-5"
                    aria-controls="mobile-menu"
                    aria-expanded="false"
                  >
                    <span className="sr-only ">Open main menu</span>
                    {!isOpen ? (
                      <MenuIcon/>
                    ) : (
                      <CloseIcon/>
                    )}
                  </a>
                </div>
              </div>
            </div>
    
            <Transition
              show={isOpen}
              enter="transition ease-out duration-100 transform"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="transition ease-in-out duration-500 transform"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
              
            >
              {(ref) => (
                <div className="md:hidden " id="mobile-menu">
                  <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3 ">   
                  <Link href="/" passHref>            
                  <a className="text-black hover:bg-gray-200 hover:text-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                      Home
                    </a>
                  </Link>
                   <Link href="/projects" passHref>
                   <a className="text-black hover:bg-gray-200 hover:text-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                      Projects
                    </a>
                   </Link>
                   <Link href="/about" passHref>
                   <a className="text-black hover:bg-gray-200 hover:text-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                      About
                    </a>
                   </Link>
                   <Link href="/contact" passHref>
                   <a className="text-black hover:bg-gray-200 hover:text-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                      Contact
                    </a>
                   </Link>
                   {colorTheme === "light"? (<div className="cursor-pointer text-black hover:bg-gray-200 hover:text-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white px-3 py-2 rounded-md text-base font-medium flex items-center" onClick={() => setTheme("light")}>Light <LightModeIcon className="ml-2" /> </div>) : (<div className="cursor-pointer text-black hover:bg-gray-200 hover:text-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white px-3 py-2 rounded-md text-base font-medium flex items-center" onClick={() => setTheme("dark")}>Dark<DarkModeIcon className="ml-2"/></div>)}
                  </div>
                </div>
              )}
            </Transition>
          </nav>
        </div>
  )
};

export default Menu;