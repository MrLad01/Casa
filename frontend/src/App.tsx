import { Swiper, SwiperSlide } from 'swiper/react';
import { register } from 'swiper/element/bundle';

import logo from '../src/assets/OWDN6985.jpg';
import background1 from '../src/assets/pexels-binyamin-mellish-106399.jpg';
import background2 from '../src/assets/pexels-expect-best-323780.jpg';
import background3 from '../src/assets/pexels-mark-2724749.jpg';
import background4 from '../src/assets/pexels-vecislavas-popa-1571463.jpg';



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';


// import required modules
import { Autoplay, EffectFade } from 'swiper/modules';



register();


function App() {
  return (
    <>
      <div className = " h-[100vh] w-[100vw]">
        <nav className = "flex justify-between w-full px-7 py-4" >
          <div className = 'flex items-center gap-4'>
            <img src = { logo } alt="" className = 'w-12 h-12 mix-blend-multiply opacity-100' />
            <h3 className='logofont text-2xl text-[#0C0D0D]'> CasaSwap </h3>
          </div>
          <div className = ' flex items-center gap-6' >
            <a href = '/'>
              Pricing
            </a>
            <a href = "/">
              About Us
            </a>
            <button>
              Log In
            </button>
            <button className = ' bg-[#F7931A] text-white outline-0 border-[#F7931A] border px-3 py-2 rounded-xl ' >
              Register For FREE
            </button>
          </div>
        </nav>
        <div className=' py-44 w-full mr-auto ml-auto grid'>
          <p className='text-center  text-3xl font-semibold'> See more of the world without breaking the bank by joining <br /> Our top home exchange community globally.</p>
          <div className='mr-auto ml-auto py-12 flex '>
            <input type="text" className=' w-[340px] border p-4 rounded-s-2xl ' placeholder= 'What destination interests you?' />
            <button className = 'border p-4 pr-7 rounded-e-2xl bg-[#F7931A] text-white outline-0 border-[#F7931A]' > Search </button>
          </div>
        </div>
      </div>
      <div className=' absolute top-0 left-0 w-[100vw] h-[100vh] -z-10 object-contain opacity-70 '>
        <Swiper
          spaceBetween={40}
          effect={'fade'}
          modules={[Autoplay, EffectFade]}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          fadeEffect={{
            crossFade: true
          }}
          speed={4000} // Adjust the speed here (in milliseconds)
          className="mySwiper h-[100vh] w-[100vw]"
        >
          <SwiperSlide>
            <img src = { background1 } />
          </SwiperSlide>
          <SwiperSlide>
            <img src = { background2 } />
          </SwiperSlide>
          <SwiperSlide>
            <img src = { background3 } />
          </SwiperSlide>
          <SwiperSlide>
            <img src = { background4 } />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  )
}

export default App
 