export function About() {
  return (
    <section
      id="about"
      className="py-10 bg-gradient-to-br from-background via-muted/30 to-accent/5 scroll-mt-12"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <img
            src="/public/avatar.png"
            alt="avatar"
            width={200}
            height={200}
            className="mx-auto rounded-full border-4 border-accent"
          />

          <p className="mt-6 text-xl md:text-2xl font-medium text-accent">
            Software Engineer • Web Development
          </p>

          <p className="mt-6 text-lg leading-relaxed text-muted-foreground max-w-3xl mx-auto text-pretty">
            Hey! I&apos;m Joshua. I&apos;m a software engineer and web developer
            passionate about building modern, responsive websites and
            applications using tools like Next.js, React and TailwindCSS.
            I&apos;m passionate about writing clean code, solving problems and
            exploring new technologies to turn ideas into reality.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 text-lg rounded-md border border-input shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 inline-flex items-center justify-center font-medium"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
