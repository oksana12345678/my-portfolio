import {
  HeroBG,
  Icons,
  IconsGit,
  IconsTelegram,
  MainHeroContainer,
  SocialMedia,
  SocialMediaList,
  Title,
} from "./Hero.styled";

const Hero = () => {
  return (
    <>
      <HeroBG>
        <MainHeroContainer>
          <Title>
            Hello. I’m Front-end developer <span>Oksana Tanashchuk</span>
          </Title>
          <SocialMedia>
            <SocialMediaList>
              <li>
                <a
                  href="https://www.linkedin.com/in/oksana-tanashchuk/"
                  target="blank"
                >
                  <Icons />
                </a>
              </li>
              <li>
                <a href="https://github.com/oksana12345678" target="blank">
                  <IconsGit />
                </a>
              </li>
              <li>
                <a href="https://t.me/oksana_tanashchuk" target="blank">
                  <IconsTelegram />
                </a>
              </li>
            </SocialMediaList>
          </SocialMedia>
        </MainHeroContainer>
      </HeroBG>
    </>
  );
};
export default Hero;
