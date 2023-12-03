import ProjectItem from "./projectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest text-[#5651e5]">PROJECTS</p>
        <h2 className="py-4">What I&#39;ve built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Netflix"
            background="/projects/netflix.webp"
            skill="ReactJS+NextJs"
            projectURL="/netflix"
          />
          <ProjectItem
            title="lister"
            background="/projects/lister.png"
            skill="Next.js+MongoDb+NodeJs"
            projectURL="/lister"
          />
          <ProjectItem
            title="Google News"
            background="/projects/news.jpg"
            skill="ReactJS+NextJs"
            projectURL="/news"
          />
          <ProjectItem
            title="Quiz game"
            background="https://bgr.com/wp-content/uploads/2022/03/Trivia-Quest.jpg?quality=82&strip=all"
            skill="ReactJS+Typescript"
            projectURL="/reactQuiz"
          />

          <ProjectItem
            title="Tesla"
            background="/projects/tesla.png"
            skill="ReactJS+NextJs"
            projectURL="/tesla"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
