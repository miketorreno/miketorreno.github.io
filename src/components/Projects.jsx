import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div
      id="projects"
      className="min-h-screen w-full mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="font-bold uppercase tracking-widest text-sky-400 lg:sr-only">
          Projects
        </h2>
      </div>

      <div className="">
        <ol className="group/list">
          <li className="mb-12">
            <ProjectCard
              title="DevOps & Cloud Templates"
              description="Reusable collection of infrastructure and deployment blueprints for provisioning, configuring, securing, and monitoring production environments across cloud and containerized workloads, standardizing the software delivery lifecycle through automation and infrastructure as code."
              url="https://github.com/miketorreno/devops-cloud-templates"
              techStack={[
                "AWS",
                "Terraform",
                "Ansible",
                "Nginx",
                "GitHub Actions",
                "Docker",
                "Kubernetes",
                "Helm",
              ]}
              imgs={["devops-cloud-templates.png"]}
            />
          </li>

          <li className="mb-12">
            <ProjectCard
              title="Electronic Health Record (EHR)"
              description="Healthcare management system for maintaining patient records and coordinating appointments, with a relational data architecture, optimized database queries, and automated deployment pipelines designed for reliable, near-zero downtime releases."
              url="https://github.com/miketorreno/sshp"
              techStack={[
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
                "Shadcn/ui",
                "Zod",
                "PostgreSQL",
                "Prisma",
                "GitHub Actions",
                "Docker",
              ]}
              imgs={["sshp.png"]}
            />
          </li>

          <li className="mb-12">
            <ProjectCard
              title="AI-Powered Telegram Job Bot"
              description="Telegram based recruitment platform for connecting employers with job seekers, leveraging AI to streamline recruitment workflows through intelligent job description generation, resume creation, and personalized cover letter writing."
              url="https://github.com/miketorreno/talent-hive"
              techStack={[
                "Python",
                "python-telegram-bot",
                "PostgreSQL",
                "Redis",
                "Pytest",
              ]}
              imgs={["talent-hive.png"]}
            />
          </li>

          <li className="mb-12">
            <ProjectCard
              title="Handyman Services API"
              description="An API powering a local handyman services marketplace, enabling users to discover and rank handymen through efficient search and filtering, backed by optimized database queries and comprehensive automated testing."
              url="https://github.com/miketorreno/handyman-api"
              techStack={["Laravel", "PHP", "MySQL", "PHPUnit"]}
              imgs={["handyman-api.png"]}
            />
          </li>

          <li className="mb-12">
            <ProjectCard
              title="Habit Tracker"
              description="Personal productivity app that combines habit tracking, task management, and time tracking with customizable calendars and visual activity analytics to help users monitor consistency, measure progress, and build lasting habits. Featuring an activity grid similar to GitHub's contribution tracker, it offers a clear view of your achievements over time."
              url="https://github.com/miketorreno/streaks"
              techStack={[
                "Next.js",
                "Convex",
                "Clerk",
                "TypeScript",
                "Shadcn/ui",
                "Tailwind CSS",
              ]}
              imgs={["streaks.png"]}
            />
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Projects;
