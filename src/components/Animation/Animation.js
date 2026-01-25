import { keyframes } from "styled-components";

export const flyToCenterBase = keyframes`
  0% {
    opacity: 0;            

  }

  70% {
    opacity: 1;      


  }

  85% {

  }

  100% {
    /* display: none; */

  }
`;

export const logoAnimation = keyframes`
  0% {
    opacity: 0;      
      

  }

  70% {
    opacity: 0;      
    rotate: 0deg;  


  }
  

  85% {
opacity: 1;
  }

  100% {   
     rotate: -50deg;  

    /* display: none; */

  }
`;

export const flyToCenter = keyframes`
  0% {
    transform: translate(var(--x), var(--y)) scale(0.3);
    opacity: 0;            

  }

  70% {
    transform: translate(0, 0) scale(1);
    opacity: 1;     
    rotate: 0deg;  
    filter: blur(15px);


  }

  85% {
    transform: translate(0, 0) scale(1.2);  
    filter: blur(10px);

  }

  100% {
    /* transform: translate(0, 0) scale(1); */
     transform: translate(-1700px, -200px) scale(0);
    /* display: none; */
    rotate: 50deg;  
    filter: blur(2px);

  }
`;

export const flyToCenterTwo = keyframes`
  0% {
    transform: translate(var(--x), var(--y)) scale(0.2);
    opacity: 0;

  }

  70% {
    transform: translate(0, 0) scale(1);
    opacity: 1;     
    rotate: 0deg; 
    filter: blur(15px);

  }

  85% {
    transform: translate(0, 0) scale(1.1); 
    filter: blur(10px);
  }

  100% {
    transform: translate(0, 0) scale(1);
    rotate: 50deg;
    filter: blur(20px);
     transform: translate(-1700px, -200px) scale(0);
  }
`;
export const flyToCenterThree = keyframes`
  0% {
    transform: translate(var(--x), var(--y)) scale(0.1);
    opacity: 0;          

  }

  70% {
    transform: translate(0, 0) scale(1);
    opacity: 1;     
    rotate: 0deg;

  }

  85% {
    transform: translate(0, 0) scale(1.3);
  }

  100% {
    transform: translate(0, 0) scale(1);
    rotate: 50deg;
     transform: translate(-1700px, -200px) scale(0);
  }
`;

export const backBlurAnimation = keyframes`
  0% {
    transform: translate(var(--x), var(--y)) scale(0.2);
    opacity: 0;

  }

  70% {
    transform: translate(0, 0) scale(1);
    opacity: 1;     
    rotate: 0deg; 
    filter: blur(15px);

  }

  85% {
    transform: translate(0, 0) scale(1.1); 
    filter: blur(10px);
  }

  100% {
    transform: translate(0, 0) scale(1);
    rotate: 0deg;
    filter: blur(20px);
     transform: translate(-1700px, -100px) scale(0);
  }
`;

/// bg animation stars

export const starsFall = keyframes`

  from {
    transform: translateY(0);
    opacity: 0.8;
  }
  to {
    transform: translateY(110vh);
    opacity: 0;
  }
`;

export const twinkle = keyframes`
  0% { opacity: 0.2; }
  50% { opacity: 1; }
  100% { opacity: 0.2; }
`;

export const shooting = keyframes`
  0% {
    transform: translate(0, 0) rotate(-55deg) scale(1);
    opacity: 1;
  }
  100% {
    transform: translate(-600px, 600px) rotate(-55deg) scale(0.5);
    opacity: 0;
  }
`;
