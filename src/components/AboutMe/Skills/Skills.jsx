import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import {
  ArrowIconNext,
  ButtonNext,
  ContainerSliderItem,
  SwiperSlideItem,
  SwiperWrapper,
} from "./Skills.styled";
import { useEffect, useRef, useState } from "react";

const Skills = () => {
  const swiperRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(0);

  const SKILLS = [
    "HTML/CSS",
    "JavaScript",
    "React",
    "Node.js",
    "React Router",
    "Git",
    "Express",
    "Redux",
    "Redux Toolkit",
    "TypeScript",
    "Swagger",
    "MongoDB",
    "Mongoose",
    "RESTful API",
    "Tailwind",
    "RTK Query",
    "Styled component",
    "Telegram applications",
    "Vite",
    "Polish",
    "English",
  ];

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.on("realIndexChange", () => {
        setActiveIndex(swiperRef.current.realIndex);
      });
    }
  }, []);

  return (
    <SwiperWrapper>
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        modules={[Navigation]}
        loop={true}
        breakpoints={{
          320: {
            slidesPerView: 2,
          },
          640: { slidesPerView: 3 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1440: { slidesPerView: 6 },
        }}
      >
        {SKILLS.map((skill, index) => (
          <SwiperSlide key={index}>
            <ContainerSliderItem $isHighlighted={index === activeIndex}>
              <SwiperSlideItem>{skill}</SwiperSlideItem>
            </ContainerSliderItem>
          </SwiperSlide>
        ))}
      </Swiper>
      <ButtonNext onClick={() => swiperRef.current?.slideNext()}>
        <ArrowIconNext />
      </ButtonNext>
    </SwiperWrapper>
  );
};

export default Skills;
