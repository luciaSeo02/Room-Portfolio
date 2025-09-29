import { useState } from "react";
import {
  Mail,
  Linkedin,
  Instagram,
  Music,
  CheckCircle,
  XCircle,
} from "lucide-react";

export default function Contact({ lang = "en" }) {
  const [toast, setToast] = useState(null);

  const texts = {
    en: {
      title: "Contact me",
      description:
        "If you'd like to get in touch, feel free to send me a message through the form or connect with me on social media.",
      placeholders: {
        name: "Your name",
        email: "Your email",
        message: "Your message...",
      },
      button: "Send Message",
      success: "Thank you! Your message has been sent successfully.",
      error: "Oops, there was an error. Please try again.",
    },
    es: {
      title: "Contáctame",
      description:
        "Si quieres ponerte en contacto, puedes enviarme un mensaje mediante el formulario o conectar conmigo en redes sociales.",
      placeholders: {
        name: "Tu nombre",
        email: "Tu correo electrónico",
        message: "Tu mensaje...",
      },
      button: "Enviar mensaje",
      success: "¡Gracias! Tu mensaje fue enviado con éxito.",
      error: "Oops, hubo un error. Intenta otra vez.",
    },
  };

  const t = texts[lang];

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const response = await fetch("https://formspree.io/f/mkgqnrwb", {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      setToast({ type: "success", message: t.success });
      e.target.reset();
    } else {
      setToast({ type: "error", message: t.error });
    }

    setTimeout(() => setToast(null), 4000);
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center bg-gray-100 relative"
    >
      {toast && (
        <div
          className={`fixed mt-10 top-6 right-6 flex items-center gap-3 px-4 py-3 rounded-lg shadow-lg text-white transition-all duration-500 ${
            toast.type === "success" ? "bg-green-600" : "bg-red-600"
          }`}
        >
          {toast.type === "success" ? (
            <CheckCircle className="w-5 h-5" />
          ) : (
            <XCircle className="w-5 h-5" />
          )}
          <span>{toast.message}</span>
        </div>
      )}

      <div className="max-w-5xl text-center px-6 py-12">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4">{t.title}</h3>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            {t.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-xl shadow-md space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder={t.placeholders.name}
              required
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-blue-500"
            />
            <input
              type="email"
              name="email"
              placeholder={t.placeholders.email}
              required
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              name="message"
              placeholder={t.placeholders.message}
              rows="5"
              required
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
            >
              {t.button}
            </button>
          </form>

          <div className="flex flex-col justify-center gap-4">
            <a
              href={`mailto:luciaseo20@gmail.com`}
              className="flex items-center gap-3 p-4 bg-white rounded-xl shadow hover:shadow-md transition"
            >
              <Mail className="text-blue-600" />
              <span>luciaseo20@gmail.com</span>
            </a>
            <a
              href="https://www.linkedin.com/in/lucia-seo"
              target="_blank"
              className="flex items-center gap-3 p-4 bg-white rounded-xl shadow hover:shadow-md transition"
            >
              <Linkedin className="text-blue-600" />
              <span>lucia-seo</span>
            </a>
            <a
              href="https://www.instagram.com/loozziasart/"
              target="_blank"
              className="flex items-center gap-3 p-4 bg-white rounded-xl shadow hover:shadow-md transition"
            >
              <Instagram className="text-pink-500" />
              <span>loozziasart</span>
            </a>
            <a
              href="https://tiktok.com/@loozziasart/"
              target="_blank"
              className="flex items-center gap-3 p-4 bg-white rounded-xl shadow hover:shadow-md transition"
            >
              <Music className="text-black" />
              <span>loozziasart</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
