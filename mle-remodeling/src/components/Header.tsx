import { Link, useLocation } from 'react-router-dom';
import { Phone } from 'lucide-react';

export default function Header() {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-28">
          <div className="flex items-center">
            <Link to="/" className="transition-transform duration-300 hover:scale-105">
              <img src="/logo.jpg" alt="MLE Remodeling" className="h-20 w-auto" />
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`transition-all duration-300 relative group ${isActive('/') ? 'text-[#F07B20] font-medium' : 'text-black hover:text-[#F07B20]'}`}>
              Home
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#F07B20] transform origin-left transition-transform duration-300 ${isActive('/') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
            </Link>
            <Link to="/our-work" className={`transition-all duration-300 relative group ${isActive('/our-work') ? 'text-[#F07B20] font-medium' : 'text-black hover:text-[#F07B20]'}`}>
              Our Work
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#F07B20] transform origin-left transition-transform duration-300 ${isActive('/our-work') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
            </Link>
            <Link to="/services" className={`transition-all duration-300 relative group ${isActive('/services') ? 'text-[#F07B20] font-medium' : 'text-black hover:text-[#F07B20]'}`}>
              Services
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#F07B20] transform origin-left transition-transform duration-300 ${isActive('/services') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
            </Link>
            <Link to="/contact" className={`transition-all duration-300 relative group ${isActive('/contact') ? 'text-[#F07B20] font-medium' : 'text-black hover:text-[#F07B20]'}`}>
              Contact
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#F07B20] transform origin-left transition-transform duration-300 ${isActive('/contact') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
            </Link>
            <a href="tel:9362075767" className="flex items-center bg-[#F07B20] text-white px-4 py-2 hover:bg-[#d96a10] transition-all duration-300 font-medium hover:scale-105 hover:shadow-lg">
              <Phone className="w-4 h-4 mr-2" />
              (936) 207-5767
            </a>
          </nav>
          <a href="tel:9362075767" className="md:hidden flex items-center bg-[#F07B20] text-white px-4 py-2 hover:bg-[#d96a10] transition-all duration-300 hover:scale-105">
            <Phone className="w-5 h-5" />
          </a>
        </div>
      </div>
    </header>
  );
}
