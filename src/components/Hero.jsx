import React, { useState, Suspense, lazy } from "react";
import { Loader } from "@react-three/drei";
import Popup from "./Popup";
import popupContent from "../data/popupData.json";
import { useLang } from "../context/LangContext";

const ThreeScene = lazy(() => import("../three/ThreeScene.jsx"));

export default function Hero() {
  const [active3D, setActive3D] = useState(false);
  const [popupKey, setPopupKey] = useState(null);

  const { lang } = useLang();

  const hour = new Date().getHours();
  const isDay = hour >= 7 && hour < 19;
  const posterDay = "/assets/renderDay02.png";
  const posterNight = "/assets/renderNight02.png";
  const poster = isDay ? posterDay : posterNight;

  const labels = {
    en: {
      title: "Lucía Seoane Loureda - Web Developer & 3D Artist",
      subtitle: "Frontend - React - Three.js - Animation",
      explore: "Explore in 3D",
      close: "Close 3D",
    },
    es: {
      title: "Lucía Seoane Loureda - Desarrolladora Web & Artista 3D",
      subtitle: "Frontend - React - Three.js - Animación",
      explore: "Explorar en 3D",
      close: "Cerrar 3D",
    },
  };

  const handleObjectClick = (name) => setPopupKey(name);
  const closePopup = () => setPopupKey(null);

  return (
    <section
      className="relative flex flex-col items-center pt-12 pb-8"
      id="hero"
    >
      <div className="text-center mb-6">
        <h1 className="text-xl font-bold md:text-3xl">{labels[lang].title}</h1>
        <h2 className="text-gray-600 text-sm md:text-lg">
          {labels[lang].subtitle}
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
            <ThreeScene active3D={active3D} onObjectClick={handleObjectClick} />
          </Suspense>
        )}
      </div>

      <div className="mt-4">
        {!active3D ? (
          <button
            onClick={() => setActive3D(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
          >
            {labels[lang].explore}
          </button>
        ) : (
          <button
            onClick={() => setActive3D(false)}
            className="px-4 py-2 bg-red-600 text-white rounded-lg shadow hover:bg-red-700"
          >
            {labels[lang].close}
          </button>
        )}
      </div>

      {popupKey && (
        <Popup
          content={popupContent[popupKey]}
          lang={lang}
          onClose={closePopup}
        />
      )}
    </section>
  );
}
