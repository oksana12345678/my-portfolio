import { Image, Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { easing } from "maath";
import * as THREE from "three";
import fon from "../../../../assets/nightSky.avif";
import "../../../../shared/utils/utils.js";

function BenefitCard({ title, description, ...props }) {
  const ref = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame((_, delta) => {
    ref.current.lookAt(new THREE.Vector3(0, 0, 8));
    easing.damp3(ref.current.scale, hovered ? 1.15 : 1, 0.1, delta);

    easing.damp(
      ref.current.material,
      "radius",
      hovered ? 0.1 : 0.2,
      0.25,
      delta,
    );

    easing.damp(ref.current.material, "zoom", hovered ? 1 : 1.5, 0.2, delta);
  });

  return (
    <Image
      url={fon}
      ref={ref}
      {...props}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      radius={0.1}
      zoom={1}
      transparent
    >
      {/* eslint-disable-next-line react/no-unknown-property */}
      <bentPlaneGeometry args={[0.1, 1.2, 1.3, 20, 20]} />

      <Text
        position={[0, 0.4, 0.01]}
        fontSize={0.12}
        color="white"
        maxWidth={0.9}
      >
        {title}
      </Text>
      <Text
        position={[0, -0.1, 0.01]}
        fontSize={0.07}
        color="#ddd"
        maxWidth={0.9}
      >
        {description}
      </Text>
    </Image>
  );
}

export default BenefitCard;
