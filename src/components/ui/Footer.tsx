import { FaGithub, FaHeart } from "react-icons/fa6";

export function Footer() {
  return (
    <div className="absolute bottom-0 w-full">
        <div className="w-[80%] md:max-w-2xl xl:max-w-7xl mx-auto bg-white opacity-5 h-px"></div>
      <footer className="flex flex-col justify-center items-center p-8">
            <p className="text-xs text-center text-slate-100">© 2025 Harvard Resume Generator. All rights reserved.</p>
            <div className="flex gap-x-8 mt-4 items-center pt-2">
            <a href="https://github.com/mdiannibelli/harvard-resume-generator" target="_blank" className="flex items-center gap-2">
                <FaGithub className="text-white" />
                <span className="text-xs text-slate-100">Contribute</span>
            </a>
            {/* // TODO change donate link */}
            <a href="https://www.buymeacoffee.com/harvardresumegenerator" target="_blank" className="flex items-center gap-2">
                <FaHeart className="text-red-500"/>
                <span className="text-xs text-slate-100">Donate</span>
            </a>
            </div>
      </footer>
    </div>
  );
};
