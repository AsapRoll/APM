import React, { useState, useEffect } from 'react';
import { Leaf, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '首页', href: '#home' },
    { name: '市场洞察', href: '#market' },
    { name: '核心逻辑', href: '#methodology' },
    { name: '商业模式', href: '#business' },
    { name: '联系招商', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className={`p-2 rounded-full mr-3 ${isScrolled ? 'bg-teal-600 text-white' : 'bg-white/90 text-teal-700'}`}>
              <Leaf size={24} />
            </div>
            <div className={`font-bold text-xl tracking-wide ${isScrolled ? 'text-teal-900' : 'text-teal-900 lg:text-white'}`}>
              体轻代谢抗衰中心
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-medium text-sm transition-colors hover:text-teal-500 ${
                  isScrolled ? 'text-slate-600' : 'text-slate-800 lg:text-white lg:hover:text-teal-100'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className={`px-5 py-2 rounded-full text-sm font-bold transition-all shadow-sm ${
                 isScrolled 
                 ? 'bg-teal-600 text-white hover:bg-teal-700' 
                 : 'bg-white text-teal-700 hover:bg-teal-50'
              }`}
            >
              加盟咨询
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md ${isScrolled ? 'text-slate-800' : 'text-teal-800 lg:text-white'}`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-xl absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:text-teal-600 hover:bg-teal-50"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;