// AboutUs.jsx
import React from "react";
import s from './AboutUs.module.css';
import iconoIn from "../../assets/Linkedin.png";
import iconoGit from "../../assets/github.png";
import iconoCv from "../../assets/iconCv.png";
import { SiReact, SiRedux, SiNodedotjs, SiHtml5, SiCss3, SiJavascript, SiGit, SiPostgresql, SiSequelize, SiGithub, SiVite, SiFirebase, SiTailwindcss, SiTrello, SiFigma, SiMercadopago } from 'react-icons/si';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Andrea Buldorini",
      photoUrl: "https://avatars.githubusercontent.com/u/101751883?v=4",
      description: "Full Stack web developer.",
      contacto: "Contáctame:",
      linkedinUrl: "https://www.linkedin.com/in/andrea-soledad-buldorini-462690113/",
      githubUrl: "https://github.com/abuldori",
      linkedinIcon: iconoIn,
      githubIcon: iconoGit,
      iconoCv: iconoCv,
      cvUrl: "",
    },
    {
      name: "Jonathan Fernandez",
      photoUrl: "https://avatars.githubusercontent.com/u/133897746?v=4",
      description: "Full Stack web developer.",
      contacto: "Contáctame:",
      linkedinUrl: "https://www.linkedin.com/in/jonathan-fernandez-65a959277/",
      githubUrl: "https://github.com/JonnyFernandez",
      linkedinIcon: iconoIn,
      githubIcon: iconoGit,
      iconoCv: iconoCv,
      cvUrl: "",
    },
  ];

  const shuffledTeamMembers = [...teamMembers].sort(() => Math.random() - 0.5);
  const teamMemberCards = shuffledTeamMembers.map((member) => (
    <div key={member.name} className={s.teamMemberCard}>
      <div className={s.teamMember}>
        <img src={member.photoUrl} alt={member.name} className={s.memberPhoto} />
        <div className={s.memberDetails}>
          <h2 className={s.memberName}>{member.name}</h2>
          <p className={s.memberDescription}>{member.description}</p>
        </div>
        <div className={s.memberLinks}>
          <a className={s.link} href={member.linkedinUrl} target="_blank">
            <img src={member.linkedinIcon} alt="LinkedIn" className={s.icon} />
          </a>
          <a className={s.link} href={member.githubUrl} target="_blank">
            <img src={member.githubIcon} alt="Github" className={s.icon} />
          </a>
          {member.cvUrl && (
            <a className={s.link} href={member.cvUrl} target="_blank" download>
              <img src={member.iconoCv} alt="Curriculum Vitae" className={s.icon} />
            </a>
          )}
        </div>
      </div>
    </div>
  ));

  return (
    <div className={s.aboutSection}>
      <h1 className={s.sectionHeading}>¿QUIENES SOMOS?</h1>
      <p className={s.sectionText}>
      Somos colegas y amigos apasionados por la programación, graduados del bootcamp de Henry. Unidos por el deseo de transformar nuestra dedicación en una exitosa carrera profesional. Enfocados en la excelencia tecnológica, creamos soluciones prácticas e innovadoras para las necesidades de nuestros usuarios. Nuestras habilidades técnicas y creativas nos permiten destacarnos en el cambiante mundo de la tecnología.
      </p>
      <div className={s.teamMembers}>
        {teamMemberCards}
      </div>
      <div className={s.aboutSection}>
      <div className="w-full mt-1 font-medium text-gray-500 text-lg">
      <p className={s.sectionHeadingT}>Tecnologías utilizadas</p>
        <div className="flex items-center justify-center my-5">
          <Link to="https://es.react.dev" target="_blank" className={s.techLink}>
            <SiReact className={`${s.icon} text-3xl hover:scale-110 hover:text-blue-700`} />
          </Link>
          <Link to="https://redux.js.org" target="_blank" className={s.techLink}>
            <SiRedux className={`${s.icon} text-3xl hover:scale-110 hover:text-indigo-800`} />
          </Link>
          <Link to="https://nodejs.org/es" target="_blank" className={s.techLink}>
            <SiNodedotjs className={`${s.icon} text-3xl hover:scale-110 hover:text-indigo-800`} />
          </Link>
          <Link to="https://developer.mozilla.org/es/docs/Web/HTML" target="_blank" className={s.techLink}>
            <SiHtml5 className={`${s.icon} text-3xl hover:scale-110 mr-6 hover:text-indigo-800`} />
          </Link>
          <Link to="https://developer.mozilla.org/es/docs/Web/CSS" target="_blank" className={s.techLink}>
            <SiCss3 className={`${s.icon} text-3xl hover:scale-110 mr-6 hover:text-indigo-800`} />
          </Link>
          <Link to="https://developer.mozilla.org/es/docs/Web/JavaScript" target="_blank" className={s.techLink}>
            <SiJavascript className={`${s.icon} text-3xl hover:scale-110 mr-6 hover:text-indigo-800`} />
          </Link>
          <Link to="https://git-scm.com" target="_blank" className={s.techLink}>
            <SiGit className={`${s.icon} text-3xl hover:scale-110 mr-6 hover:text-indigo-800`} />
          </Link>
          <Link to="https://www.postgresql.org" target="_blank" className={s.techLink}>
            <SiPostgresql className={`${s.icon} text-3xl hover:scale-110 mr-6 hover:text-indigo-800`} />
          </Link>
          <Link to="https://sequelize.org" target="_blank" className={s.techLink}>
            <SiSequelize className={`${s.icon} text-3xl hover:scale-110 mr-6 hover:text-indigo-800`} />
          </Link>
          <Link to="https://github.com" target="_blank" className={s.techLink}>
            <SiGithub className={`${s.icon} text-3xl hover:scale-110 mr-6 hover:text-indigo-800`} />
          </Link>
          <Link to="https://vitejs.dev" target="_blank" className={s.techLink}>
            <SiVite className={`${s.icon} text-3xl hover:scale-110 mr-6 hover:text-indigo-800`} />
          </Link>
          <Link to="https://trello.com" target="_blank" className={s.techLink}>
            <SiTrello className={`${s.icon} text-3xl hover:scale-110 mr-6 hover:text-blue-500`} />
          </Link>
          <Link to="https://www.figma.com/" target="_blank" className={s.techLink}>
            <SiFigma className={`${s.icon} text-3xl hover:scale-110 mr-6 hover:text-blue-500`} />
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AboutUs;


