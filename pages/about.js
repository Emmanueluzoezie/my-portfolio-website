import Head from 'next/head'
import Menu from "../components/Menu"
import About from "../components/about"
import Footer from "../components/footer"
import Skill from "../components/Skills"

const Abouts = () => {
  return (
    <div className="dark:bg-gray-800 bg-gray-100 text-white w-screen" >
      <Head>
        <title>About jonuel portfolio </title>
        <meta name="description" content="Jonuel portfolio About" />
      </Head>

      <Menu />
      <About />
      <Skill />
      <Footer />
      
    </div>
  )
}

export default Abouts