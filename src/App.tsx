import { Footer, Navbar } from "@components/ui";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, GenerateResume, NotFound } from "@/pages";

function App() {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/generate-resume" element={<GenerateResume />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
