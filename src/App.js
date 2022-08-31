import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Contact from "./components/Contact";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab, faEnvira } from "@fortawesome/free-brands-svg-icons";
import { faBars, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import Footer from './components/Footer';
import Dropdown from "./components/Dropdown";
import { useState, useEffect } from "react";

library.add(fab, faEnvelope, faPhone, faEnvira, faBars);
//TODO:
// fix navbar popout, add animations
// add animating down arrow, scroll down to project section

const App = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    const hideMenu = () => {
      if(window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    }

    window.addEventListener('resize', hideMenu)

    return () => window.removeEventListener('resize', hideMenu);
  })

  return (
    <div className="bg-harvest-gold-100">
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Hero />
      <div id="portfolio-projects">
      <Card
          title="URL-shortener"
          description="A Url shortening website that integrates shrtcode API"
          url="https://url-shortener-jbutlerola.netlify.app/"
          img="../images/url-shortener.png"
          imgAlt="Url shortener website"
          cardTechnologies={['React', 'TailwindCSS', 'JavaScript']}
        />
      <Card
          title="expenses-chart-component"
          description="A chart component that can be used to track spending over a week. The chart is dynamically updated."
          url="https://expenses-chart-component-jbutlerola.netlify.app/"
          img="../images/expenses-chart-component.png"
          imgAlt="expenses chart component"
          cardTechnologies={['React', 'TailwindCSS', 'JavaScript', 'ChartJS']}
        />
      <Card
          title="advice-generator"
          description="A random advice generator using the Advice Slip Api"
          url="https://jbutlerola-advice-generator.netlify.app/"
          img="../images/advice-generator.png"
          imgAlt="Advice generator website"
          cardTechnologies={['React', 'TailwindCSS']}
        />
        <Card
          title="Keeper"
          description="A simple Google Keep clone made with React and Material-ui"
          url="https://github.com/jbutlerola/keeper-app"
          img="../images/keeper-site.png"
          imgAlt="Google Keep cloned website"
          cardTechnologies={['React', 'Material-ui']}
        />
        <Card
          title="Portfolio Website"
          description="Made with React, TailwindCSS, and Framer Motion"
          url="https://github.com/jbutlerola/portfolio-website"
          img="../images/portfolio-website.png"
          imgAlt="Image of portfolio website"
          cardTechnologies={['React', 'TailwindCSS']}
        />
      </div>
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
