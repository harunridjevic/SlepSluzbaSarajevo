"use client";
import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CallButton() {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Button size="lg" className="rounded-full w-16 h-16 bg-green-500 hover:bg-green-600 shadow-lg">
        <Phone className="w-8 h-8" />
        <span className="sr-only">Call Now</span>
      </Button>
    </div>
  )
}
