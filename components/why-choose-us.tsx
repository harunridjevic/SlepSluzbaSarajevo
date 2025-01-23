import { CheckCircle } from "lucide-react"

const reasons = [
  "Experienced and professional team with years of industry expertise",
  "State-of-the-art towing equipment for safe and efficient service",
  "Competitive and transparent pricing with no hidden fees",
  "Lightning-fast response times to minimize your wait",
  "Fully insured and licensed for your peace of mind",
  "Eco-friendly practices to reduce our environmental impact",
  "Courteous and friendly staff dedicated to customer satisfaction",
  "Comprehensive range of services to meet all your needs",
]

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-20 px-6 bg-blue-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-800">Why Choose TowPro</h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <img
              src="/placeholder.svg?height=400&width=600"
              alt="Professional tow truck driver"
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="md:w-1/2 md:pl-10">
            <ul className="space-y-4 grid md:grid-cols-2 gap-4">
              {reasons.map((reason, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
