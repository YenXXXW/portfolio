import Link from "next/link";
import { BsFacebook ,BsFillPersonLinesFill  } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai';
import { HiChevronDoubleUp } from 'react-icons/hi'

const Contact = () => {
    return (
        <div id='contact' className="w-full lg:h-screen">
          <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
            <p className="text-xl tracking-widest text-[#5651e5]">CONTACT</p> 
            <h2 className="py-4">Get in Touch</h2>
              <div className="grid lg:grid-cols-5 gap-8">
                <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl
                 rounded-xl p-4 shadow-gray-400">
                  <div className="lg:p-4 h-full">
                    <div>
                      <img className="rounded-xl hover:scale-105 ease-in duration-300"
                      src='/contact/typing.jpg'/>    
                    </div>
                    <div>
                      <h2 className="py-2">Name here</h2>
                      <p>Front-End Developer</p>
                      <p>I&#39;m avialabe for freelance and full-time options.Conatct me and let&#39;s talk</p>
                    </div>
                    <div>
                      <h3 className="pt-8 ">Connect with Me</h3>
                      <div className="flex items-center justify-around py-4">
                        <div className="p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                          <a 
                          href="https://www.facebook.com/profile.php?id=100016784135387"
                          rel="noreferer"
                          target="_blank"
                          >
                            <BsFacebook size={22}/> 
                          </a>                          
                        </div>
                        <div className="p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                          <a
                          href="mailto:waiiiyannn56@gmail.com"
                          target='_blank'
                          rel="noreferer"
                          >
                            <AiOutlineMail size={22} />
                          </a>                          
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
                <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
                  <div className="p-4">
                    <form  action="https://formsubmit.co/814284200edc7c41723e7d12fab0d24d" method="POST">
                      <div className="grid md:grid-cols-2 gap-4 w-full py-4">
                        <div className="flex flex-col">
                          <label className="text-sm py-2">Name</label>
                          <input
                           required 
                           type='text'
                           name='Name'
                           className='border-2 rounded-lg p-2  border-gray-500'
                          />  
                        </div>
                        <div className="flex flex-col">
                          <label className="text-sm py-2">Phone Number</label>
                          <input className='border-2 rounded-lg p-2  border-gray-500'  type='text'></input>  
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <label className="text-sm py-2">Email</label>
                        <input
                           required 
                           type='text'
                           name='Email'
                           className='border-2 rounded-lg p-2  border-gray-500'
                        />
                      </div>
                      <div className="flex flex-col">
                        <label className="text-sm py-2">Subject</label>
                        <input
                           required 
                           type='text'
                           name='Subject'
                           className='border-2 rounded-lg p-2  border-gray-500'
                        />
                      </div> 
                      <div className="flex flex-col">
                        <label className="text-sm py-2">Message</label>
                        <textarea
                         className='border-2 rounded-lg p-2  border-gray-500' 
                         rows='5' 
                         required 
                         name ="Message"
                        />  
                      </div>                        
                      <button className="w-full p-4 text-gray-100 mt-4">Send</button>
                      
                    </form>
                    
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <Link href='/'>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3
                    cursor-pointer hover:scale-105 ease-in duration-300 mt-4">
                    <HiChevronDoubleUp size='30' className="text-[#5651e5]"/>
                  </div>
                </Link>
              </div>
          </div>

            

        </div>
    );
}
 
export default Contact;