// import {
//   LoaderWrapper,
//   Spinner,
//   Ripple,
//   Ripple2,
//   Ripple3,
//   Ripple4,
// } from "./Loader.styled";
// import logo from "../../../public/logo.png";

// const Loader = () => (
//   <LoaderWrapper>
//     <Ripple />
//     <Ripple2 />
//     <Ripple3 />
//     <Ripple4 />

//     <Spinner src={logo} alt="Loading..." />
//   </LoaderWrapper>
// );

// export default Loader;

import {
  LoaderWrapper,
  Spinner,
  WaveOverlay,
  WaveOverlayFive,
  WaveOverlayFour,
  WaveOverlayOne,
  WaveOverlayTree,
  WaveOverlayTwo,
} from "./Loader.styled";
import logo from "../../../../public/logo.png";

const Loader = () => (
  <LoaderWrapper>
    <WaveOverlay />
    <WaveOverlayOne />
    <WaveOverlayTwo />
    <WaveOverlay />
    <WaveOverlayTree />
    <WaveOverlayFour />
    <WaveOverlayFive />

    <Spinner src={logo} alt="Loading..." />
  </LoaderWrapper>
);

export default Loader;
