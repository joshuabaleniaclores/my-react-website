export function Footer() {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Branding */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                <span className="text-sm font-bold">JC</span>
              </div>
              <span className="text-xl font-bold">JOSHUA CLORES</span>
            </div>
            <p className="text-sm text-primary-foreground/80">Software Engineer • Web Development</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <a href="#about" className="hover:underline hover:text-primary-foreground transition-colors">About</a>
              </li>
              <li>
                <a href="#Project" className="hover:underline hover:text-primary-foreground transition-colors">Project</a>
              </li>
              <li>
                <a href="#contact" className="hover:underline hover:text-primary-foreground transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Contact Info + Socials */}
          <div>
            <h3 className="font-semibold mb-4">Get in Touch</h3>
            <div className="space-y-2 text-sm text-primary-foreground/80">
              <p>Email: <a href="mailto:joshuabaleniaclores@gmail.com" className="hover:underline">joshuabaleniaclores@gmail.com</a></p>
              <p>Mobile: <a href="tel:+639566348951" className="hover:underline">(+63) 956 634 8951</a></p>
              <div className="flex space-x-4 mt-4">
                {/* GitHub */}
                <a href="https://github.com/joshuabaleniaclores" target="_blank" rel="noopener noreferrer">
                  <svg className="h-5 w-5 hover:text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 .5C5.37.5 0 5.87 0 12.48c0 5.28 3.438 9.75 8.207 11.327.6.113.793-.263.793-.582 0-.288-.01-1.05-.016-2.06-3.338.738-4.042-1.61-4.042-1.61-.546-1.39-1.333-1.76-1.333-1.76-1.09-.75.082-.735.082-.735 1.205.085 1.84 1.26 1.84 1.26 1.07 1.85 2.807 1.315 3.492 1.005.108-.788.418-1.315.762-1.617-2.665-.307-5.466-1.36-5.466-6.053 0-1.338.467-2.432 1.235-3.292-.124-.307-.536-1.547.117-3.224 0 0 1.008-.327 3.3 1.255a11.36 11.36 0 013.006-.41c1.02.004 2.047.14 3.006.41 2.292-1.582 3.297-1.255 3.297-1.255.655 1.677.243 2.917.12 3.224.77.86 1.234 1.954 1.234 3.292 0 4.705-2.804 5.743-5.476 6.046.43.374.823 1.107.823 2.23 0 1.61-.015 2.91-.015 3.307 0 .322.19.699.8.58C20.565 22.23 24 17.76 24 12.48 24 5.87 18.627.5 12 .5z" />
                  </svg>
                </a>
                {/* LinkedIn */}
                <a href="https://linkedin.com/in/joshua-clores" target="_blank" rel="noopener noreferrer">
                  <svg className="h-5 w-5 hover:text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.98 3.5C4.98 5 3.9 6.1 2.5 6.1c-1.4 0-2.48-1.1-2.48-2.6 0-1.5 1.1-2.6 2.5-2.6 1.39 0 2.46 1.1 2.46 2.6zM.54 24V7.98h3.92V24H.54zm7.46-16.02h3.76v2.2h.05c.52-.98 1.8-2.02 3.71-2.02 3.97 0 4.7 2.6 4.7 5.97V24h-3.92v-7.9c0-1.88-.03-4.3-2.62-4.3-2.62 0-3.02 2.05-3.02 4.16V24H8V7.98z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; 2025 Joshua Clores. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
