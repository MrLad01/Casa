import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { register } from "swiper/element/bundle";
import { motion, Variants } from "framer-motion";

import logo from "../src/assets/OWDN6985.jpg";
import background1 from "../src/assets/pexels-binyamin-mellish-106399.jpg";
import background2 from "../src/assets/pexels-expect-best-323780.jpg";
import background3 from "../src/assets/pexels-mark-2724749.jpg";
import background4 from "../src/assets/pexels-vecislavas-popa-1571463.jpg";

import mobileBackground1 from "../src/assets/bm1.jpg";
import mobileBackground2 from "../src/assets/bm2.jpg";
import mobileBackground3 from "../src/assets/bm3.jpg";
import mobileBackground4 from "../src/assets/bm4.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

// import required modules
import { Autoplay, EffectFade } from "swiper/modules";

register();

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

function App() {
  const [openSide, setOpenSide] = useState(false);

  return (
    <>
      <div className=" h-[100vh] w-[100vw] max-sm:overflow-x-hidden">
        <nav className="flex justify-between items-center w-full px-7 max-sm:px-3 py-4 max-sm:py-2">
          <div className="flex items-center gap-4 max-sm:gap-2">
            <img
              src={logo}
              alt=" CasaSwap Logo "
              className="w-12 max-sm:w-8 h-12 max-sm:h-8 mix-blend-multiply opacity-100 "
            />
            <h3 className="logofont text-2xl max-sm:text-base text-[#0C0D0D]">
              {" "}
              CasaSwap{" "}
            </h3>
          </div>

          <div className=" flex items-center gap-6 max-sm:hidden ">
            <a href="/"> Pricing </a>
            <a href="/"> About Us </a>
            <button> Log In </button>
            <button className=" bg-[#F7931A] text-white outline-0 border-[#F7931A] border px-3 py-2 rounded-xl ">
              Register For FREE
            </button>
          </div>

          <div className="hidden max-sm:block">
            <button onClick={() => setOpenSide(true)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-10 h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </nav>

        {openSide && (
          <motion.nav
            initial={false}
            animate={openSide ? "open" : "closed"}
            className="menu"
          >
            <div
              className="hidden max-sm:block absolute inset-0 w-screen h-screen bg-black opacity-70 z-10 "
              onClick={() => setOpenSide(false)}
            ></div>

            <div className="hidden max-sm:block absolute top-0 right-0 bg-white rounded-es-lg shadow-xl h-56 w-44 z-20 pt-2">
              <button
                className="absolute right-0 top-0 p-3 border"
                onClick={(e) => {
                  e.preventDefault();
                  setOpenSide(!openSide);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <motion.div
                className="flex flex-col pl-3 mt-10 pr-5 text-sm"
                variants={{
                  open: {
                    clipPath: "inset(0% 0% 0% 0% round 10px)",
                    transition: {
                      type: "spring",
                      bounce: 0,
                      duration: 0.7,
                      delayChildren: 0.3,
                      staggerChildren: 0.05,
                    },
                  },
                  closed: {
                    clipPath: "inset(10% 50% 90% 50% round 10px)",
                    transition: {
                      type: "spring",
                      bounce: 0,
                      duration: 0.3,
                    },
                  },
                }}
                style={{ pointerEvents: openSide ? "auto" : "none" }}
              >
                <motion.a
                  href="/"
                  className="py-1 pl-2"
                  variants={itemVariants}
                >
                  {" "}
                  Pricing{" "}
                </motion.a>

                <div className="w-full h-0.5 my-1 bg-slate-400 opacity-40"></div>

                <motion.a
                  href="/"
                  className="py-1 pl-2"
                  variants={itemVariants}
                >
                  {" "}
                  About Us{" "}
                </motion.a>

                <div className="w-full h-0.5 my-1 bg-slate-400 opacity-40"></div>

                <motion.a
                  href="/"
                  className="py-1 pl-2"
                  variants={itemVariants}
                >
                  {" "}
                  Log In{" "}
                </motion.a>

                <div className="w-full h-0.5 my-1 bg-slate-400 opacity-40"></div>

                <motion.a
                  href="/"
                  className="py-1 pl-2"
                  variants={itemVariants}
                >
                  {" "}
                  Register for free{" "}
                </motion.a>
              </motion.div>
            </div>
          </motion.nav>
        )}

        <div className=" py-44 max-sm:py-32 w-full mr-auto ml-auto grid">
          <p className="text-center  text-3xl max-sm:text-lg font-semibold text-wrap w-[860px] max-sm:w-[360px] ml-auto mr-auto">
            See more of the world without breaking the bank by joining Our top
            home exchange community globally.
          </p>

          <div className="mr-auto ml-auto py-12  flex ">
            <input
              type="text"
              className=" w-[340px] max-sm:w-64 border outline-0 p-4 max-sm:p-2 rounded-s-2xl max-sm:rounded-s-lg "
              placeholder="What destination interests you?"
            />

            <button className="border p-4 max-sm:p-2 pr-7 max-sm:pr-3 rounded-e-2xl max-sm:rounded-e-lg bg-[#F7931A] text-white outline-0 border-[#F7931A]">
              Search
            </button>
          </div>
        </div>
      </div>

      <div className=" absolute top-0 left-0 w-[100vw] h-[100vh] -z-10 object-contain opacity-70 max-sm:hidden ">
        <Swiper
          spaceBetween={40}
          effect={"fade"}
          modules={[Autoplay, EffectFade]}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          fadeEffect={{
            crossFade: true,
          }}
          speed={4000} // Adjust the speed here (in milliseconds)
          className="mySwiper h-[100vh] w-[100vw]"
        >
          <SwiperSlide>
            <img src={background1} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={background2} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={background3} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={background4} />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className=" absolute top-0 left-0 w-[100vw] h-[100vh] -z-10 object-contain opacity-70 hidden max-sm:block ">
        <Swiper
          spaceBetween={40}
          effect={"fade"}
          modules={[Autoplay, EffectFade]}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          fadeEffect={{
            crossFade: true,
          }}
          speed={4000} // Adjust the speed here (in milliseconds)
          className="mySwiper h-[100vh] w-[100vw]"
        >
          <SwiperSlide>
            <img src={mobileBackground1} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={mobileBackground2} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={mobileBackground3} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={mobileBackground4} />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default App;
