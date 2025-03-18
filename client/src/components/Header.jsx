import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Icon for mobile menu

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-blue-700 text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo and Title */}
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="Gujarat Government Logo" className="h-10 w-10" />
          <div>
            <h1 className="text-xl font-bold">Complaint Redressal System</h1>
            <p className="text-xs">Collector Office - Anand, Gujarat</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-4">
          <button className="bg-white/30 px-4 py-2 rounded-md transition duration-300 ease-in-out hover:bg-white hover:text-black">
            Language
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 py-4 bg-blue-700">
          <button className="bg-white/30 px-4 py-2 rounded-md transition duration-300 ease-in-out hover:bg-white hover:text-black">
            Language
          </button>
        </div>
      )}
    </header>
  );
}
