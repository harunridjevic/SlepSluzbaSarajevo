import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Truck, Car, Wrench, Clock, Battery, Key, FuelIcon as GasPump, PenToolIcon as Tools } from "lucide-react"

const usluge = [
  {
    icon: Truck,
    title: "Vučna služba",
    description: "Brza i sigurna vuča za sve vrste vozila, od automobila do teških kamiona.",
  },
  {
    icon: Car,
    title: "Pomoć na putu",
    description: "Brza pomoć za kvarove, probušene gume i druge hitne situacije.",
  },
  {
    icon: Wrench,
    title: "Opservacija vozila",
    description: "Specijalizovana oprema za teške situacije, uključujući vuču izvan puta.",
  },
  {
    icon: Clock,
    title: "Dostupnost 24/7",
    description: "Služba dostupna 24 časa, svaki dan, u bilo koje vrijeme, za vaš mir.",
  },
  { icon: Battery, title: "Pokretanje vozila", description: "Brza usluga za pokretanje akumulatora i vraćanje na put." },
  {
    icon: Key,
    title: "Služba za zaključavanje",
    description: "Profesionalna pomoć kada se zaključate u vozilu.",
  },
  {
    icon: GasPump,
    title: "Dostava goriva",
    description: "Hitna dostava goriva kada neočekivano ponestane.",
  },
  { icon: Tools, title: "Mobilne popravke", description: "Popravke na licu mjesta za manja mehanička oštećenja." },
]

export default function Usluge() {
  return (
    <section id="usluge" className="py-20 px-6 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-800">Naše sveobuhvatne usluge</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {usluge.map((usluga, index) => (
            <Card key={index} className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardHeader>
                <usluga.icon className="w-12 h-12 text-blue-600 mb-4" />
                <CardTitle>{usluga.title}</CardTitle>
                <CardDescription>{usluga.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-blue-600 font-semibold">Saznajte više →</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
