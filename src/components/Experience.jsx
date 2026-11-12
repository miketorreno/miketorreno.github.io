import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <div
      id="experience"
      className="min-h-screen w-full mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="font-bold uppercase tracking-widest text-sky-400 lg:sr-only">
          Experience
        </h2>
      </div>

      <div className="">
        <ol className="group/list">
          <li className="mb-12">
            <ExperienceCard
              role="Backend Developer and DevOps"
              company="Today Technologies, Addis Ababa"
              startDate="Dec 2024"
              endDate="Present"
              description="At Today Technologies, I work across backend development and DevOps, owning application delivery from development to deployment and monitoring. Built and optimized GitHub Actions CI/CD pipelines using Docker and container-layer caching, reducing build times by approximately 70% (34 to 10 minutes). Led the end-to-end development and deployment of an Electronic Health Record (EHR) platform, implementing containerized deployments and near-zero downtime release workflows. Established observability using Prometheus, Grafana, Loki, Tempo, and OpenTelemetry, with RED/USE dashboards for application and infrastructure monitoring. Also automated infrastructure provisioning and server configuration using Terraform and Ansible, while developing and deploying an AI-powered Telegram job board with database architecture, caching, and production monitoring."
              techStack={[
                "Docker",
                "GitHub Actions",
                "Nginx",
                "AWS",
                "Terraform",
                "Ansible",
                "Python",
                "TypeScript",
                "Node.js",
                "Turborepo",
                "Next.js",
                "Shadcn/ui",
                "PostgreSQL",
              ]}
            />
          </li>

          <li className="mb-12">
            <ExperienceCard
              role="Senior Full-Stack Developer"
              company="KanaBet Casino, Addis Ababa"
              startDate="Sep 2023"
              endDate="Dec 2024"
              description="Developed and deployed full-stack applications, focusing on application functionality, automated testing, and reliable software delivery. Built a Telegram support and ticketing platform using TypeScript, Node.js, and SQLite, automating support workflows and reducing manual handling of issue reports. Established GitHub Actions CI/CD pipelines and Docker based deployment workflows, while developing comprehensive test suites with Vitest and Playwright that increased test coverage from 47% to 83%."
              techStack={[
                "TypeScript",
                "React",
                "Next.js",
                "Node.js",
                "Express",
                "PostgreSQL",
                "SQLite",
                "Vitest",
                "Playwright",
                "grammY",
                "Docker",
                "GitHub Actions",
                "Nginx",
                "Batch",
              ]}
            />
          </li>

          <li className="mb-12">
            <ExperienceCard
              role="Instructor"
              company="iCog-ACC, Addis Ababa"
              startDate="Jun 2024"
              endDate="Aug 2024"
              description="Taught cohorts of over 100 students in a range of modern technology concepts, including programming with Python and Scratch, web development, and AI/ML. To ensure learning moved beyond theory, I designed and led a curriculum of hands-on mini projects such as building games, developing simple blogs, and creating image classifiers with machine learning which allowed students to reinforce their knowledge through direct, practical application."
              techStack={[
                "AI",
                "Machine Learning",
                "Python",
                "JavaScript",
                "HTML",
                "CSS",
                "Scratch",
              ]}
            />
          </li>

          <li className="mb-12">
            <ExperienceCard
              role="Manager, Lead Engineer"
              company="BetMe Virtual Betting, Addis Ababa"
              startDate="Aug 2022"
              endDate="Sep 2023"
              description="Led cross-functional teams across software development, finance, marketing, field operations, and customer support, coordinating product development and operational initiatives. Alongside team leadership, developed internal support and customer self-service tools using TypeScript, React, and Node.js, incorporating automation workflows that enabled users to resolve common system issues independently."
              techStack={[
                "Docker",
                "TypeScript",
                "React",
                "Tailwind CSS",
                "Node.js",
                "Express",
                "PostgreSQL",
                "grammY",
                "Batch",
              ]}
            />
          </li>

          <li className="mb-12">
            <ExperienceCard
              role="Full-Stack Developer"
              company="Metropolitan Tabernacle, Bishoftu"
              startDate="Feb 2022"
              endDate="Aug 2022"
              description="Developed and maintained an online donation platform using Django and MySQL, implementing application functionality to support donor and beneficiary workflows. Also designed and developed the organization's official website, strengthening its digital presence and online engagement."
              techStack={[
                "Python",
                "Django",
                "MySQL",
                "JavaScript",
                "HTML",
                "CSS",
              ]}
            />
          </li>

          <li className="mb-12">
            <ExperienceCard
              role="Freelancer"
              company=""
              startDate="Sept 2021"
              endDate="Mar 2023"
              description="Delivered software solutions across backend development, full-stack applications, database optimization, and deployment. Migrated legacy PHP applications to Docker based infrastructure to improve deployment consistency and maintainability. Optimized SQL queries and database indexing, improving query performance by up to 40%. Developed an e-learning platform using React, Node.js, Express, and MongoDB to support course delivery and student progress tracking, and built a RESTful API using Laravel and MySQL for searching and ranking local handyman service providers."
              techStack={[
                "React",
                "Node.js",
                "Express.js",
                "MongoDB",
                "Laravel",
                "MySQL",
                "PostgreSQL",
                "Docker",
                "Redis",
                "python-telegram-bot",
                "grammY",
              ]}
            />
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Experience;
