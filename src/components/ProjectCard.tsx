import Link from "next/link";
import type { Project } from "@/lib/projects";
import { Stamp } from "./Stamp";

// An index card with its top-right corner dog-eared. Only projects get the
// fold, so it keeps meaning "this is a thing i made".
export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={project.href} className="ap-card">
      <div className="ap-card__paper">
        <span className="ap-card__flap" />
        <div className="ap-card__no">{project.shelf}</div>
        <h3 className="ap-card__title">{project.title}</h3>
        <p className="ap-card__desc">{project.description}</p>
        <Stamp status={project.status} />
      </div>
    </Link>
  );
}
