import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

const pricingPackages = [
  {
    title: "Transport vozila",
    price: "60 KM",
    description: "Sarajevo i okolica",
    features: [
      "Besprijekorno šlepanje do 20 km",
      "Brz dolazak na lokaciju",
      "Stručan i ljubazan tim",
      "Sigurna i pouzdana usluga",
    ],
  },
  {
    title: "Transport vozila preko 20km",
    price: "Cijena po dogovoru",
    description: "Cijena zavisi od tipa vozila i udaljenosti.",
    features: [
      "Šlepanje na veće udaljenosti",
      "Korištenje moderne i pouzdane opreme",
      "Transparentne cijene bez skrivenih troškova",
      "Dostupnost 24/7",
    ],
  },
  {
    title: "Druge usluge transporta",
    price: "Cijena po dogovoru.",
    description: "Usluga transporta radnih masina, viljuskara, kamiona i ostalih terata 2.5T do 8T po dogovoru!",
    features: [
      "Siguran transport teške opreme",
      "Prioritetna obrada i podrška",
      "Usluga prilagođena vašim potrebama",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="pt-20 pb-20 px-6 bg-white dark:bg-gray-900">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-800 dark:text-white">
          Cjenovnik
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingPackages.map((pkg, index) => (
            <Card
              key={index}
              className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
            >
              <CardHeader>
                <CardTitle className="text-xl mb-1">{pkg.title}</CardTitle>
                <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">{pkg.price}</p>
                <CardDescription className="mt-2">{pkg.description}</CardDescription>
              </CardHeader>
              <CardContent className="mt-4 space-y-2">
                {pkg.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>{feature}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
