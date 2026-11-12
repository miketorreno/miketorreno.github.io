const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen w-full mb-16s scroll-mt-16 md:mb-24s lg:mb-36s lg:scroll-mt-24"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="font-bold uppercase tracking-widest text-sky-400 lg:sr-only">
          About
        </h2>
      </div>

      <div className="space-y-6">
        <p>
          DevOps Engineer with 5 years of professional software engineering
          experience, specializing in Linux, networking, nginx, container
          platforms (Docker, ECS, Kubernetes, EKS), CI/CD automation (GitHub
          Actions, GitLab CI), infrastructure-as-code (Terraform, Ansible),
          observability stack (Prometheus, Grafana, Loki, Tempo, OpenTelemetry),
          and cloud ecosystems (AWS, DigitalOcean, Vercel) backed by Python and
          Bash scripting.
        </p>
        <p>
          Well-versed in container lifecycle automation, performance tuning,
          network configuration, secrets management, and environment
          consistency, using repeatable IaC workflows, and automated release
          strategies.
        </p>
        <p>
          Strong software engineering expertise designing and shipping
          end-to-end applications across productivity, healthcare, bots, and
          developer tools, comfortable in feature ownership, design system
          implementation, API development, performance optimization, databases,
          testing, and deployment.
        </p>
      </div>
    </section>
  );
};

export default About;
