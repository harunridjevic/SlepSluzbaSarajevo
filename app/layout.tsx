import "./globals.css"
import AnimationWrapper from "../components/AnimationWrapper"
import { metadata } from "./metadata"

export { metadata }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <AnimationWrapper>{children}</AnimationWrapper>
      </body>
    </html>
  )
}