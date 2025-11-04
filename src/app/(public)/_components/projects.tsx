import { CardProjects } from "@/components/card-projects";
import { PROJECTS } from "../../../../public/mock/projects";

export default function Projects() {
  const projects = PROJECTS;

  return (
    <div className="w-full h-full">
      <div className="container min-h-dvh flex flex-col items-center justify-center">
        <div className="w-full flex items-end gap-2">
          <p className="text-3xl text-main font-bold">#03</p>
          <p className="text-4xl text-white font-bold">Projetos</p>
        </div>

        <div className="w-full h-full grid grid-rows-1 grid-cols-3 gap-4">
          {projects.map((el, idx) => {
            return <CardProjects key={idx} project={el}></CardProjects>;
          })}
        </div>
      </div>
    </div>
  );
}
