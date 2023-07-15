import { content } from "../Content";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

const Projects = () => {
  const { Projects } = content;
  return (
    <section className="bg-cyan bg" id="projects">
      <div className="md:container px-5 pt-14  h-fit md:min-h-screen flex flex-col justify-between md:justify-start md:items-center   sm:justify-start ">
        <div className="sm:flex sm:flex-col sm:items-center">
          <h2 className="title " data-aos="fade-down">
            {Projects.title}
          </h2>
          <h4 className="subtitle" data-aos="fade-down">
            {Projects.subtitle}
          </h4>
          <br />
        </div>
        <div className="flex items-center lg:flex-row flex-col-reverse gap-5  mb-5 md:pt-24 pt-0 ">
          
          <Swiper
            pagination={{
              clickable: true,
            }}
            data-aos="fade-left"
            spaceBetween={20}
            modules={[Pagination]}
            className="rounded-3xl pb-16  w-[90vw] md:max-w-xl  drop-shadow-primary self-start   "
          >
            {Projects.project_content.map((content, i) => (
              <SwiperSlide
                key={i}
                className="bg-white rounded-3xl p-5 border-b-8 border-[#FAF9FD] h-fit "
              >
                <img src={content.image} alt="..." className="w-[100%]" />
                <div className="flex flex-col gap-1 mt-2">
                  <h5 className="font-bold font-Poppins">{content.title}</h5>
                  <li><a href={content.link}>{content.link}</a></li>
                 <button className="font-bold  text-gray self-end" >
                    READ MORE
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Projects;
