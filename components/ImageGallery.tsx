import { type TouchEvent, useEffect, useMemo, useState } from "react";

const visualItems = [
  {
    id: "vgc1",
    image: "/images/gallery/01-frontline-sea.jpg",
    fallbackImage: "/gallery-sea.svg",
    alt: "Direct Mediterranean frontage with uninterrupted sea views",
    caption: "Direct Mediterranean frontage with uninterrupted sea views",
  },
  {
    id: "vgc2",
    image: "/images/gallery/02-land-scale.jpg",
    fallbackImage: "/gallery-land.svg",
    alt: "Over 5,600 m2 of private coastal land",
    caption: "Over 5,600 m2 of private coastal land",
  },
  {
    id: "vgc3",
    image: "/images/gallery/03-elevated-viewpoint.jpg",
    fallbackImage: "/gallery-viewpoint.svg",
    alt: "Elevated perspectives across the coastline",
    caption: "Elevated perspectives across the coastline",
  },
  {
    id: "vgc4",
    image: "/images/gallery/04-outdoor-terrace.jpg",
    fallbackImage: "/gallery-terrace.svg",
    alt: "Outdoor living spaces designed for the Mediterranean climate",
    caption: "Outdoor living spaces designed for the Mediterranean climate",
  },
  {
    id: "vgc5",
    image: "/images/gallery/05-sunset-mood.jpg",
    fallbackImage: "/gallery-sunset.svg",
    alt: "Evenings defined by light, space, and sea",
    caption: "Evenings defined by light, space, and sea",
  },
];

const cardLayoutClasses = [
  "md:col-span-7 h-[320px] md:h-[420px]",
  "md:col-span-5 h-[280px] md:h-[320px]",
  "md:col-span-5 h-[280px] md:h-[320px]",
  "md:col-span-4 h-[280px] md:h-[300px]",
  "md:col-span-6 h-[280px] md:h-[300px]",
];

type ImageGalleryText = {
  kicker: string;
  title: string;
  cinematicLine: string;
  items: Array<{ title: string }>;
};

type ImageGalleryProps = {
  text: ImageGalleryText;
};

