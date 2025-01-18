import { useEffect, useRef, useState } from "react";
import StackIcon from "tech-stack-icons";
import {
  IconWrapper,
  SliderContainer,
  SliderItem,
  SliderWrapper,
  ControlButton,
} from "./Skills.styled";
import { FaTelegramPlane } from "react-icons/fa";
import { SiExpress, SiStyledcomponents } from "react-icons/si";
import { AiFillApi } from "react-icons/ai";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";

const Skills = () => {
  const containerRef = useRef(null);
  const [scrollAmount, setScrollAmount] = useState(0);
  const [isScrolling, setIsScrolling] = useState(true);

  const SKILLS = [
    { name: "HTML", icon: <StackIcon name="html5" /> },
    { name: "CSS", icon: <StackIcon name="css3" /> },
    { name: "SCSS", icon: <StackIcon name="sass" /> },
    { name: "JavaScript", icon: <StackIcon name="js" /> },
    { name: "React", icon: <StackIcon name="reactjs" /> },
    { name: "Node.js", icon: <StackIcon name="nodejs" /> },
    { name: "React Router", icon: <StackIcon name="reactrouter" /> },
    { name: "Git", icon: <StackIcon name="git" /> },
    {
      name: "Express",
      icon: <SiExpress style={{ width: 100, height: 100 }} />,
    },
    { name: "Redux", icon: <StackIcon name="redux" /> },
    {
      name: "Styled Components",
      icon: <SiStyledcomponents style={{ width: 100, height: 100 }} />,
    },
    { name: "TypeScript", icon: <StackIcon name="typescript" /> },
    { name: "Swagger", icon: <StackIcon name="swagger" /> },
    { name: "MongoDB", icon: <StackIcon name="mongodb" /> },
    { name: "Mongoose", icon: <StackIcon name="mongoose" /> },
    {
      name: "RESTful API",
      icon: <AiFillApi style={{ width: 100, height: 100 }} />,
    },
    { name: "Tailwind", icon: <StackIcon name="tailwindcss" /> },
    { name: "Next.js", icon: <StackIcon name="nextjs2" /> },
    {
      name: "Telegram Applications",
      icon: (
        <FaTelegramPlane style={{ width: 100, height: 100 }} color="white" />
      ),
    },
    { name: "Vite", icon: <StackIcon name="vitejs" /> },
  ];

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
