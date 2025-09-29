import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { MyModel } from "./MyModel";
import { Background } from "./Background";
import { Loader } from "@react-three/drei";

export default function ThreeScene({ active3D }) {
  return (
    <>
      <Canvas
        camera={{ position: [0, 2, 4], fov: 80 }}
        style={{ width: "100%", height: "100%" }}
      >
        <ambientLight intensity={1.2} />
        <directionalLight position={[10, 10, 15]} />
        <Background />
        <Suspense fallback={null}>
          <MyModel
            scale={2}
            position={[0, -1.6, 0]}
            rotation={[0, -Math.PI / 4, 0]}
            active3D={active3D}
          />
        </Suspense>
        <OrbitControls
          enableZoom={true}
          minDistance={2}
          maxDistance={8}
          enableDamping={true}
          dampingFactor={0.05}
          rotateSpeed={0.8}
          zoomSpeed={0.6}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 2}
          minAzimuthAngle={-Math.PI / 4}
          maxAzimuthAngle={Math.PI / 4}
        />
      </Canvas>
      <Loader />
    </>
  );
}
