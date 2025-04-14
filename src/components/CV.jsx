import React from "react";
import { Element } from "react-scroll";
import { Button, Col, Container, Row } from "react-bootstrap";
import Title from "./Title";
import "./CVTimeline.css"; // Lo creamos ahora abajo
import { skillData, resume } from "../config";
// State
import { useSelector } from "react-redux";
import { selectMode } from "../app/appSlice";

const timelineData = [

  {
    section: "Work Experience",
    items: [
      {
        date: "November 2019 – March 2024",
        title: "PFIS Predoctoral Researcher",
        location: "Instituto de Salud Carlos III - Majadahonda, Madrid (Spain)",
        description: [
          "Simultaneously led multiple projects, leading +5 of them and collaborating in +10 side projects. ",
	  "Optimized RNA-seq and bacterial WGS/metagenomics pipelines, developing Shiny-based reporting tools in R for rapid analysis, and html reports for data sharing.",
	  "Applied bioinformatics to drug discovery, protein structure analysis, and conducted two meta-analyses on Real-World Evidence for influenza, vaccination, incidence, and prevalence."
        ]
      },
      {
        date: "April 2023 – July 2023",
        title: "Visiting Researcher",
        location: "Icahn School of Medicine at Mount Sinai - New York, NY (USA)",
        description: [
          "Designed and developed a mouse In vivo model of Coinfection and Superinfection with Influenza virus and Streptococcus pneumoniae."

        ]
      },
      {
        date: "May 2021 – July 2021",
        title: "Assistant Researcher",
        location: "VIIRUS group at the University San Pablo CEU - Boadilla del Monte, Madrid (Spain)",
        description: [
          "Assisted in the design and optimization of protocols.",
          "Obtention and analysis of samples by qPCR, WesternBlot, ELISA, etc."
        ]
      },
      {
        date: "May 2019 – July 2019",
        title: "Intern at the Technology Transfer Office",
        location: "Poslky Center for Entrepreneurship and Innovation",
        description: [
          "Evaluated and transformed innovative ideas into marketable products, assessing their commercial potential and development strategy."
        ]
      }
    ]
  },
  {
    section: "Education",
    items: [
      {
        date: "2019 – 2020",
        title: "MSc. in Bioinformatics",
        location: "University of Valencia",
        description: []
      },
      {
        date: "2014 – 2018",
        title: "BSc. in Biotechnology",
        location: "University of the Balearic Islands",
        description: []
      }
    ]
  }
];

const TimelineItem = ({ item, index }) => {
  const isLeft = index % 2 === 0;

  return (
    <div className={`timeline-item ${isLeft ? "left" : "right"}`}>
      <div className="content">
        <span className="date">{item.date}</span>
        <h4>{item.title}</h4>
        <p className="location">{item.location}</p>
        <ul>
          {item.description.map((line, idx) => (
            <li key={idx}>{line}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const CV = () => {
const theme = useSelector(selectMode);

  return (
    <Element name="CV" id="cv">
      <section className="section">
        <Container>
          <Title size="h2" text="Curriculum Vitae" />
	    <p
  style={{
    fontSize: "1.1rem",
    marginTop: "1.5rem",
    marginBottom: "1.5rem",
    maxWidth: "1950px",
    textAlign: "Left",
    marginLeft: "0.1rem",
    marginRight: "auto",
    color: theme === "light" ? "#333" : "#ccc",
  }}
>
  I am a bioinformatics researcher with experience in computational biology, data analysis, and infectious disease genomics. I combine scientific rigor with software tools and data-driven insights to improve healthcare outcomes.
</p>

{resume && (
  <div className="text-center my-4">
    <a href={resume} download>
      <Button
        size="lg"
        variant={theme === "light" ? "outline-grey-dark" : "outline-light"}
        className="shadow-sm"
      >
        Download my CV
      </Button>
    </a>
  </div>
)}
          <div className="timeline-container">
            {timelineData.map((section, i) => (
              <div key={i}>
                <h3 className="timeline-section-title">{section.section}</h3>
                {section.items.map((item, idx) => (
                  <TimelineItem key={idx} item={item} index={idx} />
                ))}
              </div>
            ))}
          </div>
        </Container>
      </section>
    </Element>
  );
};

export default CV;
