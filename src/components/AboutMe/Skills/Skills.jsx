import { useEffect, useRef } from "react";
// Імпортуйте StackIcon з бібліотеки
import StackIcon from "tech-stack-icons";
import {
  IconWrapper,
  SliderContainer,
  SliderItem,
  SliderWrapper,
} from "./Skills.styled";
import { FaTelegramPlane } from "react-icons/fa";
import { SiExpress, SiStyledcomponents } from "react-icons/si";
import { AiFillApi } from "react-icons/ai";

const Skills = () => {
  const containerRef = useRef(null);

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

    {
      name: "Telegram Applications",
      icon: (
        <FaTelegramPlane style={{ width: 100, height: 100 }} color="white" />
      ),
    },
    { name: "Vite", icon: <StackIcon name="vitejs" /> },
  ];

  // Подвоєний список навичок для нескінченного прокручування
  const duplicatedSkills = [...SKILLS, ...SKILLS];

  useEffect(() => {
    const wrapper = containerRef.current;
    let scrollAmount = 0;

    const scroll = () => {
      if (wrapper) {
        scrollAmount += 1;
        wrapper.style.transform = `translateX(-${scrollAmount}px)`;

        if (scrollAmount >= wrapper.scrollWidth / 2) {
          scrollAmount = 0;
          wrapper.style.transform = `translateX(0)`;
        }
      }
    };

    const interval = setInterval(scroll, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <SliderContainer>
      <SliderWrapper ref={containerRef}>
        {duplicatedSkills.map((skill, index) => (
          <SliderItem key={index}>
            <IconWrapper>{skill.icon}</IconWrapper>
            {skill.name}
          </SliderItem>
        ))}
      </SliderWrapper>
    </SliderContainer>
  );
};

export default Skills;
