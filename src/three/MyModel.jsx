import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { a, useSpring } from "@react-spring/three";

export function MyModel({ active3D, onObjectClick, ...props }) {
  const { scene } = useGLTF("models/roomWeb05.glb");
  const modelRef = useRef();

  const clickableNames = [
    "igLogo",
    "githubLogo001",
    "linkedinLogo",
    "monitorScreen01",
    "posters",
    "graduatedPoster",
  ];

  const { scale } = useSpring({
    scale: active3D ? 1 : 0.01,
    config: { mass: 1, tension: 170, friction: 12 },
  });

  const handleClick = (event) => {
    let obj = event.object;
    while (obj) {
      if (clickableNames.includes(obj.name)) {
        if (onObjectClick) onObjectClick(obj.name);
        console.log(obj.name, "clickado");
        break;
      }
      obj = obj.parent;
    }
  };

  return (
    <a.primitive
      ref={modelRef}
      object={scene}
      scale={scale.to((s) => [s, s, s])}
      {...props}
      onClick={handleClick}
    />
  );
}
