import { Canvas, useFrame } from "@react-three/fiber";
import { useSpring, a } from "@react-spring/three";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

import React from "react";
import type { Mesh } from "three";

const Plane: React.FC = () => (
  <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]} receiveShadow>
    <planeGeometry attach="geometry" args={[100, 100]} />
    <meshBasicMaterial attach="material" color="white" />
  </mesh>
);

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
      castShadow
    >
      <boxGeometry attach="geometry" args={[1, 1, 1]} />
      <a.meshPhysicalMaterial attach="material" color={props.color} />
    </a.mesh>
  );
};

const ThreeDimModel: React.FC = () => {
  return (
    <div className="h-[100svh]">
      <Canvas
        camera={{ position: [0, 0, 5] }}
        onCreated={({ gl }) => {
          gl.shadowMap.enabled = true;
          gl.shadowMap.type = THREE.PCFShadowMap;
        }}
      >
        <ambientLight />
        <spotLight
          position={[0, 5, 10]}
          penumbra={1}
          intensity={300}
          castShadow
        />
        <Box />
        <Plane />
        <OrbitControls
          autoRotate
          maxPolarAngle={Math.PI / 2.5}
          minPolarAngle={Math.PI / 3}
          enableDamping={false}
        />
        <fog attach="fog" args={["white", 5, 15]} />
      </Canvas>
    </div>
  );
};

export default ThreeDimModel;
