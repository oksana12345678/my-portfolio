import { useMemo } from "react";
import { Sky, StaticStar, ShootingStar } from "./Animation.styled";

const BgAnimation = () => {
  const staticStars = useMemo(
    () =>
      Array.from({ length: 300 }).map((_, i) => ({
        id: i,
        size: Math.random() * 2 + 1,
        top: Math.random() * 100,
        left: Math.random() * 100,
        delay: Math.random() * 5,
      })),
    [],
  );

  const shootingStars = useMemo(
    () =>
      Array.from({ length: 6 }).map((_, i) => ({
        id: i,
        top: Math.random() * 50,
        left: Math.random() * 100 + 20,
        delay: Math.random() * 10,
        duration: Math.random() * 3 + 2,
      })),
    [],
  );

  return (
    <Sky>
      {staticStars.map((star) => (
        <StaticStar
          key={star.id}
          style={{
            width: star.size,
            height: star.size,
            top: `${star.top}%`,
            left: `${star.left}%`,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}

      {shootingStars.map((star) => (
        <ShootingStar
          key={star.id}
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
          }}
        />
      ))}
    </Sky>
  );
};

export default BgAnimation;
