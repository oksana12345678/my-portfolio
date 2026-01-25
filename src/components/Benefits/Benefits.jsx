import { useTranslation } from "react-i18next";
import BenefitsCarousel from "./components/BenefitsCarousel";
import { ScrollControls } from "@react-three/drei";
import Rig from "./components/Rig";
import { StyledCanvas } from "./Benefits.styled";
import { SectionStyled, TitleProjects } from "../Projects/Projects.styled";

const Benefits = () => {
  const { t } = useTranslation("benefits");

  return (
    <SectionStyled>
      <TitleProjects>{t("title")}</TitleProjects>
      <StyledCanvas camera={{ position: [0, 0, 100], fov: 15 }}>
        {/* eslint-disable-next-line react/no-unknown-property */}
        <fog attach="fog" args={["#294259", 8.5, 12]} />
        <ScrollControls pages={4}>
          <Rig rotation={[0, 0, 0.15]}>
            <BenefitsCarousel t={t} />
          </Rig>
        </ScrollControls>
      </StyledCanvas>
    </SectionStyled>
  );
};

export default Benefits;
