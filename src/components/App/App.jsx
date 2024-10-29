import AboutMe from "../AboutMe/AboutMe";
import Hero from "../Hero/Hero";
import Layout from "../Layout/Layout";
import Projects from "../Projects/Projects";

const App = () => {
  return (
    <>
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
