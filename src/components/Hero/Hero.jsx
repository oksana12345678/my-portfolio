import SocialLinks from "../../shared/components/SocialLinks/SocialLinks";
import { HeroBG, MainHeroContainer, Title } from "./Hero.styled";
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
          <SocialLinks />
        </MainHeroContainer>
      </HeroBG>
    </>
  );
};
export default Hero;
