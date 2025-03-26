import NavBar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import CTA from "./components/CTA.jsx";
import UserFlow from "./components/UserFlow.jsx";
import Card from "./components/Card.jsx";
import FAQ from "./components/FAQ.jsx";
import Footer from "./components/Footer.jsx";
const App = () => {
  return (
    <>
      <NavBar></NavBar>
      <Hero></Hero>
      <CTA upperTagLine="Advanced Capabilities" title="comprehensive heart health monitoring" tagline="CardioGuard combines cutting-edge technology with medical expertise to provide you with complete cardiac care."></CTA>
      <UserFlow></UserFlow>
      <FAQ/>
      <Card/>
      <Footer/>
    </>
  );
}

export default App