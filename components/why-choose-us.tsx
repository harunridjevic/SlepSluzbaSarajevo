import { CheckCircle } from "lucide-react"

const reasons = [
  "Iskusan i profesionalan tim sa višegodišnjim iskustvom",
  "Najsavremenija vučna oprema za sigurnu i efikasnu uslugu",
  "Konkurentne i transparentne cijene bez skrivenih naknada",
  "Munjevito vreme odziva kako biste smanjili vaše čekanje",
  "Potpuno osiguran i licenciran za vaše usluge šlepanja",
  "Ekološki prihvatljive prakse za smanjenje našeg uticaja na životnu sredinu",
  "Ljubazno osoblje posvećeno zadovoljstvu kupaca",
  "Sveobuhvatan asortiman usluga za sve vaše potrebe",
]

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-20 px-6 bg-blue-100 dark:bg-gray-800">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-800 dark:text-white">Zašto izabrati nas?</h2>
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <img
              src="/gallery-img1.jpg?height=400&width=600"
              alt="Professional tow truck driver"
              className="rounded-lg shadow-xl dark:shadow-gray-700"
            />
          </div>
          <div className="md:w-1/2 md:pl-10">
            <ul className="space-y-4 grid gap-4 md:grid-cols-2">
              {reasons.map((reason, index) => (
                <li key={index} className={`flex items-center h-16 ${index === 0 ? 'mt-3.5' : ''}`}>
                  <CheckCircle className="text-green-500 dark:text-green-400 mr-2 flex-shrink-0" />
                  <span className="flex-1 text-gray-900 dark:text-gray-200">{reason}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
