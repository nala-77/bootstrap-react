// for css
import "./App.css";

// for components
import MiniNavbar from "./components/MiniNavbar/MiniNavbar";
import MainNavbar from "./components/MainNavbar/MainNavbar";
import About from "./components/About/About";
import Appointment from "./components/Appointment/Appointment";
import Details from "./components/Details/Details";
import Emergency from "./components/Emergency/Emergency";
import MiniCards from "./components/MiniCards/MiniCards";
import HeroCarousel from "./components/HeroCarousel/HeroCarousel";
import Laboratory from "./components/Laboratory/Laboratory";
import Department from "./components/Department/Department";
import Doctors from "./components/Doctors/Doctors";
import Services from "./components/Services/Services";
import AccordionSection from "./components/AccordionSection/AccordionSection";
import Pricing from "./components/Pricing/Pricing";
import Contact from "./components/Contact/Contact";
import Testimonial from "./components/Testimonial/Testimonial";
import Footer from "./components/Footer/Footer";

// for images
import logo from './../public/Images/logo.png'
import img1 from "./../public/Images/hero-carousel/hero-carousel-1.jpg";
import img2 from "./../public/Images/hero-carousel/hero-carousel-2.jpg";
import img3 from "./../public/Images/hero-carousel/hero-carousel-3.jpg";
import aboutImg from "./../public/Images/about.jpg";
import labImg from "./../public/Images/features.jpg";
import docOne from "./../public/Images/doctors/doctors-1.jpg";
import docTwo from "./../public/Images/doctors/doctors-2.jpg";
import docThree from "./../public/Images/doctors/doctors-3.jpg";
import docFour from "./../public/Images/doctors/doctors-4.jpg";
import tabImg1 from "./../public/Images/department/tab1.jpg";
import tabImg2 from "./../public/Images/department/tab2.jpg";
import tabImg3 from "./../public/Images/department/tab3.jpg";
import tabImg4 from "./../public/Images/department/tab4.jpg";
import tabImg5 from "./../public/Images/department/tab5.jpg";
import testImg1 from "./../public/Images/testimonials/testimonials-1.jpg";
import testImg2 from "./../public/Images/testimonials/testimonials-2.jpg";
import testImg3 from "./../public/Images/testimonials/testimonials-3.jpg";
import galImg1 from "./../public/Images/gallery/gallery-1.jpg";
import galImg2 from "./../public/Images/gallery/gallery-2.jpg";
import galImg3 from "./../public/Images/gallery/gallery-3.jpg";
import galImg4 from "./../public/Images/gallery/gallery-4.jpg";
import galImg5 from "./../public/Images/gallery/gallery-5.jpg";
import galImg6 from "./../public/Images/gallery/gallery-6.jpg";
import galImg7 from "./../public/Images/gallery/gallery-7.jpg";
import galImg8 from "./../public/Images/gallery/gallery-8.jpg";

