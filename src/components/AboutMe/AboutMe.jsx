import meSrc from "../../assets/front.png";
import {
  AboutMeSection,
  DescAboutMe,
  DescContainerAboutMe,
  Image,
  MainContainerAboutMe,
} from "./AboutMe.styled";
import Skills from "./Skills/Skills";

const AboutMe = () => {
  return (
    <>
      <AboutMeSection id="about-me">
        <MainContainerAboutMe>
          <DescContainerAboutMe>
            <DescAboutMe>
              Creating modern, responsive interfaces that bring your ideas to
              life and enhance user engagement. I develop fast, functional
              solutions focused on usability and innovation.
            </DescAboutMe>
          </DescContainerAboutMe>
          <DescContainerAboutMe>
            <Image src={meSrc} alt="Frontend Developer" />
          </DescContainerAboutMe>
        </MainContainerAboutMe>
        <Skills />
      </AboutMeSection>
    </>
  );
};

export default AboutMe;
