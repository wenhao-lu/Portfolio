import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Education from "./components/Education";
import Project from "./components/Project";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Home />
        <Project />
        <Work />
        <Education />
        <Contact />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
