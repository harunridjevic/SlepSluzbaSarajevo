import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Truck, Car, Wrench, Clock, Battery, Key, FuelIcon as GasPump, PenToolIcon as Tools } from "lucide-react"

const services = [
  {
    icon: Truck,
    title: "Towing",
    description: "Fast and safe towing for all vehicle types, from cars to heavy-duty trucks.",
  },
  {
    icon: Car,
    title: "Roadside Assistance",
    description: "Quick help for breakdowns, flat tires, and other emergencies.",
  },
  {
    icon: Wrench,
    title: "Vehicle Recovery",
    description: "Specialized equipment for difficult situations, including off-road recovery.",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Round-the-clock service for your peace of mind, any day, any time.",
  },
  { icon: Battery, title: "Jump Start", description: "Quick battery jump-start service to get you back on the road." },
  {
    icon: Key,
    title: "Lockout Service",
    description: "Professional lockout assistance for when you're locked out of your vehicle.",
  },
  {
    icon: GasPump,
    title: "Fuel Delivery",
    description: "Emergency fuel delivery when you run out of gas unexpectedly.",
  },
  { icon: Tools, title: "Mobile Repairs", description: "On-the-spot repairs for minor mechanical issues." },
]

export default function Services() {
  return (
    <section id="services" className="py-20 px-6 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-800">Our Comprehensive Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardHeader>
                <service.icon className="w-12 h-12 text-blue-600 mb-4" />
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-blue-600 font-semibold">Learn more →</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
