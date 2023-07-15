import { content } from "../Content";

const Services = () => {
  const { certificates } = content;
  return (
    <section id="services" className="bg-bg_light_primary  ">
      <div className="md:container px-5 py-14">
        <h2 className="title" data-aos="fade-down">
          {certificates.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {certificates.subtitle}
        </h4>
        <br />
        <div className=" xs:grid-cols-1 xs:w-[80vw]   sm:grid-cols-1 sm:w-[80vw]  sm:ml-16  grid md:grid-cols-1 md:w-full lg:grid-cols-3  gap-5 justify-between flex-wrap group  ">
          {certificates.certificate_content.map((content, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 600}
              className="min-w-[14rem] duration-300 cursor-pointer border-2 border-slate-200 rounded-xl text-center  p-6 flex-1 group-hover:blur-sm 
              hover:!blur-none bg-cyan-200"
            >
              <img src={content.logo} alt="..." className="mx-auto" />
              <h6 className="my-3">{content.title}</h6>
              <img className="my-2  h-[40vh] w-[80vw] " src={content.certificate} alt="img/cs1" />
              {/* <p className="leading-7">{content.para}</p> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
