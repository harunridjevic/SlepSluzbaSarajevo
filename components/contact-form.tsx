"use client";
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function KontaktForma() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSelectChange = (value: string) => {
    setFormData({ ...formData, serviceType: value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Obradi slanje forme ovdje
    console.log(formData)
  }

  return (
    <section id="contact" className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-800">Kontaktirajte nas</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">
                Ime
              </label>
              <Input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
                Email
              </label>
              <Input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
          </div>
          <div>
            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-700">
              Telefon
            </label>
            <Input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="serviceType" className="block mb-2 text-sm font-medium text-gray-700">
              Vrsta usluge
            </label>
            <Select onValueChange={handleSelectChange}>
              <SelectTrigger>
                <SelectValue placeholder="Izaberite uslugu" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="towing">Vuča</SelectItem>
                <SelectItem value="roadside">Pomoć na cesti</SelectItem>
                <SelectItem value="recovery">Oporavak vozila</SelectItem>
                <SelectItem value="other">Ostalo</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">
              Poruka
            </label>
            <Textarea id="message" name="message" value={formData.message} onChange={handleChange} required />
          </div>
          <Button type="submit" className="w-full">
            Pošaljite poruku
          </Button>
        </form>
      </div>
    </section>
  )
}
