import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import ProjectsCard from "../ProjectsCard/ProjectsCard";
import { EffectCoverflow, Navigation } from "swiper/modules";
import { useRef } from "react";
import {
  ButtonContainer,
  ButtonNextIcon,
  ButtonPortfolio,
  ButtonPrevIcon,
  SwiperItem,
} from "./ProjectsList.styled";
import {
  backendPB,
  cookingStorm,
  crm,
  farm,
  inHArmony,
  ItAcademy,
  movieFinder,
  my_portfolio,
  phoneBook,
  photo_graph,
  portfolio,
  RPG,
  travel,
  water,
  yachtJet,
} from "../../../assets/portfolio";

const ProjectsList = ({ t }) => {
  const swiperRefTwo = useRef();

  const projectKeys = [
    "inHarmony",
    "photo_graph",
    "RPG",
    "yachtJet",
    "portfolio",
    "movieFinder",
    "water",
    "travel",
    "phoneBook",
    "itAcademy",
    "farm",
    "backendPB",
    "cookingStorm",
    "crm",
    "my_portfolio",
  ];
  const imageNames = [
    inHArmony,
    photo_graph,
    RPG,
    yachtJet,
    portfolio,
    movieFinder,
    water,
    travel,
    phoneBook,
    ItAcademy,
    farm,
    backendPB,
    cookingStorm,
    crm,
    my_portfolio,
  ];
  return (
    <div>
      <Swiper
        onSwiper={(swiper) => (swiperRefTwo.current = swiper)}
        modules={[EffectCoverflow, Navigation]}
        loop={true}
        slidesPerView={"auto"}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
      >
        {projectKeys.map((key, index) => {
          const project = t(key, { returnObjects: true });
          const image = imageNames[index];

          return (
            <SwiperSlide key={index}>
              <SwiperItem>
                <ProjectsCard project={project} image={image} t={t} />
              </SwiperItem>
            </SwiperSlide>
          );
        })}
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
