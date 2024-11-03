import useEmblaCarousel from "embla-carousel-react";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";

export function TestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ slidesToScroll: "auto" });
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const testimonials = [
    {
      name: "Gabriel",
      position: "Desenvolvedor Front-End",
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis dolore inventore amet nisi. Possimus odio laudantium incidunt eos tenetur in rem unde dolores sint quisquam, autem veniam molestias nam nobis.",
    },
    {
      name: "Felipe",
      position: "Desenvolvedor Back-End",
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis dolore inventore amet nisi. Possimus odio laudantium incidunt eos tenetur in rem unde dolores sint quisquam, autem veniam molestias nam nobis.",
    },
    {
      name: "Clever",
      position: "Comercial",
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis dolore inventore amet nisi. Possimus odio laudantium incidunt eos tenetur in rem unde dolores sint quisquam, autem veniam molestias nam nobis.",
    },
    {
      name: "Clever",
      position: "Comercial",
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis dolore inventore amet nisi. Possimus odio laudantium incidunt eos tenetur in rem unde dolores sint quisquam, autem veniam molestias nam nobis.",
    },
  ];

  return (
    <section className="m-auto">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex ml-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              className="flex-[0_0_calc(100%-32px)] lg:flex-[0_0_calc(50%-32px)] min-w-0"
              key={index}
            >
              <div className="flex items-center gap-4">
                <div>
                  <div className="h-10 w-10 bg-red-500 rounded-full" />
                </div>
                <div>
                  <p className="montserrat text-lg font-bold">
                    {testimonial.name}
                  </p>
                  <p className="montserrat text-sm">{testimonial.position}</p>
                </div>
              </div>
              <div className="mt-6">
                <p className="montserrat text-base">{testimonial.content}</p>
              </div>
            </div>
          ))}
        </div>
        <div>
          <div className="flex gap-3 mt-8 mx-auto w-fit">
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
  );
}
