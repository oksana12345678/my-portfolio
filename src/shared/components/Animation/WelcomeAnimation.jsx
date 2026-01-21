import { useEffect } from "react";
import {
  BackBlur,
  FifthCircle,
  FirstCircle,
  FourthCircle,
  LogoWrapper,
  SecondaryWrapper,
  SecondCircle,
  ThirdCircle,
  WelcomeAnimationStyled,
} from "./Animation.styled";

import logo from "/logo.png";

const WelcomeAnimation = ({ showAnimation }) => {
  useEffect(() => {
    if (showAnimation) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [showAnimation]);

  return (
    <WelcomeAnimationStyled $showAnimation={showAnimation}>
      <BackBlur />

      <SecondaryWrapper>
        <FirstCircle x={-300} y={-200} />
        <SecondCircle x={300} y={-150} />
        <ThirdCircle x={-200} y={250} />
        <FourthCircle x={250} y={200} />
        <FifthCircle x={-350} y={50}>
          <LogoWrapper>
            <img src={logo} />
          </LogoWrapper>
        </FifthCircle>
      </SecondaryWrapper>
    </WelcomeAnimationStyled>
  );
};

export default WelcomeAnimation;
