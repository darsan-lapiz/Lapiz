"use client"

import { useEffect, useState } from "react"

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-xl border-b border-gray-200" : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="relative group">
              <div className="w-12 h-12 bg-gradient-to-br from-black to-gray-700 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-all duration-300">
                <span className="text-xl font-bold text-white">F</span>
              </div>

              <div className="absolute -top-1 -right-1 w-3 h-3 bg-gray-300 rounded-full opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
            </div>

            <span className="text-2xl font-bold bg-gradient-to-r from-black via-gray-700 to-black bg-clip-text text-transparent">
              Fulcrum
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            {["About", "Mission", "Support", "Join Us", "Mentor"].map((item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase().replace(" ", "")}`}
                className="relative px-4 py-2 rounded-full text-gray-700 hover:text-black transition-all duration-300 font-medium group"
              >
                <span className="relative z-10">{item}</span>
                <div className="absolute inset-0 bg-gray-100 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></div>
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <button className="relative bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 hover:shadow-lg hover:scale-105 transition-all duration-300 font-medium overflow-hidden group">
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-xl text-gray-700 hover:text-black hover:bg-gray-100 transition-all duration-300 group"
            >
              <svg
                className={`h-6 w-6 transition-transform duration-300 ${isMenuOpen ? "rotate-90" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-80 opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-4"
          } overflow-hidden`}
        >
          <div className="px-2 pt-4 pb-6 space-y-2 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl mt-4 border border-gray-200">
            {["About", "Mission", "Support", "Join Us", "Mentor"].map((item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase().replace(" ", "")}`}
                className="block px-4 py-3 rounded-xl text-gray-700 hover:text-black hover:bg-gray-100 transition-all duration-300 font-medium group"
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gray-400 rounded-full group-hover:bg-black transition-colors duration-300"></div>
                  <span>{item}</span>
                </div>
              </a>
            ))}

            <div className="pt-4 px-4">
              <button className="w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition-all duration-300 font-medium">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
