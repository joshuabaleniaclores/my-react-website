import { lazy, Suspense } from "react";
import "./styles/App.css";
import { NavBar } from "./components/NavBar.jsx";
import { About } from "./components/About.jsx";

const SkillsSection = lazy(() => import("./components/SkillsSection.jsx"));
const Footer = lazy(() => import("./components/Footer.jsx"));

function App() {
  return (
    <>
      <NavBar />
      <main>
        <About />
        <Suspense fallback={null}>
          <SkillsSection />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
