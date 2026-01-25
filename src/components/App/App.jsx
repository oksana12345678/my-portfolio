import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Layout from "../../shared/components/Layout/Layout";
import AboutMe from "../AboutMe/AboutMe";
import Hero from "../Hero/Hero";
import Projects from "../Projects/Projects";
import Benefits from "../Benefits/Benefits";
// import WelcomeAnimation from "../Animation/WelcomeAnimation";
// import { useEffect, useState } from "react";

const App = () => {
  // const [showAnimation, setShowAnimation] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setShowAnimation(false);
  //   }, 8000);

  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <>
      <ToastContainer />
      {/* <WelcomeAnimation showAnimation={showAnimation} /> */}
      <Layout>
        <Hero />
        <AboutMe />
        <Projects />
        <Benefits />
      </Layout>
    </>
  );
};

export default App;
