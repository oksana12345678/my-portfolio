import { ToastContainer } from "react-toastify";
import AboutMe from "../AboutMe/AboutMe";
import Hero from "../Hero/Hero";
import Layout from "../Layout/Layout";
import Projects from "../Projects/Projects";
import "react-toastify/dist/ReactToastify.css";
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
      </Layout>
    </>
  );
};

export default App;
