// App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet'; // Import Helmet for font loading
import Layout from './components/header/head';
import Home from './components/home/home';
import About from './components/about/about';
import Link  from './components/links/links';
import './App.css'; // Import global CSS

function App() {
  return (
    <Router>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Aref+Ruqaa+Ink:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Arima:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Armata&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Amiri+Quran&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Aldrich:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Alegreya+SC:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Alegreya+Sans+SC:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/LinkedIn" element={<LinkedInRedirect />} />
          <Route path="/GitHub" element={<GithubRedirect />} />
          <Route path="/Portfolio" element={<PortfolioRedirect />} />
          <Route path="/About" element={<About />} />
          <Route path="/Links" element={<Link />} />
        </Routes>
      </Layout>
    </Router>
  );
}

const LinkedInRedirect = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.open("https://www.linkedin.com/in/parasa-hari-sai", "_blank", "noopener,noreferrer");
      window.history.back();
    });

    return () => clearTimeout(timer);
  }, []);

  return null;
};

const GithubRedirect = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.open("https://github.com/harisaigithub", "_blank", "noopener,noreferrer");
      window.history.back();
    });

    return () => clearTimeout(timer);
  }, []);

  return null;
};

const PortfolioRedirect = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.open("https://parasa-harisai-portfolio.netlify.app/", "_blank", "noopener,noreferrer");
      window.history.back();
    });

    return () => clearTimeout(timer);
  }, []);

  return null;
};

// const LinkRedirect = () => {
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       window.open("/", "_blank", "noopener,noreferrer");
//       window.history.back();
//     });

//     return () => clearTimeout(timer);
//   }, []);

//   return null;
// };

export default App;
