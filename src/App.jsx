import { lazy, Suspense } from "react";
import { NavBar } from "./components/NavBar.jsx";
import { About } from "./components/About.jsx";
import { ErrorBoundary } from "./components/ErrorBoundary.jsx";

const SkillsSection = lazy(() => import("./components/SkillsSection.jsx"));
const Footer = lazy(() => import("./components/Footer.jsx"));

function App() {
  return (
    <>
      <NavBar />
      <main>
        <About />
        <ErrorBoundary>
          <Suspense fallback={null}>
            <SkillsSection />
          </Suspense>
        </ErrorBoundary>
      </main>
      <ErrorBoundary>
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </ErrorBoundary>
    </>
  );
}

export default App;
