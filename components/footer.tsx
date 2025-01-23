import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-12 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">TowPro</h3>
          <p className="mb-4">Your reliable towing partner, available 24/7 for all your vehicle emergency needs.</p>
          <div className="flex space-x-4">
            <Link href="#" className="hover:text-blue-300 transition-colors">
              <Facebook />
            </Link>
            <Link href="#" className="hover:text-blue-300 transition-colors">
              <Twitter />
            </Link>
            <Link href="#" className="hover:text-blue-300 transition-colors">
              <Instagram />
            </Link>
            <Link href="#" className="hover:text-blue-300 transition-colors">
              <Linkedin />
            </Link>
          </div>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="hover:text-blue-300 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="#services" className="hover:text-blue-300 transition-colors">
                Services
              </Link>
            </li>
            <li>
              <Link href="#why-choose-us" className="hover:text-blue-300 transition-colors">
                Why Choose Us
              </Link>
            </li>
            <li>
              <Link href="#contact" className="hover:text-blue-300 transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Services</h4>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="hover:text-blue-300 transition-colors">
                Towing
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-blue-300 transition-colors">
                Roadside Assistance
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-blue-300 transition-colors">
                Vehicle Recovery
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-blue-300 transition-colors">
                Fuel Delivery
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
          <p>123 Towing Street</p>
          <p>Anytown, ST 12345</p>
          <p>Phone: (555) 123-4567</p>
          <p>Email: info@towpro.com</p>
        </div>
      </div>
      <div className="container mx-auto mt-8 pt-8 border-t border-blue-800">
        <p>&copy; 2025 TowPro. All rights reserved.</p>
      </div>
    </footer>
  )
}
