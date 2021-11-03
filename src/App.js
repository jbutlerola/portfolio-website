import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Card from "./components/Card";

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
    </div>
  );
}

export default App;
