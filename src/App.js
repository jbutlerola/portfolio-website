import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import ContactForm from "./components/ContactForm";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhone, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faEnvelope, faPhone)
//TODO: add contact form
// fix navbar popout, add animations
// add animating down arrow, scroll down to project section
// put technologies in seperate file and map onto card
// add contact card
// add custom colors
// change hero icons from svg

function App() {
  return (
    <div className="bg-yellow-50">
      <Navbar />
      <Hero />
      <Card
        title="Keeper"
        description="A simple Google Keep clone made with React and Material-ui"
        url="https://github.com/jbutlerola/keeper-app"
      />
      <ContactForm />
    </div>
  );
}

export default App;
