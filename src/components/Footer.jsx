import { useInView } from "../hooks/useInView";

export function Footer() {
  const [ref, isInView] = useInView(0.2);

  return (
    <footer ref={ref} id="contact" className="border-t border-border bg-background">
      <div className="container mx-auto px-4 md:px-6 py-10 md:py-12">
        <div
          className={`flex flex-col md:flex-row md:items-start justify-between gap-8 md:gap-10 transition-all duration-700 ease-out ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          {/* Branding */}
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-accent text-white text-sm font-bold">
                JC
              </div>
              <span className="font-semibold text-primary">Joshua Clores</span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Building things for the web.
            </p>
          </div>

          {/* Contact */}
          <div className="text-sm text-muted-foreground space-y-1.5">
            <a
              href="mailto:joshuabaleniaclores@gmail.com"
              className="block hover:text-foreground transition-colors break-all sm:break-normal"
            >
              joshuabaleniaclores@gmail.com
            </a>
            <p>(+63) 956 634 8951</p>
            <div className="flex gap-4 pt-3">
              <a
                href="https://github.com/joshuabaleniaclores"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-foreground transition-colors"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 .5C5.37.5 0 5.87 0 12.48c0 5.28 3.438 9.75 8.207 11.327.6.113.793-.263.793-.582 0-.288-.01-1.05-.016-2.06-3.338.738-4.042-1.61-4.042-1.61-.546-1.39-1.333-1.76-1.333-1.76-1.09-.75.082-.735.082-.735 1.205.085 1.84 1.26 1.84 1.26 1.07 1.85 2.807 1.315 3.492 1.005.108-.788.418-1.315.762-1.617-2.665-.307-5.466-1.36-5.466-6.053 0-1.338.467-2.432 1.235-3.292-.124-.307-.536-1.547.117-3.224 0 0 1.008-.327 3.3 1.255a11.36 11.36 0 013.006-.41c1.02.004 2.047.14 3.006.41 2.292-1.582 3.297-1.255 3.297-1.255.655 1.677.243 2.917.12 3.224.77.86 1.234 1.954 1.234 3.292 0 4.705-2.804 5.743-5.476 6.046.43.374.823 1.107.823 2.23 0 1.61-.015 2.91-.015 3.307 0 .322.19.699.8.58C20.565 22.23 24 17.76 24 12.48 24 5.87 18.627.5 12 .5z" />
                </svg>
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/joshua-clores"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-foreground transition-colors"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5C4.98 5 3.9 6.1 2.5 6.1c-1.4 0-2.48-1.1-2.48-2.6 0-1.5 1.1-2.6 2.5-2.6 1.39 0 2.46 1.1 2.46 2.6zM.54 24V7.98h3.92V24H.54zm7.46-16.02h3.76v2.2h.05c.52-.98 1.8-2.02 3.71-2.02 3.97 0 4.7 2.6 4.7 5.97V24h-3.92v-7.9c0-1.88-.03-4.3-2.62-4.3-2.62 0-3.02 2.05-3.02 4.16V24H8V7.98z" />
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div
          className={`border-t border-border mt-8 md:mt-10 pt-6 text-xs text-muted-foreground/60 transition-all duration-700 delay-200 ease-out ${
            isInView ? "opacity-100" : "opacity-0"
          }`}
        >
          © 2025 Joshua Clores
        </div>
      </div>
    </footer>
  );
}