export default function ImageGallery({ text }: ImageGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [imageErrorById, setImageErrorById] = useState<Record<string, boolean>>({});

  const galleryItems = useMemo(
    () =>
      visualItems.map((item, index) => ({
        ...item,
        caption: text.items[index]?.title ?? item.caption,
      })),
    [text.items]
  );

  useEffect(() => {
    if (activeIndex === null) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveIndex(null);
      }
      if (event.key === "ArrowRight") {
        setActiveIndex((current) => (current === null ? 0 : (current + 1) % galleryItems.length));
      }
      if (event.key === "ArrowLeft") {
        setActiveIndex((current) => (current === null ? 0 : (current - 1 + galleryItems.length) % galleryItems.length));
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex, galleryItems.length]);

  const goNext = () => {
    setActiveIndex((current) => (current === null ? 0 : (current + 1) % galleryItems.length));
  };

  const goPrevious = () => {
    setActiveIndex((current) => (current === null ? 0 : (current - 1 + galleryItems.length) % galleryItems.length));
  };

  const onTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    setTouchStartX(event.changedTouches[0].clientX);
  };

  const onTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    if (touchStartX === null) {
      return;
    }

    const delta = event.changedTouches[0].clientX - touchStartX;
    if (delta <= -45) {
      goNext();
    }
    if (delta >= 45) {
      goPrevious();
    }

    setTouchStartX(null);
  };

  const getImageSrc = (itemId: string, image: string, fallbackImage: string) =>
    imageErrorById[itemId] ? fallbackImage : image;

  const renderCard = (index: number, wrapperClassName: string) => {
    const item = galleryItems[index];
    const imageSrc = getImageSrc(item.id, item.image, item.fallbackImage);

    return (
      <div key={item.id} className={wrapperClassName}>
        <button
          type="button"
          className="group relative block h-full w-full overflow-hidden rounded-2xl text-left"
          onClick={() => setActiveIndex(index)}
        >
          <img
            src={imageSrc}
            alt={item.alt}
            loading="lazy"
            className="block h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
            onError={() => {
              setImageErrorById((current) => ({ ...current, [item.id]: true }));
            }}
          />

          <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/60 to-black/10 transition duration-300 group-hover:from-black/75 group-hover:to-black/25" />

          <p id={item.id} className="pointer-events-none absolute bottom-0 left-0 max-w-[82%] px-5 pb-5 text-base leading-6 text-white transition duration-300 group-hover:translate-y-[-2px]">
            {item.caption}
          </p>
        </button>
      </div>
    );
  };

  return (
    <section className="bg-secondary pb-0 pt-[120px]" aria-labelledby="vg1">
      <div className="mx-auto w-full max-w-[1320px] px-6 lg:px-10">
        <div className="space-y-4">
          <h2 id="vg1" className="max-w-190 text-3xl font-semibold text-slate-900 sm:text-4xl md:text-5xl">
            {text.title}
          </h2>
          <p id="vg2" className="max-w-190 text-base leading-8 text-muted sm:text-lg">
            {text.kicker}
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-10">
          {cardLayoutClasses.map((layoutClass, index) => renderCard(index, layoutClass))}
        </div>
      </div>

      <div className="mt-12 overflow-hidden">
        <div className="relative min-h-[46vh]">
          <img
            src="/break-frontline.svg"
            alt="Cinematic coastline divider"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/45 to-black/20" />
          <div className="relative z-10 mx-auto flex min-h-[46vh] w-full max-w-[1320px] items-end px-6 pb-12 lg:px-10">
            <p id="vgcin" className="max-w-190 text-2xl font-semibold text-white sm:text-3xl md:text-4xl">
              {text.cinematicLine}
            </p>
          </div>
        </div>
      </div>

      {activeIndex !== null ? (
        <div
          className="fixed inset-0 z-[70] bg-black/90 p-4 md:p-10"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setActiveIndex(null);
            }
          }}
        >
          <div className="mx-auto flex h-full w-full max-w-[1320px] items-center justify-center" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
            <button
              type="button"
              className="hidden h-12 w-12 items-center justify-center rounded-full border border-white/30 text-2xl text-white transition hover:bg-white/15 md:flex"
              onClick={goPrevious}
              aria-label="Previous image"
            >
              ‹
            </button>

            <div className="relative mx-4 flex h-full max-h-[84vh] flex-1 items-center justify-center overflow-hidden rounded-xl">
              {(() => {
                const activeItem = galleryItems[activeIndex];
                const activeSrc = getImageSrc(activeItem.id, activeItem.image, activeItem.fallbackImage);

                return (
              <img
                src={activeSrc}
                alt={activeItem.alt}
                className="absolute inset-0 h-full w-full object-contain"
                onError={() => {
                  setImageErrorById((current) => ({ ...current, [activeItem.id]: true }));
                }}
              />
                );
              })()}
              <p className="absolute bottom-0 left-0 right-0 bg-black/45 px-4 py-4 text-center text-sm text-white sm:text-base">
                {galleryItems[activeIndex].caption}
              </p>
            </div>

            <button
              type="button"
              className="hidden h-12 w-12 items-center justify-center rounded-full border border-white/30 text-2xl text-white transition hover:bg-white/15 md:flex"
              onClick={goNext}
              aria-label="Next image"
            >
              ›
            </button>

            <button
              type="button"
              className="absolute right-4 top-4 rounded-md border border-white/30 px-3 py-2 text-sm font-semibold text-white transition hover:bg-white/15"
              onClick={() => setActiveIndex(null)}
              aria-label="Close lightbox"
            >
              Close
            </button>
          </div>
        </div>
      ) : null}
    </section>
  );
}
