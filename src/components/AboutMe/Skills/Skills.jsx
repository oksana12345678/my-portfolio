import { useEffect, useRef, useState } from "react";
import {
  IconWrapper,
  SliderContainer,
  SliderItem,
  SliderWrapper,
  ControlButton,
} from "./Skills.styled";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import { SKILLS } from "../../../shared/constants";

const Skills = () => {
  const containerRef = useRef(null);
  const [scrollAmount, setScrollAmount] = useState(0);
  const [isScrolling, setIsScrolling] = useState(true);

  const duplicatedSkills = [...SKILLS, ...SKILLS];

  useEffect(() => {
    if (!isScrolling) return;

    const wrapper = containerRef.current;

    const scroll = () => {
      setScrollAmount((prev) => {
        const nextAmount = prev + 1;
        if (nextAmount >= wrapper.scrollWidth / 2) {
          return 0;
        }
        return nextAmount;
      });
    };

    const interval = setInterval(scroll, 20);
    return () => clearInterval(interval);
  }, [isScrolling]);

  const handlePrev = () => {
    setIsScrolling(false);
    setScrollAmount((prev) => Math.max(prev - 150, 0));
  };

  const handleNext = () => {
    setIsScrolling(false);
    setScrollAmount((prev) => prev + 150);
  };

  useEffect(() => {
    const wrapper = containerRef.current;
    if (wrapper) {
      wrapper.style.transform = `translateX(-${scrollAmount}px)`;
    }
  }, [scrollAmount]);

  return (
    <SliderContainer>
      <ControlButton onClick={handlePrev}>
        <GrFormPreviousLink />
      </ControlButton>
      <SliderWrapper ref={containerRef}>
        {duplicatedSkills.map((skill, index) => (
          <SliderItem key={index}>
            <IconWrapper>{skill.icon}</IconWrapper>
            {skill.name}
          </SliderItem>
        ))}
      </SliderWrapper>
      <ControlButton onClick={handleNext}>
        <GrFormNextLink />
      </ControlButton>
    </SliderContainer>
  );
};

export default Skills;
