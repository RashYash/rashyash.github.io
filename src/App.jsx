import { HashRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import Projects from "./pages/Projects";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </HashRouter>
  );
}

export default App;