"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FaHome, FaUser, FaProjectDiagram, FaEnvelope } from "react-icons/fa";
import { HiMenuAlt3 } from "react-icons/hi";

interface NavItemProps {
  to: string;
  label: string;
  icon: React.ReactNode;
  activeSection: string;
  handleSetActive: (to: string) => void;
  onClick?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({
  to,
  label,
  icon,
  activeSection,
  handleSetActive,
  onClick,
}) => {
  return (
    <li>
      <Link
        to={to}
        spy={true}
        smooth={true}
        duration={500}
        onSetActive={() => handleSetActive(to)}
        className={`flex items-center cursor-pointer space-x-2 text-lg ${
          activeSection === to
            ? "text-blue-500"
            : "text-gray-700 hover:text-blue-500"
        }`}
        onClick={onClick}
      >
        {icon}
        <span>{label}</span>
      </Link>
    </li>
  );
};

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleSetActive = (to: string) => setActiveSection(to);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold">NavBar</h1>
          </div>

          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 focus:outline-none"
            >
              <HiMenuAlt3 size={30} />
            </button>
          </div>

          <div className="hidden lg:block">
            <motion.ul
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex space-x-8"
            >
              <NavItem
                to="home"
                label="Home"
                icon={<FaHome />}
                activeSection={activeSection}
                handleSetActive={handleSetActive}
              />
              <NavItem
                to="about"
                label="About"
                icon={<FaUser />}
                activeSection={activeSection}
                handleSetActive={handleSetActive}
              />
              <NavItem
                to="projects"
                label="Projects"
                icon={<FaProjectDiagram />}
                activeSection={activeSection}
                handleSetActive={handleSetActive}
              />
              <NavItem
                to="contact"
                label="Contact"
                icon={<FaEnvelope />}
                activeSection={activeSection}
                handleSetActive={handleSetActive}
              />
            </motion.ul>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.3 }}
          className="lg:hidden bg-white"
        >
          <ul className="flex flex-col items-center space-y-4 py-4">
            <NavItem
              to="home"
              label="Home"
              icon={<FaHome />}
              activeSection={activeSection}
              handleSetActive={handleSetActive}
              onClick={closeMenu}
            />
            <NavItem
              to="about"
              label="About"
              icon={<FaUser />}
              activeSection={activeSection}
              handleSetActive={handleSetActive}
              onClick={closeMenu}
            />
            <NavItem
              to="projects"
              label="Projects"
              icon={<FaProjectDiagram />}
              activeSection={activeSection}
              handleSetActive={handleSetActive}
              onClick={closeMenu}
            />
            <NavItem
              to="contact"
              label="Contact"
              icon={<FaEnvelope />}
              activeSection={activeSection}
              handleSetActive={handleSetActive}
              onClick={closeMenu}
            />
          </ul>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
