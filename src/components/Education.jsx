import { content } from "../Content";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import { useState } from "react";


const Education = () => {
  const { Education } = content;
  const [activeIndex, setActiveIndex] = useState(0);
  // const [open, setOpen]=useState(false)
  
  // const OpenMode=()=>{
  //   setOpen(!open)
    
  // }
  return (
    <section className="bg-bg_light_primary ">
      <div className="md:container px-5 pt-14">
        <h6 className="title " data-aos="fade-down">
          {Education.title}
        </h6>
        <h4 className="subtitle  " data-aos="fade-down">
          {Education.subtitle}
        </h4>
        <br />
        <Swiper
          direction={"vertical"}
          pagination={{
            clickable: true,
          }}
          data-aos="fade-up"
          loop={true}
          spaceBetween={40}
          slidesPerView={1.7}
          onSlideChange={(e) => {
            console.log(e.realIndex);
            setActiveIndex(e.realIndex);
          }}
          modules={[Pagination]}
          className="md:h-96 h-[40rem] max-w-3xl"
        >
          {Education.education_content.map((content, i) => (
            <SwiperSlide key={i}>
              <div
                className={` duration-500 bg-gray mx-8 border-2 md:w-fit
              p-8 md:h-full sm:h-fit rounded-2xl flex items-center gap-6 
               border-slate-200 md:flex-row flex-col  shadow-xl
                ${activeIndex !== i && "scale-75 blur-sm"}`}
              >
                {/* <img src={content.img} alt="..." className={`h-[30vh]  mr-2 border border-red cursor-pointer shadow-2xl rounded-sm `}  /> */}
                <div >
                  <h4 className="sm:text-[22px] text-sm text-center underline text-red-900 ">{content.review}</h4>
                  <br />
                  <div className=" flex gap-4 md:gap-24  md:flex-row  flex-col  ">
                  <h6 className="md:pl-3 sm:pl-5">{content.name}</h6>
               <h6>{content.grade}</h6>
                  <h6 >{content.passout}</h6>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Education;
