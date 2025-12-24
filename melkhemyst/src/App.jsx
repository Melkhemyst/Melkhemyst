import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Offerings from "./pages/Offerings";
import Tools from "./pages/Tools";
import Booking from "./pages/Booking";
import Legal from "./pages/Legal";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-obsidian">
      <Navbar />

      <main className="flex-grow pt-20 bg-obsidian">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/offerings" element={<Offerings />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/legal" element={<Legal />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}