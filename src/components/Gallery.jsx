import useEmblaCarousel from "embla-carousel-react";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import Image from "next/image";
import { useRouter } from "next/navigation";

export function Gallery() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ slidesToScroll: "auto" });
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const router = useRouter();

  const gallery = [
    {
      type: "image",
      poster: "/placeholder_movie_10.jpg",
      source: "/movies/movie_10.mp4",
    },
    {
      type: "image",
      poster: "/placeholder_movie_01.jpg",
      source: "/movies/movie_1.mp4",
    },
    {
      type: "image",
      poster: "/placeholder_movie_02.jpg",
      source: "/movies/movie_2.mp4",
    },
    {
      type: "image",
      poster: "/placeholder_movie_03.jpg",
      source: "/movies/movie_3.mp4",
    },
    {
      type: "image",
      poster: "/placeholder_movie_04.jpg",
      source: "/movies/movie_4.mp4",
    },
    {
      type: "image",
      poster: "/placeholder_movie_05.jpg",
      source: "/movies/movie_5.mp4",
    },
    {
      type: "image",
      poster: "/placeholder_movie_06.jpg",
      source: "/movies/movie_6.mp4",
    },
    {
      type: "image",
      poster: "/placeholder_movie_07.jpg",
      source: "/movies/movie_7.mp4",
    },
    {
      type: "image",
      poster: "/placeholder_movie_08.jpg",
      source: "/movies/movie_8.mp4",
    },
    {
      type: "image",
      poster: "/placeholder_movie_09.jpg",
      source: "/movies/movie_9.mp4",
    },
  ];

  const handleSetSearchParams = (video) => {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set("show", video?.source);
    searchParams.set("poster", video?.poster);
    router.push(`?${searchParams.toString()}#galeria`);
  };

  return (
    <div className="py-14 bg-cod-gray-600">
      <h3 className="text-4xl montserrat">Galeria</h3>
      <section className="mt-12">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex ml-4 gap-8">
            {gallery.map((galleryItem, index) => (
              <div
                className="flex-[0_0_calc(100%-32px)] h-72 relative lg:flex-[0_0_calc(33%)] min-w-0"
                key={index}
              >
                <button onClick={() => handleSetSearchParams(galleryItem)}>
                  <Image
                    fill
                    alt="Gallery Images"
                    src={galleryItem.poster}
                    objectFit="contain"
                  />
                </button>
              </div>
            ))}
          </div>
          <div>
            <div className="flex gap-3 mt-8 mx-auto  w-fit">
              {scrollSnaps.map((_, index) => (
                <DotButton
                  key={index}
                  onClick={() => onDotButtonClick(index)}
                  active={index === selectedIndex}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
