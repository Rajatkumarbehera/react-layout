import analysis from "../assets/images/analysis.png";
import fortknox from "../assets/images/fortknox.png";
import zenocide from "../assets/images/zenocide.png";
import star from "../assets/star.svg";
import doradesign from "../assets/images/doradesign.png";
import silsila from "../assets/images/silsila.png";
import wave from "../assets/images/wave.png";
import people from "../assets/images/people.png";

const companies = [
  {
    image: doradesign,
    alt: "doradesign",
  },
  {
    image: wave,
    alt: "wave",
  },
  {
    image: silsila,
    alt: "silsila",
  },
];

const expertises = [
  {
    title: "Branding",
    description:
      "I create efficient, adaptable, and engaging websites. No predefined patterns. No sluggish, complex code. Webflow forms the foundation of my web development approach. I employ it to provide safe, top-notch bespoke websites.",
  },
  {
    title: "UI Design",
    description:
      "I create efficient, adaptable, and engaging websites. No predefined patterns. No sluggish, complex code. Webflow forms the foundation of my web development approach. I employ it to provide safe, top-notch bespoke websites.",
  },
  {
    title: "UX Design",
    description:
      "I comprehend and resolve digital product issues using a user-focused methodology. Investigation. compassion, and visual conveyance are a few techniques I apply to captivate and involve your users while fulfilling your business requirements",
  },
  {
    title: "Development",
    description:
      "I create user-friendly, adaptive, engaging websites. No cookie-cutters. No cumbersome. complex coding. Webflow forms the foundation of my web development approach, I employ it to produce safe, top-notch personalized websites.",
  },
];

const works = [
  {
    image: analysis,
    title: "Analysis Application",
    description:
      "With user-centered approach, the goals was to create an intuitive interface for enhanced financial intelligence.",

    platforms: ["FIGMA", "UX"],
  },
  {
    image: fortknox,
    title: "Forknox Application",
    description:
      "With user-centered approach, the goals was to create an intuitive interface for enhanced financial intelligence.",
    platforms: ["MOBILE", "WEB"],
  },
  {
    image: zenocide,
    title: "Zenocide Application",
    description:
      "With user-centered approach, the goals was to create an intuitive interface for enhanced financial intelligence.",
    platforms: ["APP", "WEB"],
  },
];

const experiences = [
  {
    role: "Lead Product Designer",
    company: "Fortknox",
    duration: "Mar 2022 - Oct 2023",
  },
  {
    role: "Intern Designer",
    company: "OmniSafe",
    duration: "Mar 2022 - Oct 2023",
  },
  {
    role: "UI Designer",
    company: "Doradesign",
    duration: "Mar 2022 - Oct 2023",
  },
  {
    role: "Frontend Developer",
    company: "OpacityAuthor",
    duration: "Mar 2022 - Oct 2023",
  },
];

const blogs = [
  {
    image: analysis,
    date: "Nov 9, 2023",
    title: "How UX works in web",
    platforms: ["UI", "UX"],
  },
  {
    image: fortknox,
    date: "Aug 18, 2023",
    title: "Case study - Analysis Application.",
    platforms: ["DESIGN", "PRINT"],
  },
  {
    image: zenocide,
    date: "Feb 16, 2023",
    title: "3 ways to develop your skill",
    platforms: ["FIGMA", "WEB"],
  },
];

const testimonials = [
  {
    image: people,
    name: "Floyd Miles",
    location: "eBay",
    review:
      "Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to employers. Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to employers.",
  },
  {
    image: people,
    name: "Jane Cooper",
    location: "Microsoft",
    review:
      "I was struggling to format my resume properly, but Synergy made it effortless. The templates and guidance are excellent! It significantly improved my job application success rate.",
  },
  {
    image: people,
    name: "Robert Fox",
    location: "Google",
    review:
      "Synergy provided the perfect resume template for my industry. The easy-to-use editor saved me a lot of time, and I landed interviews much faster than before!",
  },
];

const faqs = [
  {
    question: "What is your design process?",
    answer:
      "My design process typically involves four key phases: research, design, prototype, and test. In the research phase, I gather insights about the user and their needs. In the design phase, I create wireframes and visual designs that meet those needs. In the prototype phase, I create interactive models of the design for testing. In the test phase, I collect feedback from users to refine the design.",
  },
  {
    question: "What tools and software do you use for UX design?",
    answer:
      "My design process typically involves four key phases: research, design, prototype, and test. In the research phase, I gather insights about the user and their needs. In the design phase, I create wireframes and visual designs that meet those needs. In the prototype phase, I create interactive models of the design for testing. In the test phase, I collect feedback from users to refine the design.",
  },
  {
    question: "How do you measure the success of your UX designs?",
    answer:
      "My design process typically involves four key phases: research, design, prototype, and test. In the research phase, I gather insights about the user and their needs. In the design phase, I create wireframes and visual designs that meet those needs. In the prototype phase, I create interactive models of the design for testing. In the test phase, I collect feedback from users to refine the design.",
  },
];

const techs = [
  {
    image: star,
    text: "WEBFLOW",
  },
  {
    image: star,
    text: "FIGMA",
  },
  {
    image: star,
    text: "DESIGNER",
  },
  {
    image: star,
    text: "DEVELOPER",
  },
];

const socials = [
  {
    name: "Dribble",
    link: "/",
  },
  {
    name: "Behance",
    link: "/",
  },
  {
    name: "Twitter",
    link: "/",
  },
  {
    name: "Instagram",
    link: "/",
  },
];

export {
  companies,
  blogs,
  experiences,
  expertises,
  faqs,
  socials,
  techs,
  testimonials,
  works,
};
