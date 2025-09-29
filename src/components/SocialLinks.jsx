import { Instagram, Youtube, Music2 } from "lucide-react";

export default function SocialLinks({ lang = "en" }) {
  const label =
    lang === "en"
      ? "See more timelapses & animations"
      : "Ver más timelapses y animaciones";

  return (
    <div className="mt-5">
      <h3 className="text-2xl font-semibold mb-5">{label}</h3>
      <div className="flex gap-6 mb-10">
        <a
          href="https://instagram.com/loozziasart"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-pink-500 transition"
        >
          <Instagram size={28} />
        </a>
        <a
          href="https://tiktok.com/@loozziasart"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-black transition"
        >
          <Music2 size={28} />
        </a>
        <a
          href="https://youtube.com/@loozzia"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-red-600 transition"
        >
          <Youtube size={28} />
        </a>
      </div>
    </div>
  );
}
