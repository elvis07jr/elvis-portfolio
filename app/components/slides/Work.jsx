import { site } from "../../../content/site.config";
import PinnedProjects from "../../components/PinnedProjects";
import ProjectCards from "../../components/ProjectCards";

export default function Work() {
  return (
    <div className="stack-lg">
      <ProjectCards projects={site.projects} />
      {/* @ts-expect-error Async Server Component */}
      <PinnedProjects />
    </div>
  );
}


