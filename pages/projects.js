import Head from 'next/head'
import Menu from "../components/Menu"
import Footer from "../components/footer"
import Project from "../components/project"
import logo from "../public/logo.jpeg"
import Image from "next/Image"

const Projects = () => {
  return (
    <div className="dark:bg-gray-800 bg-gray-100 h-screen relative" >
      <Head>
        <title>Jonuel Projects </title>
        <meta name="description" content="Jonuel portfolio About" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Menu />
      <Project />
      <Footer />
    </div>
  )
}

export default Projects;

// <div className="grid place-items-center h-4/6 ">
//       <div className=" grid place-items-center ">
//                 <div className=" rounded-full hover:ring-[5px] w-52 h-22 hover:w-64 hover:h-64 lg:hover:w-96 lg:hover:h-96 lg:w-80 lg:h-80 md:w-60 md:h-60 md:hover:w-72 md:hover:h-72">
//                     <Image
//                         className=" animate-pulse rounded-full w-full object-cover"
//                         src={logo}
//                         alt="Emmanuel uzoezie"
//                      />
//                 </div>
//                 </div>
//       </div>