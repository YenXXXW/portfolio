
import ProjectItem from './projectItem';

const Projects = () => {
    return (
        <div id='projects' className="w-full">
            <div className="max-w-[1240px] mx-auto px-2 py-16">
                <p className="text-xl tracking-widest text-[#5651e5]">PROJECTS</p>
                <h2 className='py-4'>What I&#39;ve built</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <ProjectItem
                     title='Google News'
                     background='/projects/news.jpg'
                     skill='ReactJS+NextJs'
                     projectURL='/news'
                     />

                    <ProjectItem
                     title='Tesla'
                     background='/projects/tesla.png'
                     skill='ReactJS+NextJs'
                     projectURL='/tesla'
                     />
                </div>
            </div>

        </div>
    );
}
 
export default Projects;