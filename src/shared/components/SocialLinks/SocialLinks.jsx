import {
  Icons,
  IconsGit,
  IconsTelegram,
  SocialMedia,
  SocialMediaList,
} from "./SocialLinks.styled";

const SocialLinks = ({ content }) => {
  return (
    <SocialMedia>
      <SocialMediaList content={content}>
        <li>
          <a
            href="https://www.linkedin.com/in/oksana-tanashchuk/"
            target="blank"
          >
            <Icons />
          </a>
        </li>
        <li>
          <a href="https://github.com/oksana12345678" target="blank">
            <IconsGit />
          </a>
        </li>
        <li>
          <a href="https://t.me/oksana_tanashchuk" target="blank">
            <IconsTelegram />
          </a>
        </li>
      </SocialMediaList>
    </SocialMedia>
  );
};

export default SocialLinks;
