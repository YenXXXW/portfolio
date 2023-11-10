import Image from "next/image";
import Link from "next/link";

const ProjectItem = ({ title, background, skill, projectURL }) => {
  return (
    <div
      className="flex relative items-center justify-center h-auto w-full shadow-xl
        shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#58b965]"
    >
      <Image
        src={background}
        width="600"
        height="350"
        alt="projectItem"
        className="rounded-xl group-hover:opacity-10"
      />
      <div
        className="hidden group-hover:block absolute top-[50%] w-[150px]
            left-[50%] translate-x-[-50%] translate-y-[-50%]"
      >
        <p className="text-2xl text-white text-center">{title}</p>
        <p className="text-white text-center pb-4 pt-2">{skill}</p>
        <Link href={projectURL}>
          <p className="text-center rounded-lg py-3 bg-white text-lg font-bold cursor-pointer text-gray-700">
            More Info
          </p>
        </Link>
      </div>
    </div>
  );
};
export default ProjectItem;
