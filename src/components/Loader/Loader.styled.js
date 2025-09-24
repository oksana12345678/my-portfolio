// import styled, { keyframes } from "styled-components";

// // Пульсація логотипу
// const pulseLogo = keyframes`
//   0% { transform: scale(1); }
//   50% { transform: scale(1.1); }
//   100% { transform: scale(1); }
// `;

// const ripple = keyframes`
//   0% {
//     width: 0;
//     height: 0;
//     opacity: 0.5;
//   }

//   25%{
//     width: 100px;
//     height: 100px;
//     opacity: 0.6;
//   }
//   50% {
//     width: 200px;
//     height: 200px;
//     opacity: 0.3;
//   }
//   75%{
//     width: 300px;
//     height: 300px;
//     opacity: 0.2;
//   }
//   100% {
//     width: 400px;
//     height: 400px;
//     opacity: 0;
//   }
// `;

// export const LoaderWrapper = styled.div`
//   position: relative;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
//   overflow: hidden;
// `;

// export const Ripple = styled.div`
//   position: absolute;
//   border: 2px solid rgba(0, 0, 3, 0.4);
//   border-radius: 50%;
//   animation: ${ripple} 2s ease-out infinite;
// `;

// export const Ripple2 = styled(Ripple)`
//   animation-delay: 1.5s;
// `;

// export const Ripple3 = styled(Ripple)`
//   animation-delay: 1s;
// `;
// export const Ripple4 = styled(Ripple)`
//   animation-delay: 0.5s;
// `;

// export const Spinner = styled.img`
//   width: 120px;
//   height: 120px;
//   z-index: -2;
// `;

import styled, { keyframes } from "styled-components";

// Пульсація логотипу
const pulseLogo = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

// Хвиля піднімається знизу вверх
const waveUp = keyframes`
  0% { transform: translateY(100%); }
  50% { transform: translateY(90%); }
  100% { transform: translateY(100%); }
`;

export const LoaderWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
  background-color: var(--send);
`;

export const Spinner = styled.img`
  width: 120px;
  height: 120px;
  z-index: 2;
  animation: ${pulseLogo} 1.5s ease-in-out infinite;
`;

export const WaveOverlay = styled.div`
  position: absolute;
  bottom: 30%;
  left: 0;
  width: 200%;
  height: 200%;
  background: radial-gradient(
    circle at center,
    rgb(97, 159, 218, 0.1),
    transparent 50%
  );
  animation: ${waveUp} 4s ease-in-out infinite;
  z-index: 3;
  pointer-events: none;
  transform-origin: bottom center;
`;

export const WaveOverlayOne = styled.div`
  position: absolute;
  bottom: 80%;
  right: 300px;
  width: 200%;
  height: 200%;
  background: radial-gradient(
    circle at center,
    rgb(97, 159, 218, 0.3),
    transparent 50%
  );
  animation: ${waveUp} 3.5s ease-in-out infinite;
  z-index: 3;
  pointer-events: none;
  transform-origin: bottom center;
`;
export const WaveOverlayTwo = styled.div`
  position: absolute;
  bottom: 30%;
  right: 0;
  width: 200%;
  height: 200%;
  background: radial-gradient(
    circle at center,
    rgb(97, 159, 218, 0.3),
    transparent 50%
  );
  animation: ${waveUp} 5s ease-in-out infinite;
  z-index: 3;
  pointer-events: none;
  transform-origin: bottom center;
`;

export const WaveOverlayTree = styled.div`
  position: absolute;
  bottom: 8%;
  right: 300px;
  width: 240%;
  height: 200%;
  background: radial-gradient(
    circle at center,
    rgb(97, 159, 218, 0.6),
    transparent 50%
  );
  animation: ${waveUp} 6s ease-in-out infinite;
  z-index: 3;
  pointer-events: none;
  transform-origin: bottom center;
`;
export const WaveOverlayFour = styled.div`
  position: absolute;
  bottom: 30%;
  right: 0;
  width: 200%;
  height: 200%;
  background: radial-gradient(
    circle at center,
    rgb(97, 159, 218, 0.6),
    transparent 50%
  );
  animation: ${waveUp} 4.5s ease-in-out infinite;
  z-index: 3;
  pointer-events: none;
  transform-origin: bottom center;
`;

export const WaveOverlayFive = styled.div`
  position: absolute;
  bottom: 34%;
  left: 0;
  width: 200%;
  height: 200%;
  background: radial-gradient(
    circle at center,
    rgb(97, 159, 218, 0.5),
    transparent 50%
  );
  animation: ${waveUp} 2s ease-in-out infinite;
  z-index: 3;
  pointer-events: none;
  transform-origin: bottom center;
`;
