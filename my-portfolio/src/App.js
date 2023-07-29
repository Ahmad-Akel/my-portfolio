import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experiences from "./pages/Experiences";
import Navbar from "./components/Navbar";
import "./styles/Navbar.css";
import "./styles/App.css";
import Footer from "./components/Footer";
import ProjectDisplay from "./pages/ProjectDisplay";
import BlogPosts from "./pages/Blog";
function App() {
  const clienID =
    "1019470818500-hs8k90pf2u81l8ab0kenqhuhinjtf4jt.apps.googleusercontent.com";
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectDisplay />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/blog" element={<BlogPosts clientId={clienID} />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
