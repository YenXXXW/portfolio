import Image from "next/image";
import Link from "next/link";
import NEWS from "../public/projects/news.jpg";
import { RiRadioButtonFill } from "react-icons/ri";

const PriceList = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div
          className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh]
            bg-black/80 z-10"
        />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={"/projects/lister.png"}
          alt="PriceListImage"
        />
        <div
          className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%]
            translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2"
        >
          <h2>Price List</h2>
          <h3>Next.js/ MongoDb/ Nodejs/ TailWind CSS</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-5 pt-8 ">
        <div className="col-span-4">
          <h4>Project</h4>
          <h2>Overview</h2>
          <div>
            A fullstack <span className="text-[#5651e5]">Next.js </span>
            application that helps the client to note down the product prices.
            Whenever needed the client can easily view their product prices
            immedaitely with the search funality. Also includes the user
            authentication system for different users.
          </div>
          <a
            href="https://github.com/YenXXXW/lister"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </a>
          <a
            href="https://lister-nine.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4">Demo</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2 ">
            <p className="text-center font-bold pb-2">Techonologies</p>
            <div className="grid grid-cols-2 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="mr-2" />
                Next.js
              </p>

              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="mr-2" />
                Typescript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="mr-2" />
                MongoDb
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="mr-2" />
                Nodejs
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="mr-2" />
                Tailwind Css
              </p>
            </div>
          </div>
        </div>
      </div>
      <Link href="/#projects">
        <div className="flex justify-center mt-5 cursor-pointer">
          <p className="text-gray-500 text-md font-bold">Back</p>
        </div>
      </Link>
    </div>
  );
};

export default PriceList;
