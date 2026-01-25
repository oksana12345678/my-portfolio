import BenefitCard from "./BenefitCard/BenefitCard";

function BenefitsCarousel({ t, radius = 1.4 }) {
  const BENEFITS_KEYS = ["clean", "fast", "team", "development"];

  return BENEFITS_KEYS.map((key, i) => {
    const benefit = t(key, { returnObjects: true });

    return (
      <BenefitCard
        key={key}
        title={benefit.title}
        description={benefit.description}
        position={[
          Math.sin((i / BENEFITS_KEYS.length) * Math.PI * 2) * radius,
          0,
          Math.cos((i / BENEFITS_KEYS.length) * Math.PI * 2) * radius,
        ]}
        rotation={[0, Math.PI + (i / BENEFITS_KEYS.length) * Math.PI * 2, 0]}
      />
    );
  });
}

export default BenefitsCarousel;
