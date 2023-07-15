import { createElement, useRef } from "react";
import { content } from "../Content";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import resume from "../assets/images/touheedraza 1.pdf"
const Contact = () => {
  const { Contact } = content;
  const form = useRef();

  // Sending Email
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
      'service_piif8ze', 'template_fsssl1t', form.current, '1anBBjQelLCObdTwy'
      )
      .then(
        (result) => {
          console.log(result.text);
          // Clear all input field values
          form.current.reset();
          // Success toast message
          toast.success("Email send Successfully");
        },
        (error) => {
          console.log(error.text);
          toast.error(error.text);
        }
      );
  };

  return (
    <section className="bg-cyan text-white" id="contact">
      <Toaster />
      <div className="md:container px-5 py-14">
        <h2 className="title !text-red-700" data-aos="fade-down">
          {Contact.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {Contact.subtitle}
        </h4>
        <br />
        <div className="flex gap-10 md:flex-row flex-col ">
          <form
            ref={form}
            onSubmit={sendEmail}
            data-aos="fade-up"
            className="flex-1 flex flex-col gap-5 "
          >
            {/* Input Name as same as email js templates values */}
            <input
              type="text"
              name="from_name"
              placeholder="Name"
              required
              className="sm:w-[90vw] md:w-[40vw] p-3 rounded rounded-r-xl shadow-xl  text-black bg-white"
            />
            <input
              type="email"
              name="user_email"
              pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
              placeholder="Email Id"
              required
              className=" sm:w-[90vw]  md:w-[40vw] p-3 rounded shadow-xl text-black bg-white"
            />
            <textarea
              name="message"
              placeholder="Message"
              className=" sm:w-[90vw]  md:w-[40vw] shadow-xl p-3 rounded h-44 text-black bg-white"
              required
            ></textarea>
            <button
              className=" btn  self-start
             text-dark_primary shadow-xl ml-4 md:ml-7 w-[90%] "
            >
              Submit
            </button>
        <button  className="text-red-800 font-bold rounded-sm  shadow-xl text-2xl bg-zinc-200  ml-4 md:ml-7 w-[90%]  hover:text-black "><a href={resume} download="touheedraza1">Resume</a>
            </button>
            
          </form>
          <div className="flex-1 flex flex-col gap-5 sm:px-10 text-2xl md:px-10 md:text-3xl md:pl-0">
            {Contact.social_media.map((content, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 430}
                className="flex items-center gap-2 "
              >
                <h4 className=" text-red-900 shadow-xl rounded-xl bg-white cursor-pointer  hover:rotate-12">{createElement(content.icon)}</h4>
                <a className="font-Poppins text-black bg-red-500 shadow-xl" href={content.link} target="_blank">
                  {content.text}
                </a>


                
              </div>
            ))}
          </div>
          
          <div>
            
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;
