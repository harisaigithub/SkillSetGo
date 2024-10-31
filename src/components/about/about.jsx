import "./about.css";
import GitHubLogo from "./images/github-logo.png";
import WebsiteLogo from "./images/website-logo.png";
import LinkedInLogo from "./images/linkedin-logo.png";
import "@fortawesome/fontawesome-free/css/all.min.css";

const About = () => {
  return (
    <div className="A2">
      <div className="p2"></div>
      <header class="hero aref-ruqaa-ink">
        <h1>Welcome to Skill Set Go!</h1>
        <p>Your gateway to building skills for the future.</p>
      </header>

      <section class="content armata">
        <h2>Learn and Grow</h2>
        <p class="contnet aldrich">
          <i class="fa-solid fa-star fa-shake"></i> At Skill Set Go, we provide
          resources and guidance to help you develop skills that matter in
          today's world.
        </p>
        <p class="contnet aldrich">
          <i class="fa-solid fa-star fa-shake"></i> Explore my collection of
          courses, tutorials, and blogs that cover a wide range of skills across
          various fields.
        </p>
        <p class="contnet aldrich">
          <i class="fa-solid fa-star fa-shake"></i> Whether you are a student
          looking to enhance your knowledge or a professional aiming to upskill,
          we have something for everyone.
        </p>
        <p class="contnet aldrich">
          <i class="fa-solid fa-star fa-shake"></i> Explore the world of
          knowledge at Skill Set Go, where education meets innovation. Together,
          we can make learning engaging and effective!
        </p>
        <p class="contnet aref-ruqaa-ink" style="font-weight: bolder">
          <i class="fa-solid fa-star fa-shake"></i> MADE WITH LOVE FOR STUDENTS
          BY THE STUDENT !!!
        </p>
      </section>

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

export default About;
