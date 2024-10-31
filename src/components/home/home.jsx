import './home.css';
import GitHubLogo from "./images/github-logo.png";
import WebsiteLogo from "./images/website-logo.png";
import LinkedInLogo from "./images/linkedin-logo.png";

const Home = () => {
  return (
    <div className="A1">
      <div className="p1"></div>
      <div className="heading-box">
        <h1 className="heading arima">
          Materials for VVIT students from 2-4th years (R20-"CSM") along with Interview Prep.
        </h1>
      </div>
      <div className="container aref-ruqaa-ink">
        <div className="grid-container">
          <div className="grid-item"><a href="https://mega.nz/folder/bQJmADDS#ymds5Co-N1ua4GuqWy0Ptw" target="_blank" rel="noopener noreferrer">2nd Year-1 Sem</a></div>
          <div className="grid-item"><a href="https://vvitguntur-my.sharepoint.com/:f:/g/personal/22bq5a4213_vvit_net/Eh5WY-muzydFixr4E66PPm0Bo2pCEtRAJVIMA0qpoaGYmQ?e=sInEWe" target="_blank" rel="noopener noreferrer">3rd Year-1 Sem</a></div>
          <div className="grid-item"><a href="https://vvitguntur-my.sharepoint.com/:f:/g/personal/22bq5a4213_vvit_net/EgmZKZ34QSJBrHwQh88oldgBu-WwqXoKeot4rF3mMa6hBg?e=cOE7a3" target="_blank" rel="noopener noreferrer">4th Year-1 Sem</a></div>
          <div className="grid-item"><a href="https://mega.nz/folder/SVA3iLhT#SVk8xHe9fTkIq8JY-hqv5g" target="_blank" rel="noopener noreferrer">2nd Year-2nd Sem</a></div>
          <div className="grid-item"><a href="https://vvitguntur-my.sharepoint.com/:f:/g/personal/22bq5a4213_vvit_net/EjhpYTHHMH1NobQorjTfnpcBa9548Z_43o8Z9pxUJfSFHg?e=u6phKV" target="_blank" rel="noopener noreferrer">3rd Year-2nd Sem</a></div>
          <div className="grid-item"><a href="https://vvitguntur-my.sharepoint.com/:f:/g/personal/22bq5a4213_vvit_net/Emic-274b5hLhzH9pB7Go9wBFGUUbnr6zKW4GqxIZOWxTg?e=Q4K92K" target="_blank" rel="noopener noreferrer">Gate Materials</a></div>
          <div className="grid-item full-row"><a href="https://vvitguntur-my.sharepoint.com/my?id=%2Fpersonal%2F22bq5a4213%5Fvvit%5Fnet%2FDocuments%2FDesktop%2Finternship%20certificates%2FINTERVIEW&ga=1" target="_blank" rel="noopener noreferrer">Interview Material</a></div>
        </div>
      </div>
      <footer className="footer arima">
        <p className="footer-text">© 2024 Skill Set Go</p>
        <p className="footer-description">
          This website is made by P. Hari Sai with [Love ❤️ & Efforts 💻]
        </p>
        <div className="social-links">
          <a href="https://github.com/harisaigithub" target="_blank" rel="noopener noreferrer">
            <img className="footer__container-img" src={GitHubLogo} alt="GitHub" width="40" height="40" />
          </a>
          <a href="https://www.linkedin.com/in/parasa-hari-sai" target="_blank" rel="noopener noreferrer">
            <img className="footer__container-img" src={LinkedInLogo} alt="LinkedIn" width="40" height="40" />
          </a>
          <a href="https://parasa-harisai-portfolio.netlify.app/" target="_blank" rel="noopener noreferrer">
            <img className="footer__container-img" src={WebsiteLogo} alt="Website" width="40" height="40" />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Home;
