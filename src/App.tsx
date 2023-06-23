import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { A11y } from "swiper";
import SlideNextButton from "./components/SlideNextButton";
import TempBtn from "./components/TempBtn";
import SlidePrevButton from "./components/SlidePrevButton copy";

function App() {
  return (
    <Swiper
      modules={[A11y]}
      spaceBetween={20}
      slidesPerView={3}
      onSlideChange={() => console.log("it works")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {["red", "green", "blue", "gray", "yellow", "black"].map((color, i) => (
        <SwiperSlide key={i}>
          <div
            style={{ backgroundColor: color, padding: 10, height: "30vh" }}
          ></div>
        </SwiperSlide>
      ))}
      <div style={{ marginTop: 10 }}>
        <SlidePrevButton />
        <SlideNextButton></SlideNextButton>
        <TempBtn />
      </div>
    </Swiper>
  );
}

export default App;
