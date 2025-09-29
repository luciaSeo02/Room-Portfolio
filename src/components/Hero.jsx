import React, { useState, Suspense, lazy } from "react";
import { Loader } from "@react-three/drei";

const ThreeScene = lazy(() => import("../three/ThreeScene.jsx"));

export default function Hero() {
  const [active3D, setActive3D] = useState(false);

  const hour = new Date().getHours();
  const isDay = hour >= 7 && hour < 19;

  const posterDay = "/assets/renderDay01.png";
  const posterNight = "/assets/renderNight02.png";
  const poster = isDay ? posterDay : posterNight;

  return (
    <section
      id="hero"
      className="relative flex flex-col items-center pt-12 pb-8"
    >
      <div className="text-center mb-6">
        <h1 className="text-xl font-bold md:text-3xl">
          Lucía Seoane Loureda - Web Developer & 3D Artist
        </h1>
        <h2 className="text-gray-600 text-sm md:text-lg">
          Frontend - React - Three.js - Animation
        </h2>
      </div>

      <div
        className={`transition-all duration-500 ${
          active3D
            ? "w-full h-[80vh]"
            : "w-[90%] max-w-[400px] aspect-square border-8 border-gray-900"
        }`}
      >
        {!active3D ? (
          <picture>
            <source srcSet={poster} type="image/webp" />
            <img
              src={poster}
              alt="Setup poster"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </picture>
        ) : (
          <Suspense fallback={null}>
            <ThreeScene active3D={active3D} />
          </Suspense>
        )}
      </div>

      <div className="mt-4">
        {!active3D ? (
          <button
            onClick={() => setActive3D(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
          >
            Explore on 3D
          </button>
        ) : (
          <button
            onClick={() => setActive3D(false)}
            className="px-4 py-2 bg-red-600 text-white rounded-lg shadow hover:bg-red-700"
          >
            Close 3D
          </button>
        )}
      </div>
    </section>
  );
}
