import Head from 'next/head'
import Menu from "../components/Menu"
import Footer from "../components/footer"
import Project from "../components/project"

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
