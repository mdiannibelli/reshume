import { cn } from "@/lib/utils";
import { HoveredLink, Menu, MenuItem } from "@shared/components";
import { useState } from "react";
import { Link } from "react-router-dom";

export function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
      <div
        className={cn("absolute top-6 inset-x-0 max-w-2xl mx-auto z-50", className)}
      >
        <Menu setActive={setActive}>
        <div className="flex gap-x-2">
         <Link to="/" className="hover:opacity-[0.9] text-white hover:bg-white/10 rounded-full px-4 py-2 transition-all duration-300">Home</Link>  
          <MenuItem setActive={setActive} active={active} item="About">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink className="hover:opacity-[0.9] text-white" href="/hobby">Hobby</HoveredLink>
              <HoveredLink className="hover:opacity-[0.9] text-white" href="/individual">Individual</HoveredLink>
              <HoveredLink className="hover:opacity-[0.9] text-white" href="/team">Team</HoveredLink>
              <HoveredLink className="hover:opacity-[0.9] text-white" href="/enterprise">Enterprise</HoveredLink>
            </div>
          </MenuItem>
         <Link to="/generate-resume" className="hover:opacity-[0.9] text-white hover:bg-white/10 rounded-full px-4 py-2 transition-all duration-300">Generate resume</Link>  
        </div>
        </Menu>
      </div>
    );
  }