// for icons
import { faClock, faHospital } from "@fortawesome/free-regular-svg-icons";
import {
  faAward,
  faDna,
  faEnvelope,
  faFlask,
  faHandHoldingMedical,
  faHeartPulse,
  faHospitalUser,
  faLocationDot,
  faLungs,
  faMobileScreen,
  faNotesMedical,
  faPhone,
  faPills,
  faStaffSnake,
  faSuitcaseMedical,
  faThermometer,
  faUserDoctor,
  faWheelchair,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Gallery from "./components/Gallery/Gallery";

const icon1 = faClock;
const icon2 = faMobileScreen;

// data for navbarOne
const miniNavbarData = [
  {
    icon: icon1,
    link: "home",
    text: "Monday - Saturday, 8AM to 10PM",
  },
  {
    icon: icon2,
    link: "home",
    text: "Call us Now +1  5589  55488 55",
  },
];

function App() {
  // data for navbarTwo
  const brand = { name: "medicio", img: logo };
  const links = [
    {
      id: "home",
      link: "home",
    },
    {
      id: "about",
      link: "about",
    },
    {
      id: "services",
      link: "services",
    },
    {
      id: "departments",
      link: "departments",
    },
    {
      id: "doctors",
      link: "doctors",
    },
    {
      id: "contact",
      link: "contact",
    },
  ];

  const dropdown = [
    {
      link: "whatever link",
      name: "dropdown 1",
    },
    {
      link: "whatever link",
      name: "dropdown 2",
    },
    {
      link: "whatever link",
      name: "dropdown 3",
    },
  ];
  // data for hero 

const slide = [
  {
    img: img1,
    title: "temporibus autem quibusdam",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia sed consectetur asperiores voluptatum optio illum dignissimos adipisci, et quaerat tenetur maxime nihil architecto neque deserunt necessitatibus est doloribus atque. A!",
  },
  {
    img: img2,
    title: "second slide",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, provident? Nulla dolore ipsum quaerat fugiat nemo distinctio itaque corporis modi, illum sapiente at voluptatum inventore minima quia accusantium eveniet sint",
  },
  {
    img: img3,
    title: "third slide",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, provident? Nulla dolore ipsum quaerat fugiat nemo distinctio itaque corporis modi, illum sapiente at voluptatum inventore minima quia accusantium eveniet sint",
  },
];
  // data for footer
  const details = [
    {
      name: "phone",
      to: "home",
      link: "+1 5589 5548 55",
    },
    {
      name: "email",
      to: "home",
      link: "info@example.com",
    },
  ];

  const icons = [
    {
      link: "home",
      icon: faXTwitter,
    },
    {
      link: "home",
      icon: faFacebook,
    },
    {
      link: "home",
      icon: faInstagram,
    },
    {
      link: "home",
      icon: faLinkedin,
    },
  ];

  const info = [
    {
      title: "useful links",
      list: [
        {
          link: "home",
          li: "home",
        },
        {
          link: "home",
          li: "about us",
        },
        {
          link: "home",
          li: "services",
        },
        {
          link: "home",
          li: "terms of service",
        },
        {
          link: "home",
          li: "privacy policy",
        },
      ],
    },
    {
      title: "our services",
      list: [
        {
          link: "home",
          li: "web design",
        },
        {
          link: "home",
          li: "web development",
        },
        {
          link: "home",
          li: "product management",
        },
        {
          link: "home",
          li: "marketing",
        },
        { li: "graphic design" },
      ],
    },
    {
      title: "nobis illum",
      list: [
        {
          link: "home",
          li: "ipsum",
        },
        {
          link: "home",
          li: "laudantium dolorum",
        },
        {
          link: "home",
          li: "dinera",
        },
        {
          link: "home",
          li: "trodelas",
        },
        {
          link: "home",
          li: "flexo",
        },
      ],
    },
    {
      title: "our services",
      list: [
        {
          link: "home",
          li: "web design",
        },
        {
          link: "home",
          li: "web development",
        },
        {
          link: "home",
          li: "product management",
        },
        {
          link: "home",
          li: "marketing",
        },
        {
          link: "home",
          li: "graphic design",
        },
      ],
    },
  ];

  // data for about section
  const aboutList = [
    "Ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "Duis aute irure dolor in reprehenderit in voluptate velit",
    "Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta soracalaperda mastrio dolore eu fugiat nulla pariatur",
  ];

  // data for appoientment inputs
  const inputs = [
    {
      type: "text",
      placeholder: "Your Name",
    },
    {
      type: "email",
      placeholder: "Your Email",
    },
    {
      type: "tel",
      placeholder: "Your Phone",
    },
    {
      type: "date",
      placeholder: "",
    },
  ];

  const select = [
    {
      select_title: "Select Department",
      options: [
        {
          option: "Cardiology",
          value: "cardiology",
        },
        {
          option: "Neurology",
          value: "neurology",
        },
        {
          option: "Orthopedics",
          value: "orthopedics",
        },
      ],
    },
    {
      select_title: "Select Doctors",
      options: [
        {
          option: "dr.smith",
          value: "smith",
        },
        {
          option: "dr.mohammad",
          value: "mohammad",
        },
        {
          option: "dr.nahla",
          value: "nahla",
        },
      ],
    },
  ];

  // data for details section
  const detailsCards = [
    {
      icon: faHeartPulse,
      title: "lorem ipsum",
      desc: "voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi",
    },
    {
      icon: faPills,
      title: "sed ut perspici",
      desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
    },
    {
      icon: faThermometer,
      title: "Magni Dolores",
      desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia",
    },
    {
      icon: faDna,
      title: "nemo Enim",
      desc: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis",
    },
  ];

  // data for minicards section
  const miniCards = [
    {
      icon: faUserDoctor,
      title: "25",
      desc: "doctors",
    },
    {
      icon: faHospital,
      title: "15",
      desc: "departments",
    },
    {
      icon: faFlask,
      title: "8",
      desc: "research labs",
    },
    {
      icon: faAward,
      title: "150",
      desc: "awards",
    },
  ];

  // data for accordion section
  const accordion_data = [
    {
      question: "Accordion Item #1",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor in",
    },
    {
      question: "Accordion Item #2",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor in",
    },
    {
      question: "Accordion Item #3",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor in",
    },
    {
      question: "Accordion Item #4",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor in",
    },
    {
      question: "Accordion Item #5",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor in",
    },

    {
      question: "Accordion Item #6",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor in",
    },
    {
      question: "Accordion Item #7",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor in",
    },
  ];
  // data for laboratory section
  const labData = [
    {
      icon: faHandHoldingMedical,
      title: "Lorem Ipsum",
      desc: "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident",
    },
    {
      icon: faSuitcaseMedical,
      title: "Nemo Enim",
      desc: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque",
    },
    {
      icon: faStaffSnake,
      title: "Dine Pad",
      desc: "Explicabo est voluptatum asperiores consequatur magnam. Et veritatis odit. Sunt aut deserunt minus aut eligendi omnis",
    },
    {
      icon: faLungs,
      title: "Tride clov",
      desc: "Est voluptatem labore deleniti quis a delectus et. Saepe dolorem libero sit non aspernatur odit amet. Et eligendi",
    },
  ];

  // data for department section
  const tabs = [
    {
      eventKey: "Cardiology",
      link: "Cardiology",
      title: "Cardiology",
      descOne:
        "It encompasses a wide range of disorders, including heart failure, arrhythmias, and coronary artery disease. Cardiologists use specialized testing and medical procedures to help prevent, manage, and treat cardiovascular diseases, improving patients' quality of life.",
      descTwo:
        "The field of cardiology focuses on the diagnosis and treatment of heart conditions.",
      img: tabImg5,
    },
    {
      eventKey: "Neurology",
      link: "Neurology",
      title: "Neurology",
      descOne:
        "Neurologists treat conditions like epilepsy, strokes, and multiple sclerosis, aiming to improve patients' neurological health.",
      descTwo:
        "Neurology deals with disorders of the nervous system, including the brain and spinal cord.",
      img: tabImg2,
    },
    {
      eventKey: "Hepatology",
      link: "Hepatology",
      title: "Hepatology",
      descOne:
        "Hepatology studies the liver and related organs, managing diseases like hepatitis and liver cirrhosis.",
      descTwo: "Early diagnosis is key to preventing complications.",
      img: tabImg3,
    },
    {
      eventKey: "Pediatrics",
      link: "Pediatrics",
      title: "Pediatrics",
      descOne:
        "Pediatricians manage childhood illnesses, promoting healthy growth through preventive care and treatment of various conditions.",
      descTwo:
        "Pediatrics focuses on children's health, from infancy to adolescence.",
      img: tabImg4,
    },
    {
      eventKey: "Ophthalmologists",
      link: "Ophthalmologists",
      title: "Ophthalmologists",
      descOne:
        "Exercitationem nostrum omnis. Ut reiciendis repudiandae minus. Omnis recusandae ut non quam ut quod eius qui. Ipsum quia odit vero atque qui quibusdam amet. Occaecati sed est sint aut vitae molestiae voluptate vel",
      descTwo: "Omnis blanditiis saepe eos autem qui sunt debitis porro quia.",
      img: tabImg1,
    },
  ];

  // data for doctors
  const doctors = [
    {
      title: "walter white",
      text: "chief medical officer",
      img: docOne,
    },
    {
      title: "sarah jhonson",
      text: "anesthesicologist",
      img: docTwo,
    },
    {
      title: "william anderson",
      text: "cardiology",
      img: docThree,
    },
    {
      title: "amanda jepson",
      text: "neurosurgeon",
      img: docFour,
    },
  ];

  // data for services
  const services = [
    {
      icon: faHeartPulse,
      title: "Nesciunt Mete",
      desc: "Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.",
    },
    {
      icon: faPills,
      title: "Eosle Commodi",
      desc: "Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem",
    },
    {
      icon: faHospitalUser,
      title: "Ledo Markt",
      desc: "Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti.",
    },
    {
      icon: faDna,
      title: "Asperiores Commodit",
      desc: "Non et temporibus minus omnis sed dolor esse consequatur. Cupiditate sed error ea fuga sit provident adipisci neque.",
    },
    {
      icon: faWheelchair,
      title: "Velit Doloremque",
      desc: "Cumque et suscipit saepe. Est maiores autem enim facilis ut aut ipsam corporis aut. Sed animi at autem alias eius labore.",
    },
    {
      icon: faNotesMedical,
      title: "Dolori Architecto",
      desc: "Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque non et debitis iure. Corrupti recusandae ducimus enim.",
    },
  ];

  // data for pricing section
  const price_info = [
    {
      header: "free",
      price: "0",
      list: [
        {
          class: "",
          li: "Aida dere",
        },
        {
          class: "",
          li: "Nec feugiat nisl",
        },
        {
          class: "",
          li: "Nulla at volutpat dola",
        },
        {
          class: "linethrough",
          li: "Pharetra massa",
        },
        {
          class: "linethrough",
          li: "Massa ultricies mi",
        },
      ],
    },
    {
      header: "Business",
      price: "19",
      list: [
        {
          class: "",
          li: "Aida dere",
        },
        {
          class: "",
          li: "Nec feugiat nisl",
        },
        {
          class: "",
          li: "Nulla at volutpat dola",
        },
        {
          class: "",
          li: "Pharetra massa",
        },
        {
          class: "linethrough",
          li: "Massa ultricies mi",
        },
      ],
    },
    {
      header: "Developer",
      price: "29",
      list: [
        {
          class: "",
          li: "Aida dere",
        },
        {
          class: "",
          li: "Nec feugiat nisl",
        },
        {
          class: "",
          li: "Nulla at volutpat dola",
        },
        {
          class: "",
          li: "Pharetra massa",
        },
        {
          class: "",
          li: "Massa ultricies mi",
        },
      ],
    },
    {
      header: "Ultimate",
      price: "49",
      list: [
        {
          class: "",
          li: "Aida dere",
        },
        {
          class: "",
          li: "Nec feugiat nisl",
        },
        {
          class: "",
          li: "Nulla at volutpat dola",
        },
        {
          class: "",
          li: "Pharetra massa",
        },
        {
          class: "",
          li: "Massa ultricies mi",
        },
      ],
    },
  ];
  // data for contact
  const contactInfo = [
    {
      icon: faLocationDot,
      title: "Address",
      info: "A108 Adam Street, New York, NY 535022",
    },
    {
      icon: faPhone,
      title: "Call Us",
      info: "+1 5589 55488 55",
    },
    {
      icon: faEnvelope,
      title: "Email Us",
      info: "info@example.com",
    },
  ];

  // data for testimonial
  const testimonialCard1 = [
    {
      img: testImg1,
      qoute:
        "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.",
      title: "Saul Goodman",
      subtitle: "Ceo & Founder",
    },
    {
      img: testImg2,
      qoute:
        "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.",
      title: "Sara Wilsson",
      subtitle: "Designer",
    },
    {
      img: testImg3,
      qoute:
        "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.",
      title: "Jena Karlis",
      subtitle: "Store Owner",
    },
  ];

  // data for gallery section
  const gallery_images = [
    galImg1,
    galImg2,
    galImg3,
    galImg4,
    galImg5,
    galImg6,
    galImg7,
    galImg8,
  ]
  return (
    <>
      <MiniNavbar data={miniNavbarData} />

      <MainNavbar
        brand={brand}
        navItems={links}
        dropdown={dropdown}
        dropdown_name="DROPDOWN"
        btn_title="Make an Appointment"
      />
      <HeroCarousel slide={slide}/>
      <Details detailsCards={detailsCards} />
      <Emergency
        heading="In an emergency? Need help now?"
        paraghraph="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        btn="Make an Appointment"
      />
      <About
        header="Voluptatem dignissimos provident quasi corporis voluptates sit assumenda."
        descOne="Lorem ipsum dolor sit amit, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore manga aligua"
        list={aboutList}
        descTwo="Uliamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehender in voluptate velit essa cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident"
        img={aboutImg}
      />
      <MiniCards miniCard={miniCards} />
      <Laboratory
        labInfo={labData}
        img={labImg}
        title="enim quis est voluptatibus aliquid consequatur fugiat"
        desc="Esse voluptas cumque vel exercitationem. Reiciendis est hic accusamus. Non ipsam et sed minima temporibus laudantium. Soluta voluptate sed facere corporis dolores excepturi"
      />
      <Services servicesCards={services} />
      <Appointment
        inputs_array={inputs}
        select_array={select}
        btn="Make an Appointment"
      />
      <Department tabs={tabs} />
      <Testimonial testimonialCard1={testimonialCard1} />
      <Doctors doctors={doctors} />
      <Gallery gallery_images={gallery_images}/>
      <Pricing pricingCards={price_info} />
      <AccordionSection accordion_array={accordion_data} />
      <Contact contactInfo={contactInfo} />
      <Footer
        main_title="medicio"
        address="A108 Adam Street newYork, NY535022"
        details={details}
        icons={icons}
        info={info}
      />
    </>
  );
}

export default App;
