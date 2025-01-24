"use client"
import { useState } from "react"
import Link from "next/link"
import { Truck } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="bg-blue-700 text-white py-3 px-8 sticky top-0 z-20 shadow-xl shadow-blue-800/50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-3">
          <Truck size={30} className="text-yellow-400" />
          <span className="text-2xl font-semibold tracking-tight mt-1">Šlep Služba Sarajevo</span>
        </Link>
        <nav>
          <ul className="flex space-x-6 text-base md:flex hidden">
            <li>
              <Link href="#services" className="inline-block py-2 px-6 rounded-full bg-blue-800 hover:bg-blue-600 transition-colors duration-200">
                Usluge
              </Link>
            </li>
            <li>
              <Link href="#why-choose-us" className="inline-block py-2 px-6 rounded-full bg-blue-800 hover:bg-blue-600 transition-colors duration-200">
                Zašto nas izabrati
              </Link>
            </li>
            <li>
              <Link href="#contact" className="inline-block py-2 px-6 rounded-full bg-blue-800 hover:bg-blue-600 transition-colors duration-200">
                Kontakt
              </Link>
            </li>
          </ul>

          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white">
              Menu
            </button>
          </div>

          {/* Mobile menu modal */}
          {isMenuOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-30">
              <div className="bg-white p-6 rounded-lg shadow-xl w-64">
                <ul className="space-y-4 text-center">
                  <li>
                    <Link href="#services" className="block py-2 px-4 text-blue-700 hover:bg-blue-200 rounded-full" onClick={closeMenu}>
                      Usluge
                    </Link>
                  </li>
                  <li>
                    <Link href="#why-choose-us" className="block py-2 px-4 text-blue-700 hover:bg-blue-200 rounded-full" onClick={closeMenu}>
                      Zašto nas izabrati
                    </Link>
                  </li>
                  <li>
                    <Link href="#contact" className="block py-2 px-4 text-blue-700 hover:bg-blue-200 rounded-full" onClick={closeMenu}>
                      Kontakt
                    </Link>
                  </li>
                </ul>
                <button onClick={closeMenu} className="mt-4 w-full bg-blue-700 text-white py-2 rounded-full">
                  Close
                </button>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  )
}
