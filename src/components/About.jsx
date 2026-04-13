import { useState } from "react";
import avatar from "../assets/avatar.png";

export function About() {
  const [avatarClickCount, setAvatarClickCount] = useState(0);

  return (
    <section
      id="about"
      className="py-14 sm:py-20 md:py-28 scroll-mt-16"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-5xl flex flex-col-reverse md:flex-row items-center gap-8 md:gap-16">
          <div className="flex-1 text-center md:text-left">
            <p className="text-accent text-xs font-semibold tracking-widest uppercase mb-3 animate-fade-up">
              Hey, I'm
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary leading-[1.1] tracking-tight animate-fade-up [animation-delay:80ms]">
              Joshua<br />Clores.
            </h1>
            <p className="mt-4 text-lg font-medium text-muted-foreground animate-fade-up [animation-delay:160ms]">
              Software Engineer · React &amp; Next.js
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground max-w-lg mx-auto md:mx-0 animate-fade-up [animation-delay:240ms]">
              I&apos;m passionate about building modern, responsive web apps with clean code — using tools like Next.js, React, and Tailwind. I enjoy solving problems and turning ideas into reality.
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 justify-center md:justify-start animate-fade-up [animation-delay:320ms]">
              <a
                href="#contact"
                className="bg-accent hover:bg-accent/90 active:scale-[0.97] text-accent-foreground px-6 py-2.5 rounded-md font-medium text-sm transition-[background-color,transform] inline-flex items-center justify-center"
              >
                Get in touch
              </a>
              <a
                href="#skills"
                className="text-sm font-medium text-muted-foreground hover:text-foreground active:scale-[0.97] px-6 py-2.5 rounded-md border border-border hover:border-foreground/20 transition-[color,border-color,transform] inline-flex items-center justify-center"
              >
                View skills
              </a>
            </div>
          </div>

          <div className="relative flex-shrink-0 animate-fade-up [animation-delay:100ms]">
            {avatarClickCount >= 5 && (
              <p className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-medium text-accent whitespace-nowrap">
                I LOVE YOU ABBY ♡
              </p>
            )}
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 animate-float">
              <div className="absolute inset-0 rounded-full bg-accent/15 blur-3xl scale-110" />
              <img
                src={avatar}
                alt="Joshua Clores"
                width={224}
                height={224}
                className="relative w-full h-full rounded-full object-cover cursor-pointer border-2 border-accent/30 hover:border-accent/60 transition-colors"
                onClick={() => setAvatarClickCount((prev) => prev + 1)}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
