"use client";
import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import emailjs from "emailjs-com"; // Import EmailJS

interface FormData {
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  message: string;
}

export default function KontaktForma() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    message: "",
  });

  const [buttonStatus, setButtonStatus] = useState("Pošaljite poruku");

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    },
    []
  );

  const handleSelectChange = useCallback(
    (value: string) => {
      setFormData((prev) => ({ ...prev, serviceType: value }));
    },
    []
  );

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();

      setButtonStatus("Slanje...");

      const { name, email, phone, serviceType, message } = formData;
      const emailData = { name, email, phone, serviceType, message };

      try {
        const { NEXT_PUBLIC_EMAILJS_SERVICE_ID, NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, NEXT_PUBLIC_EMAILJS_USER_ID } =
          process.env;

        if (!NEXT_PUBLIC_EMAILJS_SERVICE_ID || !NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || !NEXT_PUBLIC_EMAILJS_USER_ID) {
          throw new Error("Missing EmailJS configuration");
        }

        await emailjs.send(
          NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
          {
            from_name: name,
            from_email: email,
            from_phone: phone,
            service_type: serviceType,
            message,
          },
          NEXT_PUBLIC_EMAILJS_USER_ID
        );

        setButtonStatus("Poruka je uspešno poslata!");

        setFormData({ name: "", email: "", phone: "", serviceType: "", message: "" });

        setTimeout(() => {
          setButtonStatus("Pošaljite poruku");
        }, 3000);
      } catch (error) {
        console.error("Error sending email:", error);
        setButtonStatus("Došlo je do greške");

        setTimeout(() => {
          setButtonStatus("Pošaljite poruku");
        }, 3000);
      }
    },
    [formData]
  );

  return (
    <section id="contact" className="py-20 px-6 bg-white dark:bg-gray-900">
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-800 dark:text-white">Kontaktirajte nas</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                Ime
              </label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="dark:bg-gray-700 dark:text-white dark:border-gray-600"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                Email
              </label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="dark:bg-gray-700 dark:text-white dark:border-gray-600"
              />
            </div>
          </div>
          <div>
            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
              Telefon
            </label>
            <Input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="dark:bg-gray-700 dark:text-white dark:border-gray-600"
            />
          </div>
          <div>
            <label htmlFor="serviceType" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
              Vrsta usluge
            </label>
            <Select onValueChange={handleSelectChange} name="serviceType">
              <SelectTrigger className="dark:bg-gray-800 dark:border-gray-600">
                <SelectValue placeholder="Izaberite uslugu" />
              </SelectTrigger>
              <SelectContent className="dark:bg-gray-800 dark:border-gray-600">
                <SelectItem value="vuca">Vuča</SelectItem>
                <SelectItem value="pomoc-na-cesti">Pomoć na cesti</SelectItem>
                <SelectItem value="izvlacenje-vozila">Izvlačenje vozila</SelectItem>
                <SelectItem value="other">Ostalo</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
              Poruka
            </label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="dark:bg-gray-700 dark:text-white dark:border-gray-600"
            />
          </div>
          <Button type="submit" className="w-full dark:bg-blue-700 dark:hover:bg-blue-600">
            {buttonStatus}
          </Button>
        </form>
      </div>
    </section>
  );
}
