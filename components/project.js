import Image from "next/image"
import Link from "next/link"
import project1 from "../public/project1.png";
import project2 from "../public/project2.png";


function Project (){

    
    return(
        <div className=" my-5 ">
            <h1 className="text-center text-2xl dark:text-white text-black font-bold font-mono">My Projects</h1>
            <div className=" md:flex md:space-x-7 px-10">
            <div className="my-8 border pb-2 bg-gray-300 shadow-xl dark:bg-gray-600 ">
                <Link href="https://coins-tracker.vercel.app/" passHref>
                    <div className="cursor-pointer">
                        <Image
                            src={project1}
                            alt="technolgy"
                        />
                    </div>  
                </Link>
                
                <div className=" flex justify-between cursor-pointer px-4 ">
                    <Link  href="https://github.com/Emmanueluzoezie/coin-tracker" passHref>
                    <a className="dark:text-white text-black font-semibold hover:text-blue-400 dark:hover:text-blue-600">Get the source code</a>
                    </Link>
                    <Link href="https://coins-tracker.vercel.app/" passHref>
                    <a className="dark:text-white text-black font-semibold hover:text-blue-400 dark:hover:text-blue-600">Veiw website</a>
                    </Link>
                </div>
            </div>
            <div className="my-8 border pb-2 bg-gray-300 dark:bg-gray-600 shadow-xl ">
                <Link href="https://googl-clone-site.netlify.app/" passHref>
                    <div className="cursor-pointer">
                        <Image
                            src={project2}
                            alt="technolgy"
                        />
                    </div>  
                </Link>
                
                <div className=" flex justify-between cursor-pointer px-4">
                    <Link  href="https://github.com/Emmanueluzoezie/googl-clone" passHref>
                    <a className="dark:text-white text-black font-semibold hover:text-blue-400 dark:hover:text-blue-600">Get the source code</a>
                    </Link>
                    <Link href="https://googl-clone-site.netlify.app/" passHref>
                    <a className="dark:text-white text-black font-semibold hover:text-blue-400 dark:hover:text-blue-600">Veiw website</a>
                    </Link>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Project

