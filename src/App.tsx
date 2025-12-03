import { Footer, Navbar } from "@components/ui";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, GenerateResume } from "@/pages";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/generate-resume" element={<GenerateResume />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
