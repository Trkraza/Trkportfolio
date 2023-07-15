// import images

// import Hero_cartoon from "./assets/images/Hero/cartoon.jpg";
// import Me from "./assets/images/Hero/Me.jpeg";

import hm from "./assets/images/Skills/html5.png";
import cs from "./assets/images/Skills/css3.avif";
import boot from "./assets/images/Skills/bootstrap.png";
import reac from "./assets/images/Skills/react.png";
import tail from "./assets/images/Skills/tailwindc.png";
import mon from "./assets/images/Skills/mongo.png";
import et from "./assets/images/Skills/etherium.jpg";
import sc from "./assets/images/Skills/sass.png";
import sol from "./assets/images/Skills/sol.png";
import jas from "./assets/images/Skills/js.png";
import ht from "./assets/images/Skills/ht.png";
// import eth from "./assets/images/Skills/etherjs.png";

import services_logo1 from "./assets/images/Certificate/logo1.png";
import services_logo2 from "./assets/images/Certificate/logo2.png";
import services_logo3 from "./assets/images/Certificate/logo3.png";
import certi1 from "./assets/images/Certificate/certi1.jpeg"
import certi5 from "./assets/images/Certificate/certi5.jpeg";
import certi2 from "./assets/images/Certificate/certi2.jpeg";
import certi3 from "./assets/images/Certificate/certi3.jpeg";
import certi4 from "./assets/images/Certificate/certi4.jpeg";
import certi6 from "./assets/images/Certificate/certi6.jpeg";



import proj1 from "./assets/images/projects/proj1.jpg";
import proj2 from "./assets/images/projects/proj2.jpg";
import proj3 from "./assets/images/projects/proj3.jpg";







// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram, BsLinkedin } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import { AiFillBulb } from "react-icons/ai";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#about",
      icon: BiUser,
    },
    {
      link: "#skills",
      icon: AiFillBulb,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Front End Developer",
    firstName: "TOUHEED",
    LastName: "RAZAQ",
    btnText: "Resume",
    // image: Me,
    hero_content: [
      {
        count: "1.5+",
        text: "A Successfull Experience As Freelancer",
      },
      {
        count: "5+",
        text: "Projects Worked Till Now",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "Html5",
        para: "HyperText Markup Language",
        logo: hm,
      },
      {
        name: "Css3",
        para: "Cascading Style Sheets",
        logo: cs,
      },
      {
        name: "Bootstrap5",
        para: "Css Framework",
        logo: boot,
      },
      {
        name: "Tailwind Css",
        para: "Css Framework",
        logo: tail,
      },
      {
        name: "Sass",
        para: "Syntactically Awesome Stylesheet",
        logo: sc,
      },
      {
        name: "Javascript",
        para: "Programming Language Used For Web",
        logo: jas,
      },
      {
        name: "React Js",
        para: "Javascript Framework/Library",
        logo: reac,
      },
      {
        name: "Mongo Db",
        para: " non-relational database ",
        logo: mon,
      },
      {
        name: "Blockchain(Etherium)",
        para: " type of distributed database or ledger",
        logo: et,
      },
      {
        name: "Solidity",
        para: "for implementing smart contracts",
        logo: sol,
      },
      {
        name: "Hardhat ",
        para: "Ethereum development environment just like Truffle",
        logo: ht,
      },
      {
        name: "Ether js ",
        para: "interacting with the Ethereum blockchain",
        logo: et,
      },

    ],
    icon: MdArrowForward,
  },

  
  certificates: {
    title: "Certificates",
    subtitle: "My Certificates ",
    certificate_content: [
      {
        title: "Html5",
        certificate: certi1,
        logo: services_logo1,
      },
      {
        title: "Css3",
        certificate: certi2,
        logo: services_logo2,
      },
      {
        title: "Bootstrap",
        certificate: certi3,
        logo: services_logo3,
      },
      {
        title: "Tailwind css",
        certificate: certi3,
        logo: services_logo1,
      },
      {
        title: "Sass",
        certificate: certi6,
        logo: services_logo2,
      },
      {
        title: "Javascript",
        certificate: certi4,
        logo: services_logo3,
      },
      {
        title: "React Js",
        certificate: certi5,
        logo: services_logo1,
      },
      {
        title: "React Js",
        certificate: certi5,
        logo: services_logo1,
      },
      {
        title: "React Js",
        certificate: certi5,
        logo: services_logo1,
      },
      
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    
    // image:Me,
    project_content: [
      {
        title: "RK Fashions",
        image: proj1,
        link:"https://rkfashions.netlify.app/",
      },
      {
        title: "Coolstar",
        image: proj2,
        link:"https://coolstar.netlify.app/",
      },
      {
        title: "Nike Store Practice With Youtube",
        image: proj3,
        link:"not yet deployed",
      },
    ],
  },
  Education: {
    title: "Studies",
    subtitle: "MY Education Details",
    education_content: [
      {
        review:
          "“Kristu Jayanti College”",
        // img: Masscard,
        name: "BCA(Graduation)",
        passout:"2021",
        grade:"8.45(CGPA)",
      },
      {
        review:
          "“Narayana Junior College”",
        // img: Masscard,
        name: "PUC(11&12)",
        passout:"2018",
        grade:"8.5(CGPA)",
      },
      {
        review:
          "“Chinmaya Vidyalaya”",
        // img: Masscard,
        name: "SSLC(10th)",
        passout: "2016",
        grade:"8.2(CGPA)",
      },
      
    ],
  },
  Hireme: {
    title: "About Me",
    subtitle: "Its Touheed Razaq!",
    // image1: Hireme_pic2,
    // image2: Hireme_pic2,
  
    para: "Hii, I AM A Front End Developer, Working As A Freelancer. Searching For A Great Job In Youre Company. And Eagerly Going Towards Backend To Become A Successful Full Stack Developer.",
    thanks: "ThankYou For Reaching Me Here",
    btnText:"Hire Me"
  },
  Contact: {
    title: "Connect Me",
    subtitle: "BE IN TOUCH",
    social_media: [
      {
        text: "trkraza0204@gmail.com",
        icon: GrMail,
        link: "mailto:trkraza0204@gmail.com",
      },
      {
        text: "+91 9502291874",
        icon: MdCall,
        link: "calmeat/9502291874",
      },
      {
        text: "trkrraza",
        icon: BsLinkedin,
        link: "https://github.com/Trkraza",
      },
    
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2023",
  },
};
