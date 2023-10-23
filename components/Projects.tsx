import { projectsData } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import Project from "./Project";
import React from "react";

export default function Projects() {
  return (
    <section className="scroll-mt-28 mb-28 text-center">
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
