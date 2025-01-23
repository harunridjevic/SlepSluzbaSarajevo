import Link from "next/link"
import { Truck } from "lucide-react"

export default function Header() {
  return (
    <header className="bg-blue-700 text-white py-3 px-8 sticky top-0 z-20 shadow-xl shadow-blue-800/50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-3">
          <Truck size={30} className="text-yellow-400" /> {/* Reduced icon size */}
          <span className="text-2xl font-semibold tracking-tight">TowPro</span> {/* Reduced text size */}
        </Link>
        <nav>
          <ul className="flex space-x-6 text-base"> {/* Reduced text size */}
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
        </nav>
      </div>
    </header>
  )
}
