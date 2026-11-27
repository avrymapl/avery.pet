import { SitePage } from "@/components/SitePage";
import { ProjectCard } from "@/components/ProjectCard";
import { UpdateLog } from "@/components/UpdateLog";
import { NowNote } from "@/components/NowNote";
import { socialLinks } from "@/lib/social";
import { projects } from "@/lib/projects";
import { updates, lastFetched } from "@/lib/updates";
import { now } from "@/lib/now";

const nav = [{ label: "projects", href: "/" }, ...socialLinks];

export default function Home() {
  const catalogue = [...projects].sort((a, b) => a.no - b.no);

  return (
    <SitePage tagline="hi, i'm avery!" nav={nav} collie lastFetched={lastFetched()}>
      <section className="site-section">
        <p className="intro">
          i&rsquo;m a boy girl dog thing that loves science and linguistics. welcome to my little
          corner of the internet where i share projects i&rsquo;m working on! :3
        </p>
      </section>

      <section className="site-section" aria-labelledby="projects">
        <h2 id="projects" className="ap-section-title">
          projects
        </h2>
        <div className="ap-grid">
          {catalogue.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <div className="site-section grid gap-8 md:grid-cols-[minmax(0,1fr)_18rem] md:items-start">
        <section aria-labelledby="updates">
          <h2 id="updates" className="ap-section-title">
            recent updates
          </h2>
          <UpdateLog entries={updates.slice(0, 5)} />
        </section>
        {now && <NowNote note={now} />}
      </div>
    </SitePage>
  );
}
