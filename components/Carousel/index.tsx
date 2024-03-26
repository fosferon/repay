/**
 * Renders a carousel component using Swiper library.
 *
 * @component
 * @example
 * ```tsx
 * import { Carousel } from './components/Carousel';
 *
 * const config = {
 *   slidesPerView: 1,
 *   breakpoints: {
 *     768: {
 *       slidesPerView: 4,
 *     },
 *   },
 * };
 *
 * const slides = [
 *   {
 *     imgUrl: 'https://www.example.com/slide1.jpg',
 *     title: 'Slide 1',
 *     subtitle: 'Subtitle 1',
 *   },
 *   // ... other slides
 * ];
 *
 * const App = () => {
 *   return (
 *     <Carousel config={config} slides={slides} />
 *   );
 * };
 * ```
 *
 * @param {object} props - The component props.
 * @param {SwiperOptions} props.config - The configuration options for the Swiper component.
 * @param {CarouselSlide[]} props.slides - The array of slides to be rendered in the carousel.
 * @returns {JSX.Element} The rendered carousel component.
 */

import { useEffect, useRef, ReactNode } from "react";
import { register } from "swiper/element/bundle";
import "swiper/swiper-bundle.css";

interface CarouselProps {
  config: any; // replace 'any' with the actual type of the_swiper_config_object
  slides: ReactNode[]; // replace 'any[]' with the actual type of the_slides_object_generated_just_now
}

export const Carousel = ({ config, slides }: CarouselProps) => {
  const swiperRef = useRef<{ initialize: () => void } | null>(null);

  useEffect(() => {
    // Register Swiper web component
    register();

    // Object with parameters
    const params = config;

    // Assign it to swiper element
    Object.assign(swiperRef.current!, params);

    // initialize swiper
    if (swiperRef.current) {
      swiperRef.current.initialize();
    }
  }, []);

  const items = slides;

  return (
    <swiper-container init="false" ref={swiperRef}>
      {items.map((slide, index) => (
        <swiper-slide key={index}>{slide}</swiper-slide>
      ))}
    </swiper-container>
  );
};
