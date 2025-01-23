import Link from "next/link"
import { Truck } from "lucide-react"

export default function Header() {
  return (
    <header className="bg-blue-600 text-white py-4 px-6 sticky top-0 z-10 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Truck size={32} />
          <span className="text-2xl font-bold">TowPro</span>
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="#services" className="hover:text-blue-200 transition-colors">
                Services
              </Link>
            </li>
            <li>
              <Link href="#why-choose-us" className="hover:text-blue-200 transition-colors">
                Why Us
              </Link>
            </li>
            <li>
              <Link href="#contact" className="hover:text-blue-200 transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
