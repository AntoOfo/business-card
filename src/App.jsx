import Info from "./components/Info"
import About from "./components/About"
import Interests from "./components/Interests"
import Footer from "./components/Footer"

export default function App() {
  return (
    <>
    <div className="info-card">
      <div style={{padding: "20px"}}>  {/* separate padding from footer */}
      <Info />
      <About />
      <Interests />
      </div>
      <Footer />
    </div>
    </>
  )
}
