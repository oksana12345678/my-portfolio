import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import ProjectsCard from "../ProjectsCard/ProjectsCard";
import { Navigation } from "swiper/modules";
import { useRef } from "react";
import {
  ButtonContainer,
  ButtonNextIcon,
  ButtonPortfolio,
  ButtonPrevIcon,
  SwiperItem,
} from "./ProjectsList.styled";
import { PROJECTS } from "../../../utils/constants";

const ProjectsList = () => {
  const swiperRefTwo = useRef(null);

  return (
    <div>
      <Swiper
        onSwiper={(swiper) => (swiperRefTwo.current = swiper)}
        modules={[Navigation]}
        loop={true}
        slidesPerView={1}
      >
        {PROJECTS.map((project, index) => (
          <SwiperSlide key={index}>
            <SwiperItem>
              <ProjectsCard project={project} />
            </SwiperItem>
          </SwiperSlide>
        ))}
      </Swiper>
      <ButtonContainer>
        <ButtonPortfolio onClick={() => swiperRefTwo.current?.slidePrev()}>
          <ButtonPrevIcon />
        </ButtonPortfolio>
        <ButtonPortfolio onClick={() => swiperRefTwo.current?.slideNext()}>
          <ButtonNextIcon />
        </ButtonPortfolio>
      </ButtonContainer>
    </div>
  );
};

export default ProjectsList;
