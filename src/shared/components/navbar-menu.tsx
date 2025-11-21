import { motion, type Transition } from "motion/react";
import { FaChevronDown } from "react-icons/fa6";

export const MenuItem = ({
    setActive,
    active,
    item,
    children,
}: {
    setActive: (item: string) => void;
    active: string | null;
    item: string | React.ReactNode;
    children?: React.ReactNode;
}) => {
    const transition: Transition = {
      type: "spring",
      mass: 0.5,
      damping: 11.5,
      stiffness: 100,
      restDelta: 0.001,
      restSpeed: 0.001,
    };
    return (
    <div onMouseEnter={() => setActive(typeof item === 'string' ? item : '')} className="relative ">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer hover:opacity-[0.9] text-white hover:bg-white/10 rounded-full px-4 py-2 transition-all duration-300 flex items-center gap-x-2"
      >
        {item}
        <FaChevronDown className="w-4 h-4" />
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-[calc(100%-0.75rem)] left-10 transform -translate-x-1/2 pt-4">
              <motion.div
                transition={transition}
                layoutId="active"
                className="bg-black backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl "
              >
                <motion.div
                  layout
                  className="w-max h-full p-4"
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};
 
export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className="relative rounded-full border border-transparent bg-black shadow-input flex justify-center space-x-4 px-8 py-6 "
    >
      {children}
    </nav>
  );
};
 
export const HoveredLink = ({ children, ...rest }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return (
    <a
      {...rest}
      className="text-neutral-200 hover:text-white cursor-pointer"
    >
      {children}
    </a>
  );
};