import Image from 'next/image'
import Link from 'next/link'
import { RiRadioButtonFill } from 'react-icons/ri'

const Quiz = () => {
    return (
        <div className="w-full ">
            <div className="w-full h-[40vh] lg:h-[50vh] relative">
                <div className="absolute top-0 left-0 w-full h-[40vh] lg:h-[50vh]
                bg-black/40 z-10" />
                <Image className='absolute z-1' layout='fill' objectFit='cover' src='https://bgr.com/wp-content/uploads/2022/03/Trivia-Quest.jpg?quality=82&strip=all'/>
                <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%]
                translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                    <h2>Quzi game</h2>
                    <h3>ReactJS / TailWind CSS /Rest API / Typescript</h3>
                </div>
            </div>
            <div className='max-w-[1240px] mx-auto p-10 grid md:grid-cols-5 gap-8 pt-8 '>
                <div className='col-span-4'>
                    <h4>Project</h4>
                    <h2>Overview</h2>
                    <div className='max-w-2xl my-4'>
                        A fun and simple Quiz game .Three levles of difficulty and various categories
                        to choose from . My first react typescript project and cosumes the Trivia api.
                        Hosted on <span className='text-[#5651e5]'>Vercel </span> and uses the TailwindCss
                        for styling.                        
                        
                    </div>
                    <a
                        href='https://github.com/YenXXXW/React-quiz-game'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <button className='px-8 py-2 mt-4 mr-8'>Code</button>
                    </a>
                    <a
                        href='https://online-react-quiz-game.vercel.app'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <button className='px-8 py-2 mt-4'>Demo</button>
                    </a>                   
                    
                </div>
                <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
                    <div className='p-2 '>
                        <p className='text-center font-bold pb-2'>Techonologies</p>
                            <div className='grid grid-cols-2 md:grid-cols-1'>
                                <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='mr-2'/>ReactJS</p>
                            
                                <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='mr-2'/>TriviaQuiz api</p>
                            
                                <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='mr-2'/>Tailwind CSS</p>
                            
                                <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='mr-2'/>Typescript</p>
                            </div> 
                    </div>
                </div>
            </div> 
            <Link href='/#projects'>
                <div className='flex justify-center mt-5 cursor-pointer'>
                    <p className='text-gray-500 text-md font-bold'>Back</p>
                </div> 
            </Link>             
        </div>
    );
}
 
export default Quiz;