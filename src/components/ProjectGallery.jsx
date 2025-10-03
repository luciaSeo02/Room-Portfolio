import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Video from "yet-another-react-lightbox/plugins/video";
import "yet-another-react-lightbox/styles.css";
import { Play } from "lucide-react";

const getMediaSrc = (src) => `${import.meta.env.BASE_URL}${src}`;

export default function ProjectGallery({ media = [], title }) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  if (media.length === 0) return null;

  const isSingleVideo = media.length === 1 && media[0].type === "video";

  if (isSingleVideo) {
    return (
      <div className="w-full mb-8">
        <video
          src={getMediaSrc(media[0].src)}
          poster={getMediaSrc(
            media[0].poster || "assets/projects/video-placeholder.png"
          )}
          controls
          className="w-full rounded-lg shadow aspect-video"
        />
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
        {media.map((item, i) => (
          <div
            key={i}
            className="relative cursor-pointer rounded-lg shadow overflow-hidden aspect-square bg-gray-200 group"
            onClick={() => {
              setOpen(true);
              setIndex(i);
            }}
          >
            {item.type === "image" ? (
              <img
                src={getMediaSrc(item.src)}
                alt={`${title} media ${i + 1}`}
                className="w-full h-full object-cover"
              />
            ) : (
              <>
                <img
                  src={getMediaSrc(
                    item.poster || "assets/projects/video-placeholder.png"
                  )}
                  alt={`${title} video thumbnail ${i + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                  <Play color="white" strokeWidth="2" size={50} />
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={media.map((item) =>
          item.type === "image"
            ? { src: getMediaSrc(item.src) }
            : {
                type: "video",
                sources: [{ src: getMediaSrc(item.src), type: "video/mp4" }],
                autoplay: true,
                controls: true,
              }
        )}
        plugins={[Video]}
      />
    </>
  );
}
