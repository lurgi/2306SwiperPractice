import { useSwiper } from "swiper/react";

export default function SlidePrevButton() {
  const swiper = useSwiper();

  return (
    <button onClick={() => swiper.slidePrev()}>Slide to the Prev slide</button>
  );
}
