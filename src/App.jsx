import "./App.css";
import "./index.css";

import NavigationBar from "./components/navigation-bar";
import Home from "./components/home";
import About from "./components/about";

function App() {
  return (
    <>
      <NavigationBar />
      <Home />
      <About />
    </>
  );
}

export default App;
