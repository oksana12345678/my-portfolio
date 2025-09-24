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
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation("hero");

  return (
    <>
      <HeroBG>
        <MainHeroContainer>
          <Title>
            {t("title")}
            <span>{t("subtitle")}</span>
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
