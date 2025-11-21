import { Link } from "react-router-dom";
import { LanguageSelector } from "./LanguageSelector";

export function Navbar() {
    return (
      <div
        className="absolute top-8 inset-x-0 z-50"
      >
        <header className="grid grid-cols-3 items-center px-4">
          <div className="max-w-2xl mx-auto"><LanguageSelector /></div>
         <nav className="flex-1 flex justify-center">
          <Link to="/" className="hover:opacity-[0.9] text-white hover:bg-white/10 rounded-full px-4 py-2 transition-all duration-300">Home</Link>  
          <Link to="/about-us" className="hover:opacity-[0.9] text-white hover:bg-white/10 rounded-full px-4 py-2 transition-all duration-300">About</Link>  
          <Link to="/contact-us" className="hover:opacity-[0.9] text-white hover:bg-white/10 rounded-full px-4 py-2 transition-all duration-300">Contact</Link> 
         </nav> 
         <div className="flex justify-end gap-x-4 max-w-2xl mx-auto">
          <Link to="/login" className="text-white bg-black hover:translate-y-[-2px] rounded-full px-6 py-2 transition-all duration-300">Login</Link>  
          <Link to="/generate-resume" className="bg-red-500 text-white font-medium rounded-full hover:translate-y-[-2px] px-6 py-2 transition-all duration-300">Generate resume</Link>  
         </div>
        </header>
      </div>
    );
  }