import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-12 px-6 dark:bg-gray-800 dark:bg-gray-800">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Šlep Služba Sarajevo</h3>
          <p className="mb-4">Vaš pouzdani partner za vuču, dostupan 24/7 za sve vaše hitne potrebe vezane za vozila.</p>
          <Link href="https://olx.ba/artikal/53689504" target="_blank" rel="noopener noreferrer">
            <img src="/olx.svg" alt="OLX" className="w-6 h-6 text-white" />
          </Link>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Brzi linkovi</h4>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="hover:text-blue-300 transition-colors dark:hover:text-blue-500">
                Početna
              </Link>
            </li>
            <li>
              <Link href="#services" className="hover:text-blue-300 transition-colors dark:hover:text-blue-500">
                Usluge
              </Link>
            </li>
            <li>
              <Link href="#why-choose-us" className="hover:text-blue-300 transition-colors dark:hover:text-blue-500">
                Zašto izabrati nas
              </Link>
            </li>
            <li>
              <Link href="#pricing" className="hover:text-blue-300 transition-colors dark:hover:text-blue-500">
                Zašto izabrati nas
              </Link>
            </li>
            <li>
              <Link href="#contact" className="hover:text-blue-300 transition-colors dark:hover:text-blue-500">
                Kontakt
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Usluge</h4>
          <ul className="space-y-2">
            <li>
              Vučna služba
            </li>
            <li>
              Pomoć na putu
            </li>
            <li>
              Izvlačenje vozila
            </li>
            <li>
              Dostupnost 24/7
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Kontakt podaci</h4>
          <p>Adresa: Kolodvorska 8</p>
          <p>Sarajevo</p>
          <p>Telefon: (+387) 62 223 225</p>
          <p>Email: slepsluzbabakir@gmail.com</p>
        </div>
      </div>
      <div className="container mx-auto mt-8 pt-8 border-t border-blue-800 dark:border-gray-600">
        <p>&copy; 2025 Šlep Služba Sarajevo. Sva prava zadržana.</p>
        <p className="mt-2 text-sm text-white-500 dark:text-gray-500">
          By <a href="https://github.com/harunridjevic" className="text-blue-500 hover:underline dark:text-blue-400" target="_blank" rel="noopener noreferrer">Harun Riđević</a>.
        </p>
      </div>
    </footer>
  )
}
