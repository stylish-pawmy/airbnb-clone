import { default as NavBar } from "./components/NavBar.jsx";
import { default as ImageGrid } from "./components/ImageGrid.jsx"
import './App.css'

function App() {
  return (
    <>
      <NavBar />
      <main>
        <ImageGrid />
      </main>
    </>
  )
}

export default App
