import { ProjectInfoCard } from "../../components/project-info-card";
import { SectionTitle } from "../../components/section-title";
import { projectInfos } from "../../data/project-infos";

export function ProjectInfo() {
  return (
    <section>
      <SectionTitle>ESTRUTURA DO PROJETO</SectionTitle>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {projectInfos.length > 0 &&
          projectInfos.map((item) => (
            <ProjectInfoCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
      </div>
    </section>
  );
}
