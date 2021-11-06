import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import ContactForm from "./components/ContactForm";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faEnvira } from '@fortawesome/free-brands-svg-icons'
import { faBars, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faEnvelope, faPhone, faEnvira, faBars)
//TODO:
// fix navbar popout, add animations
// add animating down arrow, scroll down to project section
// put technologies in seperate file and map onto card


const App = () => {
  return (
    <div className="bg-harvest-gold-100">
      <Navbar />
      <Hero />
      <Card
        id="portfoio-projects"
        title="Keeper"
        description="A simple Google Keep clone made with React and Material-ui"
        url="https://github.com/jbutlerola/keeper-app"
        img="../images/keeper-site.png"
        imgAlt="Google Keep cloned website"
      />
      <Card
        title="Portfolio Website"
        description="Made with React, TailwindCSS, and Framer Motion"
        url="https://github.com/jbutlerola/portfolio-website"
        img="../images/portfolio-website.png"
        imgAlt="Image of portfolio website"
      />
      <ContactForm />
    </div>
  );
}

export default App;
