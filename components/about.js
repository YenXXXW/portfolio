import Image from "next/image";
import Link from 'next/link';
const About = () => {
    return (
        <div id='about' className="w-full md:h-screen p-2 flex items-center py-16">
            <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
                <div className="col-span-2 ml-3">
                    <p className="text-blue-500 text-2xl">ABOUT</p>
                    <h2>Who I Am</h2>
                    <p className='py-2 text-gray-600'>
                        / / I am a hardworking web developer
                    </p>
                    <p className='py-2 text-gray-600'>
                        I am an ece student who is currently self studying frontend web development 
                    </p>
                    <p className='py-2 text-gray-600'>
                        Fascinated with how intricate programming can be I was quickly drawn
                        to learn more. I started learning javascript and how to write
                        responsive web pages and now spending my time building projects
                         with React JS , NextJS and  learning new technologies.
                    </p>
                    <p className='py-2 cursor-pointer no-underline text-blue-500'>
                    <Link href='/#projects' >Check out some of my latest projects.</Link>
                    </p>
                </div>
                <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl hidden md:flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                    <Image src='/about.jpg' width='500' height='500' className="rounded-xl"/>
                </div>
            </div>
        </div>
    );
}
 
export default About;