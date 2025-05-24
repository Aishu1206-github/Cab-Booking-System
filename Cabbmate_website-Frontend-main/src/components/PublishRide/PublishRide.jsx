import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import Step1 from "./Step1/Step1";
import Step2 from "./Step2/Step2";
import Step3 from "./Step3/Step3";
import DriverDetails from "../DriverDetaiils/DriverDetails";
import Step6 from "./Step6/Step6";
import ModalComponent from "./ModalComponent";
import "./PublishRide.css";

export default function PublishRide() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isStep3Valid, setIsStep3Valid] = useState(false);
  const [isStep1Valid, setIsStep1Valid] = useState(false);
  const [isStep4Valid, setIsStep4Valid] = useState(false);
  const swiperRef = useRef(null);

  const handleNextClick = () => {
    const swiperInstance = swiperRef.current?.swiper;
    if (currentSlide === 5) {
      setIsModalOpen(true);
    } else {
      if (currentSlide === 1 && !isStep1Valid) return; // Prevent advancing if Step1 is invalid
      swiperInstance?.slideNext();
    }
  };

  const handleStep1Validation = (isValid) => {
    setIsStep1Valid(isValid);
  };

  const handlePrevClick = () => {
    const swiperInstance = swiperRef.current?.swiper;
    swiperInstance?.slidePrev();
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  const handleStep3Validation = (isValid) => {
    setIsStep3Valid(isValid);
  };
  const handleDriverDetailsValidation = (isValid) => {
    setIsStep4Valid(isValid);
  };

  return (
    <motion.div
      className="publish-ride-container px-4 py-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <motion.p className="page-title" variants={fadeInUp}>
        Publish a Ride
      </motion.p>

      <motion.p
        className="subtitle"
        variants={fadeInUp}
        transition={{ delay: 0.2 }}
      >
        🌍 Where are you headed? Enter your destination below.
      </motion.p>

      <motion.div
        className="progress-bar-container"
        initial={{ width: "0%" }}
        animate={{ width: `${(currentSlide / 5) * 100}%` }}
        transition={{ duration: 0.8 }}
      >
        <div className="progress-bar"></div>
      </motion.div>

      <Swiper
        ref={swiperRef}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex + 1)}
        className="swiper-container"
        autoHeight={true}
      >
        <SwiperSlide>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Step1 onValidationChange={handleStep1Validation} />
          </motion.div>
        </SwiperSlide>
        <SwiperSlide>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Step2 />
          </motion.div>
        </SwiperSlide>
        <SwiperSlide>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Step3 onValidationChange={handleStep3Validation} />
          </motion.div>
        </SwiperSlide>
        <SwiperSlide>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <DriverDetails onValidationChange={handleDriverDetailsValidation} />
          </motion.div>
        </SwiperSlide>
        <SwiperSlide>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Step6 />
          </motion.div>
        </SwiperSlide>
      </Swiper>

      <motion.div
        className="custom-navigation"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <button
          className="nav-button prev-button"
          onClick={handlePrevClick}
          disabled={currentSlide === 1}
          whileTap={{ scale: 0.9 }}
        >
          ⬅️ Previous
        </button>
        <span className="current-slide">Step {currentSlide} / 5</span>

        <motion.button
          className="nav-button next-button"
          onClick={handleNextClick}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 200 }}
          disabled={
            (currentSlide === 1 && !isStep1Valid) || // Disable if Step1 is invalid
            (currentSlide === 3 && !isStep3Valid) ||
            // Disable if Step3 is invalid
            (currentSlide === 4 && !isStep4Valid)
          }
        >
          {currentSlide === 5 ? "🚗 Publish Ride" : "Next ➡️"}
        </motion.button>
      </motion.div>

      {isModalOpen && (
        <ModalComponent
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </motion.div>
  );
}
