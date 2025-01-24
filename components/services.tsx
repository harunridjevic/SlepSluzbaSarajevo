import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Truck, Car, Wrench, Clock, Battery, Key, FuelIcon as GasPump, PenToolIcon as Tools, LifeBuoy as Help } from "lucide-react"

const usluge = [
  {
    icon: Truck,
    title: "Vučna služba",
    description: "Brza i sigurna vuča za sve vrste vozila, od automobila do teških kamiona. Mogućnost transporta 2 vozila.",
  },
  {
    icon: Car,
    title: "Pomoć na putu",
    description: "Brza pomoć za kvarove, probušene gume i druge hitne situacije.",
  },
  {
    icon: Help,
    title: "Izvlačenje vozila",
    description: "Brza i sigurna pomoć pri izvlačenju vozila iz nepristupačnih terena uz korištenje specijalizovane opreme.",
  }, 
  {
    icon: Clock,
    title: "Dostupnost 24/7",
    description: "Služba dostupna 24 časa, svaki dan, u bilo koje vrijeme, za vaš mir.",
  }
]

export default function Usluge() {
  return (
    <section id="usluge" className="py-20 px-6 bg-white dark:bg-gray-900 ">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-800 dark:text-white">Naše sveobuhvatne usluge</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {usluge.map((usluga, index) => (
            <Card key={index} className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">
              <CardHeader>
                <usluga.icon className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />
                <CardTitle>{usluga.title}</CardTitle>
                <CardDescription>{usluga.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
