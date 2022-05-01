import Image from "next/image"
import Typewriter from 'typewriter-effect';
import port from "../public/port.png";
import Link from "next/link"

export default function Main() {


    return (
        <section className="grid place-items-center h-4/6 md:h-4/6 mb-32">
            <div className="mb-0 w-5/6 h-4/6 md:w-full text-center md:text-left flex md:mx-10 flex-col md:grid md:grid-cols-2 lg:px-40 md:px-10 ">
               <div className="grid place-items-center md:h-[550px] mb-14">
               <div className="w-full"> 
                <div className="text-3xl md:text-4xl dark:text-white font-bold font-mono">
                    <p className="md:mt-4">
                        Hey 🖐🖐
                    </p>
                    <h1 className="mt-3">Emmanuel uzoezie</h1>
                </div>
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold mt-0 dark:text-green-300 flex justify-center md:justify-start">
                    <span className="mr-2 text-center">Am a </span>
                    <Typewriter
                        options={{
                            strings: ["Frontend Developer", " Content Creator"],
                            autoStart: true,
                            loop: true
                        }}
                        />
                </div>
                <Link href="https://emmanueluzoezie.bio.link/" passHref><button className="w-36 text-xl border-2 mt-4 py-3 bg-blue-500 text-white hover:bg-white hover:text-black rounded-xl font-bold font-mono hover:transform hover:ease-in-out border-none hover:duration-700">CONTACT ME</button></Link>
                </div>
               </div>
                <div className=" grid place-items-center ">
                <div className=" hover:transform hover:ease-in-out hover:duration-700 ring-[30px] ring-gray-400 rounded-full hover:ring-[5px] w-52 h-22 hover:w-64 hover:h-64 lg:hover:w-96 lg:hover:h-96 lg:w-80 lg:h-80 md:w-60 md:h-60 md:hover:w-72 md:hover:h-72">
                    <Image
                        className=" animate-pulse rounded-full w-full"
                        src={port}
                        alt="Emmanuel uzoezie"
                     />
                </div>
                </div>
            </div>
        </section>
    );
}
