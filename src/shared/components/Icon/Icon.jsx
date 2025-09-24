import styled from "styled-components";
import clsx from "clsx";

const StyledIcon = styled.svg`
  width: ${({ size }) => size || "32px"};
  height: ${({ size }) => size || "32px"};
  fill: ${({ color }) => color || "currentColor"};
  transition: fill 0.3s ease;

  filter: drop-shadow(0 4px 15px var(--accent-color-light-hover))
    drop-shadow(0 0 3px var(--accent-color-light-hover));

  &:hover {
    fill: ${({ hoverColor }) => hoverColor || "currentColor"};
  }
`;

const Icon = ({ iconName, className, ...props }) => {
  const iconClass = clsx(className && className);
  return (
    <StyledIcon className={iconClass} {...props}>
      <use href={`/icons/sprite.svg#${iconName}`} />
    </StyledIcon>
  );
};

export default Icon;
