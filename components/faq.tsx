import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const cestoPostavljanaPitanja = [
  {
    question: "Koliko brzo možete odgovoriti na zahtjev za vuču?",
    answer:
      "Ponosimo se brzim vremenima odgovora. U većini slučajeva možemo doći do vas u roku od 30 minuta do sat vremena, zavisno od vaše lokacije i saobraćajnih uslova.",
  },
  {
    question: "Koje vrste vozila možete vući?",
    answer:
      "Imamo opremu za vuču širokog spektra vozila, uključujući automobile, motocikle, SUV-ove, furgone, pa čak i neka vozila za lakši teret. Za vuču teških vozila, molimo vas da nas pozovete kako bismo razgovarali o vašim specifičnim potrebama.",
  },
  {
    question: "Nudite li uslugu 24/7?",
    answer:
      "Da, nudimo uslugu 24 časa, 365 dana u godini. Razumijemo da se vanredne situacije sa vozilima mogu desiti u bilo kojem trenutku, pa smo uvijek tu da pomognemo.",
  },
  {
    question: "Koje oblasti pokrivate?",
    answer:
      "Pružamo usluge vuče i pomoći na putu u široj metropolitanskoj oblasti i okolnim predgrađima. Molimo vas da nas pozovete kako biste potvrdili uslugu na vašoj specifičnoj lokaciji.",
  },
  {
    question: "Koliko košta vuča?",
    answer:
      "Cijena vuče može varirati zavisno od vrste vozila, udaljenosti i specifične situacije. Nudimo unaprijed određene cijene prije nego što započnemo bilo koju uslugu. Molimo vas da nas pozovete za tačnu ponudu.",
  },
  {
    question: "Prihvatate li osiguranje kao način plačanja?",
    answer:
      "Da, radimo sa većinom velikih osiguravajućih kompanija. Ako vaša polisa pokriva vuču, često možemo direktno naplatiti vašu osiguravajuću kompaniju. Molimo vas da imate informacije o osiguranju spremne prilikom poziva.",
  },
]

export default function FAQ() {
  return (
    <section className="py-20 px-6 bg-blue-50">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-800">Često postavljana pitanja</h2>
        <Accordion type="single" collapsible className="w-full">
          {cestoPostavljanaPitanja.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
