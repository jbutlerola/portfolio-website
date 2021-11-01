import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Card from "./components/Card";

function App() {
  return (
    <div className="bg-yellow-50">
      <Navbar />
      <Hero />
      <Card />
    </div>
  );
}

export default App;
