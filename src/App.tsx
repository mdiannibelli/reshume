import { Footer, LoadingScreen, Navbar } from "@components/ui";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, GenerateResume, NotFound } from "@/pages";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen flex flex-col">
        <Navbar />
        <main className="relative">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/generate-resume" element={<GenerateResume />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <LoadingScreen />
        <ToastContainer />
      </div>
    </BrowserRouter>
  );
}

export default App;
