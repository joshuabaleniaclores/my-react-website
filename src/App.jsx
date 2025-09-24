import './styles/App.css'
import { NavBar } from './components/NavBar.jsx'
import { About } from './components/About.jsx'
import { Footer } from './components/Footer.jsx'
function App() {

  return (
    <>
      <NavBar />
      <main>
        <About />
      </main>
      <Footer />
    </>
  )
}

export default App
