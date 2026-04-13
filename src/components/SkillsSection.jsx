import { useInView } from "../hooks/useInView";
import { skills } from "../data/skills";

export function SkillsSection() {
  const [ref, isInView] = useInView(0.1);

  return (
    <section ref={ref} id="skills" className="py-12 md:py-16 lg:py-20 scroll-mt-16 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl">
          <div
            className={`mb-8 md:mb-10 transition-all duration-600 ease-out ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <h2 className="text-3xl font-bold tracking-tight text-primary">
              Things I work with
            </h2>
            <p className="mt-2 text-muted-foreground">My current tech stack.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className={`flex items-center gap-3 p-3 sm:p-3.5 bg-background rounded-lg border border-border hover:border-accent/50 transition-colors ${
                  isInView ? "animate-fade-up" : "opacity-0"
                }`}
                style={{ animationDelay: isInView ? `${index * 55}ms` : undefined }}
              >
                {skill.icon}
                <span className="text-sm font-medium text-foreground min-w-0 truncate">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
