import Analytics from "./components/Analitys"
import CardsSections from "./components/CardsSection"
import Footer from "./components/Footer"
import Main from "./components/Main"
import Navbar from "./components/Navbar"
import Newsletter from "./components/Newsletter"

function App() {
  

  return (
    <div className="bg-black h-full] ">
      <Navbar/>
      <Main/>
      <Analytics/>
      <Newsletter/>
      <CardsSections/>
      <Footer/>
    </div>
  )
}

export default App
