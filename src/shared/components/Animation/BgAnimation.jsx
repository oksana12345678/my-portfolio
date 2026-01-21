import { useEffect, useMemo, useState } from "react";
import { Sky, StaticStar, ShootingStar } from "./Animation.styled";

const BgAnimation = () => {
  const [mouse, setMouse] = useState({ x: -9999, y: -9999 });

  useEffect(() => {
    const handleMove = (e) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  const getScale = (starX, starY) => {
    const dx = mouse.x - starX;
    const dy = mouse.y - starY;
    const distance = Math.sqrt(dx * dx + dy * dy);

    const maxDistance = 200;
    if (distance > maxDistance) return 1;

    return 1 + (1 - distance / maxDistance) * 2;
  };

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
      {staticStars.map((star) => {
        const starX = (star.left / 100) * window.innerWidth;
        const starY = (star.top / 100) * window.innerHeight;

        return (
          <StaticStar
            key={star.id}
            style={{
              width: star.size,
              height: star.size,
              top: `${star.top}%`,
              left: `${star.left}%`,
              animationDelay: `${star.delay}s`,
              transform: `scale(${getScale(starX, starY)})`,
            }}
          />
        );
      })}

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
