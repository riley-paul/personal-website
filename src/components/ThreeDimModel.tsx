import { Canvas, useFrame } from "@react-three/fiber";
import { useSpring, a } from "@react-spring/three";
import { OrbitControls } from "@react-three/drei";

import React from "react";
import type { Mesh } from "three";

const Box: React.FC = () => {
  const meshRef = React.useRef<Mesh>(null);

  const [hovered, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);

  const props = useSpring({
    scale: active ? 1.5 : 1,
    color: hovered ? "hotpink" : "grey",
  });

  return (
    <a.mesh
      ref={meshRef}
      scale={props.scale}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <boxGeometry attach="geometry" args={[1, 1, 1]} />
      <a.meshBasicMaterial attach="material" color={props.color} />
    </a.mesh>
  );
};

const ThreeDimModel: React.FC = () => {
  return (
    <div className="h-[100svh]">
      <Canvas>
        <Box />
        <OrbitControls
          autoRotate
          maxPolarAngle={Math.PI / 3}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  );
};

export default ThreeDimModel;
