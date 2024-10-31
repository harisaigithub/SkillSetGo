import React from "react";
import "./links.css";
import GitHubLogo from "./images/github-logo.png";
import LinkedInLogo from "./images/linkedin-logo.png";
import WebsiteLogo from "./images/website-logo.png";

const Links = () => {
  const personalLinks = [
    {
      name: "Connecting Techies 🚀",
      url: "https://whatsapp.com/channel/0029Var3z9f1dAw6z2Fhbn40",
    },
    {
      name: "My LINK TREE",
      url: "https://whatsapp.com/channel/0029Var3z9f1dAw6z2Fhbn40",
    },
  ];

  const googleLinks = [
    { name: "Chat GPT", url: "https://chat.openai.com/" },
    { name: "Bard", url: "https://bard.google.com/?hl=en&pli=1" },
    { name: "Go GPT", url: "https://gptgo.ai/?hl=en" },
    {
      name: "Google Drive",
      url: "https://drive.google.com/drive/my-drive?lfhs=2",
    },
    { name: "Outlook", url: "https://outlook.office.com/mail/" },
    { name: "Google Docs", url: "https://docs.google.com/" },
    { name: "Google Sheets", url: "https://sheets.google.com/" },
    { name: "Google Keep", url: "https://keep.google.com/" },
    { name: "OneDrive", url: "https://onedrive.live.com/" },
    { name: "Google Calendar", url: "https://calendar.google.com/" },
    { name: "Pinterest", url: "https://in.pinterest.com/" },
    { name: "Spotify", url: "https://open.spotify.com/" },
    { name: "Quora", url: "https://www.quora.com/" },
    { name: "Telegram", url: "https://web.telegram.org/k/" },
    { name: "Google Maps", url: "https://www.google.com/maps/" },
    { name: "Flipkart", url: "https://www.flipkart.com/" },
    { name: "Amazon", url: "https://www.amazon.com/" },
    { name: "Myntra", url: "https://www.myntra.com/" },
    { name: "Ajio", url: "https://www.ajio.com/" },
    { name: "PriceBefore", url: "https://www.pricebefore.com/" },
    { name: "Google Translate", url: "https://translate.google.com/" },
    { name: "Chess", url: "https://www.chess.com/" },
    { name: "Figma", url: "https://www.figma.com/" },
    { name: "Canva", url: "https://www.canva.com/" },
    { name: "BookMyShow", url: "https://in.bookmyshow.com/" },
  ];

  const dataLinks = [
    { name: "Digilocker", url: "https://www.digilocker.gov.in/" },
    {
      name: "Data Analyst - Khan Academy",
      url: "https://www.khanacademy.org/kmap/measurement-and-data-g/md220-data-and-statistics",
    },
    {
      name: "Google Cloud Data Engineering",
      url: "https://cloud.google.com/learn/training/data-engineering-and-analytics",
    },
    {
      name: "Top Software Companies 2022",
      url: "https://www.thesoftwarereport.com/the-top-100-software-companies-of-2022/",
    },
    { name: "Stackshare", url: "https://stackshare.io/" },
    {
      name: "Glassdoor",
      url: "https://www.glassdoor.co.in/Job/Home/recentActivity.html",
    },
    { name: "Indeed", url: "https://myjobs.indeed.com/applied" },
    { name: "LinkedIn Jobs", url: "https://www.linkedin.com/jobs/" },
    { name: "DataCamp", url: "https://www.datacamp.com/" },
    { name: "Kaggle", url: "https://www.kaggle.com/" },
    { name: "Statista", url: "https://www.statista.com/" },
    { name: "Tableau Public", url: "https://public.tableau.com/" },
    {
      name: "IBM Data Science",
      url: "https://www.ibm.com/training/data-science",
    },
    { name: "SAP Analytics", url: "https://www.sap.com/training-analytics" },
    {
      name: "AWS Data",
      url: "https://aws.amazon.com/training/data-analytics/",
    },
    {
      name: "Oracle Analytics Cloud",
      url: "https://www.oracle.com/analytics/cloud/",
    },
  ];

  const youtubeLinks = [
    { name: "Home", url: "https://www.youtube.com/" },
    { name: "Edureka", url: "https://www.youtube.com/@edurekaIN" },
    {
      name: "Apna College",
      url: "https://www.youtube.com/@ApnaCollegeOfficial",
    },
    { name: "Gate Smashers", url: "https://www.youtube.com/@GateSmashers" },
    { name: "Network Model", url: "https://www.youtube.com/@TechTermsDG" },
    { name: "Coding Shuttle", url: "https://www.youtube.com/@codingshuttle" },
    { name: "Code with Harry", url: "https://www.youtube.com/@CodeWithHarry" },
    {
      name: "Smarter Every Day",
      url: "https://www.youtube.com/@smartereveryday",
    },
    { name: "Gate Wallah", url: "https://www.youtube.com/@GATEWallahbyPW" },
    { name: "CrashCourse", url: "https://www.youtube.com/user/crashcourse" },
    { name: "MIT OpenCourseWare", url: "https://www.youtube.com/user/MIT" },
    { name: "Khan Academy", url: "https://www.youtube.com/khanacademy" },
    {
      name: "LearnCode.academy",
      url: "https://www.youtube.com/user/learncodeacademy",
    },
    { name: "TED-Ed", url: "https://www.youtube.com/user/TEDEducation" },
  ];

  const webDevLinks = [
    { name: "Uiverse", url: "https://uiverse.io/" },
    { name: "Loaders", url: "https://uiball.com/" },
    { name: "All Tools", url: "https://10015.io/" },
    { name: "Icon Animation", url: "https://useanimations.com/" },
    { name: "Colors", url: "https://coolors.co/palettes/trending" },
    { name: "CSS Gradient", url: "https://cssgradient.io/" },
    { name: "UI Patterns", url: "https://uipatterns.io/" },
    { name: "Webflow", url: "https://webflow.com/" },
    { name: "Dribbble", url: "https://dribbble.com/" },
    { name: "Behance", url: "https://www.behance.net/" },
    { name: "Bootstrap Icons", url: "https://icons.getbootstrap.com/" },
    { name: "Tailwind CSS", url: "https://tailwindcss.com/" },
    { name: "Font Awesome", url: "https://fontawesome.com/" },
    { name: "Material Design", url: "https://material.io/" },
    { name: "CodePen", url: "https://codepen.io/" },
    { name: "CodeSandbox", url: "https://codesandbox.io/" },
    { name: "W3Schools", url: "https://www.w3schools.com/" },
  ];

  const collegeGeneralLinks = [
    { name: "GitLab", url: "https://gitlab.com/" },
    { name: "Github", url: "https://github.com/zindagie?tab=repositories" },
    { name: "InfyTQ", url: "https://infytq.onwingspan.com/web/en/page/home" },
    { name: "IlovePDF", url: "https://www.ilovepdf.com/" },
    {
      name: "TCS ION",
      url: "https://learning.tcsionhub.in/iDH/India/LearnerDashboard",
    },
    {
      name: "NSP REG",
      url: "https://scholarships.gov.in/moma2223fresh/newstdRegfrmInstruction",
    },
    { name: "Coursera", url: "https://www.coursera.org/" },
    { name: "Edx", url: "https://www.edx.org/" },
    { name: "LinkedIn Learning", url: "https://www.linkedin.com/learning/" },
    {
      name: "Infosys Springboard",
      url: "https://infyspringboard.onwingspan.com/web/en/page/home",
    },
    { name: "Microsoft Learn", url: "https://learn.microsoft.com/" },
    {
      name: "Google Cloud Skill Boost",
      url: "https://cloud.google.com/training",
    },
    { name: "Salesforce Trailhead", url: "https://trailhead.salesforce.com/" },
    { name: "Khan Academy", url: "https://www.khanacademy.org/" },
    { name: "Udacity", url: "https://www.udacity.com/" },
    { name: "Pluralsight", url: "https://www.pluralsight.com/" },
    { name: "Skillshare", url: "https://www.skillshare.com/" },
    { name: "FutureLearn", url: "https://www.futurelearn.com/" },
    { name: "DataCamp", url: "https://www.datacamp.com/" },
    { name: "HubSpot Academy", url: "https://academy.hubspot.com/" },
    { name: "Alison", url: "https://alison.com/" },
    { name: "Udemy", url: "https://www.udemy.com/" },
    { name: "MIT OpenCourseWare", url: "https://ocw.mit.edu/" },
    { name: "Stanford Online", url: "https://online.stanford.edu/" },
    {
      name: "Harvard Online Learning",
      url: "https://online-learning.harvard.edu/",
    },
    { name: "Codecademy", url: "https://www.codecademy.com/" },
    { name: "Kaggle", url: "https://www.kaggle.com/" },
    { name: "AWS Training", url: "https://aws.amazon.com/training/" },
    { name: "IBM Skills Network", url: "https://www.ibm.com/training/" },
    { name: "Oracle Learning", url: "https://education.oracle.com/" },
    { name: "SAP Learning Hub", url: "https://learninghub.sap.com/" },
    { name: "Dataquest", url: "https://www.dataquest.io/" },
    {
      name: "OpenLearn by The Open University",
      url: "https://www.open.edu/openlearn/",
    },
    { name: "YouTube Learning", url: "https://www.youtube.com/learning" },
  ];

  return (
    <div className="A3">
      <div className="links-container">
        <header className="header">Through LINKS</header>
        <section className="section personal">
          <h2 className="section-title">
            <i className="fa-solid fa-arrow-right fa-bounce"></i> Updates!
          </h2>
          <div className="personal-links-container">
            {personalLinks.map((link, index) => (
              <div key={index} className="personal-link-item">
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="styled-link"
                >
                  {link.name}
                </a>
              </div>
            ))}
          </div>
        </section>

        <section className="section google">
          <h2 className="section-title">GOOGLE</h2>
          <div className="link-grid">
            {googleLinks.map((link, index) => (
              <div key={index} className="link-grid-item">
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="styled-link"
                >
                  {link.name}
                </a>
              </div>
            ))}
          </div>
        </section>

        <section className="section data">
          <h2 className="section-title">DATA</h2>
          <div className="link-grid">
            {dataLinks.map((link, index) => (
              <div key={index} className="link-grid-item">
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="styled-link"
                >
                  {link.name}
                </a>
              </div>
            ))}
          </div>
        </section>

        <section className="section youtube">
          <h2 className="section-title">YOUTUBE</h2>
          <div className="link-grid">
            {youtubeLinks.map((link, index) => (
              <div key={index} className="link-grid-item">
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="styled-link"
                >
                  {link.name}
                </a>
              </div>
            ))}
          </div>
        </section>

        <section className="section webdev">
          <h2 className="section-title">WEB DEVELOPMENT</h2>
          <div className="link-grid">
            {webDevLinks.map((link, index) => (
              <div key={index} className="link-grid-item">
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="styled-link"
                >
                  {link.name}
                </a>
              </div>
            ))}
          </div>
        </section>

        <section className="section college">
          <h2 className="section-title">COLLEGE GENERAL</h2>
          <div className="link-grid">
            {collegeGeneralLinks.map((link, index) => (
              <div key={index} className="link-grid-item">
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="styled-link"
                >
                  {link.name}
                </a>
              </div>
            ))}
          </div>
        </section>
      </div>
      <footer className="footer arima">
        <p className="footer-text">© 2024 Skill Set Go</p>
        <p className="footer-description">
          This website is made by P. Hari Sai with [Love ❤️ & Efforts 💻]
        </p>
        <div className="social-links">
          <a
            href="https://github.com/harisaigithub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="footer__container-img"
              src={GitHubLogo}
              alt="GitHub"
              width="40"
              height="40"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/parasa-hari-sai"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="footer__container-img"
              src={LinkedInLogo}
              alt="LinkedIn"
              width="40"
              height="40"
            />
          </a>
          <a
            href="https://parasa-harisai-portfolio.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="footer__container-img"
              src={WebsiteLogo}
              alt="Website"
              width="40"
              height="40"
            />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Links;
