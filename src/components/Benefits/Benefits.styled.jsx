import { Canvas } from "@react-three/fiber";
import styled from "styled-components";

export const StyledCanvas = styled(Canvas)`
  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  width: 100%;
  height: 100%;
  background: transparent;
  opacity: 0;
  touch-action: none;
  animation: fade-in 5s ease 1s forwards;
`;
