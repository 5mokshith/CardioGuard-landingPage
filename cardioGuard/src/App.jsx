import NavBar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import CTA from "./components/CTA.jsx";
const App = () => {
  return (
    <>
      <NavBar></NavBar>
      <Hero></Hero>
      <CTA upperTagLine="Advanced Capabilities" title="comprehensive heart health monitoring" tagline="CardioGuard combines cutting-edge technology with medical expertise to provide you with complete cardiac care."></CTA>
    </>
  );
}

export default {app}