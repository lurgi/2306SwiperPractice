import { useSwiper } from "swiper/react";

export default function TempBtn() {
  const swiper = useSwiper();
  const handleClick = () => {
    swiper.slideTo(2);
  };
  return <button onClick={handleClick}>두번 째 인덱스로 이동합니다.</button>;
}
