import { Route, Routes } from "react-router-dom";
import { Shell } from "./components/Shell";
import { About } from "./pages/About";
import { Careers } from "./pages/Careers";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Process } from "./pages/Process";
import { Work } from "./pages/Work";
import { WorkDetail } from "./pages/WorkDetail";

export default function App() {
  return (
    <Shell>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/process" element={<Process />} />
        <Route path="/work" element={<Work />} />
        <Route path="/work/:slug" element={<WorkDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Shell>
  );
}
