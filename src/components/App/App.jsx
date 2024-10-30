import { ToastContainer } from "react-toastify";
import AboutMe from "../AboutMe/AboutMe";
import Hero from "../Hero/Hero";
import Layout from "../Layout/Layout";
import Projects from "../Projects/Projects";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <ToastContainer />
      <div>
        <Layout>
          <Hero />
          <AboutMe />
          <Projects />
        </Layout>
      </div>
    </>
  );
};

export default App;
