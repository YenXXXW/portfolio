import Image from "next/image";
const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2 ">
      <div className="max-w-[1240p] mx-10 flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest text-[#5651e5]">Skills</p>
        <h2>What I can do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 shadow-xl rounded-x1 hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/skills/html.png"
                  width={"64px"}
                  height={"64px"}
                  alt="htmlLogo"
                />
              </div>
              <div className="flex justify-center">
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-x1 hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/skills/css.png"
                  width={"64px"}
                  height={"64px"}
                  alt="CSSLogo"
                />
              </div>
              <div className="flex justify-center">
                <h3>CSS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-x1 hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/skills/javascript.png"
                  width={"64px"}
                  height={"64px"}
                  alt="JavaScriptLogo"
                />
              </div>
              <div className="flex justify-center">
                <h3>JAVASCRIPT</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-x1 hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/skills/react.png"
                  width={"64px"}
                  height={"64px"}
                  alt="ReachJsLogo"
                />
              </div>
              <div className="flex justify-center">
                <h3>REACT</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-x1 hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/skills/nextjs.png"
                  width={"64px"}
                  height={"64px"}
                  alt="NextJsLogo"
                />
              </div>
              <div className="flex justify-center">
                <h3>NEXTJS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-x1 hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/skills/tailwind.png"
                  width={"64px"}
                  height={"64px"}
                  alt="TailwindCssLogo"
                />
              </div>
              <div className="flex justify-center">
                <h3>TAILWIND</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-x1 hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/skills/github1.png"
                  width={"64px"}
                  height={"64px"}
                  alt="GitHubLogo"
                />
              </div>
              <div className="flex justify-center">
                <h3>GITHUB</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-x1 hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/skills/typescript.png"
                  width={"64px"}
                  height={"64px"}
                  alt="TypescriptLogo"
                />
              </div>
              <div className="flex justify-center">
                <h3>Typescript</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
