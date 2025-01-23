import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "How quickly can you respond to a towing request?",
    answer:
      "We pride ourselves on our fast response times. In most cases, we can reach you within 30 minutes to an hour, depending on your location and traffic conditions.",
  },
  {
    question: "What types of vehicles can you tow?",
    answer:
      "We have the equipment to tow a wide range of vehicles, including cars, motorcycles, SUVs, vans, and even some light-duty trucks. For heavy-duty towing, please call us to discuss your specific needs.",
  },
  {
    question: "Do you offer 24/7 service?",
    answer:
      "Yes, we offer round-the-clock service, 365 days a year. We understand that vehicle emergencies can happen at any time, so we're always here to help.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We provide towing and roadside assistance services throughout the greater metropolitan area and surrounding suburbs. Please call us to confirm service in your specific location.",
  },
  {
    question: "How much does towing cost?",
    answer:
      "Towing costs can vary depending on the type of vehicle, distance, and specific situation. We provide upfront pricing before beginning any service. Please call us for a quote.",
  },
  {
    question: "Do you accept insurance for payment?",
    answer:
      "Yes, we work with most major insurance companies. If your policy covers towing, we can often bill your insurance directly. Please have your insurance information ready when you call.",
  },
]

export default function FAQ() {
  return (
    <section className="py-20 px-6 bg-blue-50">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-800">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
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
