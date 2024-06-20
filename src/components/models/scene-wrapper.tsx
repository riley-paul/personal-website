import { Canvas } from "@react-three/fiber";
import { Html, OrbitControls, useProgress } from "@react-three/drei";
import * as THREE from "three";

import React from "react";

const Loader: React.FC = () => {
  const { progress } = useProgress();
  return <Html center>{progress} % loaded</Html>;
};

type Props = React.PropsWithChildren;

export const SceneWrapper: React.FC<Props> = (props) => {
  const { children } = props;
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
        <React.Suspense fallback={<Loader />}>{children}</React.Suspense>
        <OrbitControls
          autoRotate
          maxPolarAngle={Math.PI / 2.5}
          minPolarAngle={Math.PI / 3}
          enableDamping={false}
        />
      </Canvas>
    </div>
  );
};
