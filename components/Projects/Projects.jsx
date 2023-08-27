import React from "react";
import { projectsData } from "./constant";
import ProjectItems from "./ProjectsItems";

const Projects = () => {
  return (
    <div id="projects" className="w-full p-16">
      <div className=" mx-auto px-2 py-16 w-full">
        <p className="text-xl font-bold tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h3 className="py-4 text-2xl font-bold">Look, What I&apos;ve Built</h3>
        <div className="grid md:grid-cols-3 gap-8 ">
          {projectsData.map((item) => (
            <ProjectItems
              key={item.title}
              title={item.title}
              backgroundImg={item.backgroundImg}
              projectUrl={item?.projectUrl}
              tech={item.tech}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
