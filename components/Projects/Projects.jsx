import React from "react";
import { projectsData } from "./constant";
import ProjectItems from "./ProjectsItems";

const Projects = () => {
  console.log(projectsData)
  return (
    <div id="projects" className="w-full">
      <div className=" mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projectsData.map((item) => (
            <ProjectItems
              key={item.title}
              title={item.title}
              backgroundImg={item.backgroundImg}
              projectUrl={item.projectUrl}
              tech={item.tech}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
