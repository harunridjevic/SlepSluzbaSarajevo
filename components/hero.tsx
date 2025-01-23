import { Button } from "@/components/ui/button"
import { PhoneCall, ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="bg-blue-700 text-white py-20 px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Brza i pouzdana vučna služba</h1>
          <p className="text-xl mb-6">
          Tu smo da vam pomognemo 24 sata dnevno, bez obzira na kišu ili sunce. Naš stručni tim spreman je da Vam pomogne u bilo kojoj hitnoj situaciji na vozilu.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-100">
              <PhoneCall className="mr-2" />
              Pozovite odmah
            </Button>
            <Button size="lg" variant="outline" className="bg-blue-700 text-white border-white hover:bg-blue-600">
              Saznaj više
              <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
        <div className="md:w-1/2">
        <img
          src="/main-img.jpg?height=400&width=600"
          alt="Tow truck in action"
          className="rounded-lg shadow-2xl"
        />
        </div>
      </div>
    </section>
  )
}
