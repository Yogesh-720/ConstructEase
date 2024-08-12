import { projects } from "../constants";
import ProjectsCard from "../Components/ProjectsCard"

const WhatWeBuild = () => {
  return (
    <section className="max-container max-sm:mt-12">

      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">
          What <span className="text-light-green">We</span> Build
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-gray-700">
          Explore our diverse portfolio of projects, showcasing our commitment
          to quality, innovation, and sustainability. Discover structures that
          stand the test of time and bring visions to life.
        </p>
      </div>

      <div className="mt-16 sm:gap-4 gap-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
        {projects.map((project)=>(
          <ProjectsCard key={project.name} {...project} />
        ))}
      </div>
    </section>
  );
};

export default WhatWeBuild;
