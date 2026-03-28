import { Benefits } from "./components/Benefits";
import { CategoryShowcase } from "./components/CategoryShowcase";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Philosophy } from "./components/Philosophy";

function App() {

  return (
    <>
      <Hero></Hero>
      <Philosophy></Philosophy>
      <CategoryShowcase></CategoryShowcase>
      <Benefits></Benefits>
      <CTA></CTA>
      <Footer></Footer>
    </>
  )
}

export default App
