import { useThree } from "@react-three/fiber";
import { useEffect } from "react";
import * as THREE from "three";

export function Background() {
  const { scene } = useThree();

  useEffect(() => {
    const hour = new Date().getHours();
    const canvas = document.createElement("canvas");
    canvas.width = 1;
    canvas.height = 256;
    const ctx = canvas.getContext("2d");

    const gradient = ctx.createLinearGradient(0, 0, 0, 256);

    if (hour >= 7 && hour < 19) {
      gradient.addColorStop(0.5, "#31a1fdff");
      gradient.addColorStop(1, "#bcd9f5ff");
    } else {
      gradient.addColorStop(0, "#0B1A3A");
      gradient.addColorStop(1, "#000000");
    }

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 1, 256);

    const texture = new THREE.CanvasTexture(canvas);
    scene.background = texture;
  }, [scene]);

  return null;
}
