import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { a, useSpring } from "@react-spring/three";

export function MyModel({ active3D, ...props }) {
  const { scene } = useGLTF("/models/roomWeb05.glb");
  const modelRef = useRef();

  const handleClick = () => {
    console.log("modelo clickado");
  };

  const { scale } = useSpring({
    scale: active3D ? 1 : 0.01,
    config: { mass: 1, tension: 170, friction: 12 },
  });

  return (
    <a.primitive
      ref={modelRef}
      object={scene}
      scale={scale.to((s) => [s, s, s])}
      {...props}
      onClick={handleClick}
      onPointerOver={() => (document.body.style.cursor = "pointer")}
      onPointerOut={() => (document.body.style.cursor = "default")}
    />
  );
}
