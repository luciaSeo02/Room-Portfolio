import { HashLink } from "react-router-hash-link";

export default function Popup({ content, lang = "en", onClose }) {
  if (!content) return null;

  const localized = content[lang] || content.en;
  const href = localized.linkHref || "";

  const isInternal = href.startsWith("#");

  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        background: "rgba(255, 255, 255, 0.95)",
        padding: "30px",
        borderRadius: "16px",
        boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
        zIndex: 9999,
        maxWidth: "90%",
        width: "400px",
        textAlign: "center",
        pointerEvents: "auto",
      }}
    >
      <button
        onClick={onClose}
        style={{
          position: "absolute",
          top: "12px",
          right: "12px",
          background: "transparent",
          border: "none",
          fontSize: "1.5rem",
          cursor: "pointer",
          color: "#555",
        }}
        aria-label="Close"
      >
        &times;
      </button>

      {localized.image && (
        <img
          src={localized.image}
          alt={localized.title}
          style={{
            width: "100%",
            borderRadius: "12px",
            marginBottom: "16px",
          }}
        />
      )}

      {localized.title && (
        <h2 style={{ marginBottom: "8px", fontSize: "1.25rem" }}>
          {localized.title}
        </h2>
      )}

      {localized.text && (
        <p style={{ marginBottom: "16px" }}>{localized.text}</p>
      )}

      {href &&
        localized.linkText &&
        (isInternal ? (
          <HashLink
            smooth
            to={href}
            onClick={onClose}
            style={{
              display: "inline-block",
              padding: "8px 16px",
              background: "#1f2937",
              color: "#fff",
              borderRadius: "8px",
              textDecoration: "none",
            }}
          >
            {localized.linkText}
          </HashLink>
        ) : (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              padding: "8px 16px",
              background: "#1f2937",
              color: "#fff",
              borderRadius: "8px",
              textDecoration: "none",
            }}
          >
            {localized.linkText}
          </a>
        ))}
    </div>
  );
}
