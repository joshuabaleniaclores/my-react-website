import './styles/App.css'
import { NavBar } from './components/NavBar.jsx'
import { About } from './components/About.jsx'
import { SkillsSection } from './components/SkillsSection.jsx'
import { Footer } from './components/Footer.jsx'
function App() {

  return (
    <>
      <NavBar />
      <main>
        <About />
        <SkillsSection />
      </main>
      <Footer />
    </>
  )
}

export default App
