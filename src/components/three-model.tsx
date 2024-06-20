import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

import React from "react";
import { Model } from "./models/hovercraft-mk9";

const ThreeDimModel: React.FC = () => {
  return (
    <div className="h-[100svh]">
      <Canvas
        camera={{ position: [0, 0, 1] }}
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
        <Model />
        {/* <Box /> */}
        {/* <Plane /> */}
        <OrbitControls
          autoRotate
          maxPolarAngle={Math.PI / 2.5}
          minPolarAngle={Math.PI / 3}
          enableDamping={false}
        />
        {/* <fog attach="fog" args={["white", 5, 15]} /> */}
      </Canvas>
    </div>
  );
};

export default ThreeDimModel;
