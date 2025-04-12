// Skills icons - https://icon-sets.iconify.design/
import { Icon } from "@iconify/react";


// Hero Images (add your images to the /images directory with the same names)
import HeroLight from "./images/hero-light.jpg";
import HeroDark from "./images/Fondopantalla.png";

// Projects Images (add your images to the images directory and import below)
import Logo from "./images/Logo_JAH.png";
import LogoJAH from "./images/Logo_JAH.png";
import LogoVIIRUS from "./images/VIIRUS_logo.png";
import LogoMet from "./images/Metagenomics.png";
import LogoMet2 from "./images/Metagenomics2.png";
import LogoRNASeq from "./images/RNASeq.png";

/* START HERE
 **************************************************************
  Add your GitHub username (string - "YourUsername") below.
*/
export const githubUsername = "JavierArranzHerrero";;

// Navbar Logo image
export const navLogo = LogoJAH;

/* Main
 ************************************************************** 
  Add a custom blog icon or update the hero images for the Main section.
*/
export const Blog = LogoVIIRUS;

// Hero images (imported above - lines 8-9)
export { HeroLight as Light };
export { HeroDark as Dark };

/* About Me
 **************************************************************
  Add a second paragraph for the about me section.
*/
export const moreInfo =
  "I am a  PhD scientist with +4 years of experience in research in Microbiology and Virology, with a particular focus on computational biology and Next Generation Sequencing (NGS).";

/* Skills
 ************************************************************** 
  Add or remove skills in the SAME format below, choose icons here - https://icon-sets.iconify.design/
*/
export const skillData = [
  {
    id: 1,
    skill: <Icon icon="carbon:covariate" className="display-4" />,
    name: "NGS",
  },
  {
    id: 2,
    skill: <Icon icon="mdi:language-r" className="display-4" />,
    name: "R and R-Shiny",
  },
  {
    id: 3,
    skill: <Icon icon="mdi:language-python" className="display-4" />,
    name: "Python",
  },
  {
    id: 4,
    skill: <Icon icon="mdi:linux" className="display-4" />,
    name: "Linux",
  },
  {
    id: 5,
    skill: <Icon icon="simple-icons:nextflow" className="display-4" />,
    name: "Nextflow",
  },
  {
    id: 6,
    skill: <Icon icon="mdi:database" className="display-4" />,
    name: "RNASeq",
  },
  {
    id: 7,
    skill: <Icon icon="carbon:edge-cluster" className="display-4" />,
    name: "Metagenomics",
  },
  {
    id: 8,
    skill: <Icon icon="akar-icons:redux-fill" className="display-4" />,
    name: "WGS",
  },
  {
    id: 9,
    skill: <Icon icon="fa6-brands:square-github" className="display-4" />,
    name: "GitHub",
  },
  {
    id: 10,
    skill: <Icon icon="akar-icons:devices" className="display-4" />,
    name: "Meta-analyses",
  },
  {
    id: 11,
    skill: <Icon icon="akar-icons:people-group" className="display-4" />,
    name: "Laboratoy-experience",
  },
  {
    id: 12,
    skill: <Icon icon="akar-icons:file" className="display-4" />,
    name: "Oral and Written Skills",
  },
];

// Resume link (string - "https://YourResumeUrl") - I am using CloudFront to share my resume (https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
export const resume = "/CV_JavierArranz.pdf";

/* Projects
 ************************************************************** 
  List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
*/
export const filteredProjects = ["01-VIIRUS-Project", "02-Swine-microbiota", "03-Bacterial-Coinfections"];

// Replace the defualt GitHub image for matching repos below (images imported above - lines 7-8)
export const projectCardImages = [
  {
    name: "01-VIIRUS-Project",
    image: LogoVIIRUS,
  },
  {
    name: "02-Swine-microbiota",
    image: LogoMet,
  },
  {
    name: "03-Bacterial-Coinfections",
    image: LogoRNASeq,
  },
];

/* Contact Info
 ************************************************************** 
  Add your formspree endpoint below.
  https://formspree.io/
*/
export const formspreeUrl = "https://formspree.io/f/xvgklqvk";

// Footer icons theme (light or dark)
export const footerTheme = "dark";
