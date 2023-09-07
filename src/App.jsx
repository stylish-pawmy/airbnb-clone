import { default as NavBar } from "./components/NavBar.jsx";
import { default as ImageGrid } from "./components/ImageGrid.jsx"
import { default as Experiences } from "./components/Experiences.jsx";

import './App.css'

function App() {
  return (
    <>
      <NavBar />
      <main>
        <ImageGrid />
        <Experiences />
      </main>
    </>
  )
}

export default App
