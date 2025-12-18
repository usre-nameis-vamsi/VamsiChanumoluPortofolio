import type React from "react"
import type { Metadata } from "next"
import { Anton, Roboto_Flex } from "next/font/google"

import "./globals.css"
import Footer from "@/components/Footer"
import ScrollProgressIndicator from "@/components/ScrollProgressIndicator"
import ParticleBackground from "@/components/ParticleBackground"
import Navbar from "@/components/Navbar"
import CustomCursor from "@/components/CustomCursor"
import Preloader from "@/components/Preloader"
import StickyEmail from "@/app/_components/StickyEmail"
import LenisProvider from "@/app/_components/LenisProvider"

const antonFont = Anton({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
  fallback: ["sans-serif"],
})

const robotoFlex = Roboto_Flex({
  weight: ["100", "400", "500", "600", "700", "800"],
  style: "normal",
  subsets: ["latin"],
  variable: "--font-roboto-flex",
  display: "swap",
  fallback: ["system-ui", "arial"],
})

export const metadata: Metadata = {
  title: "Portfolio - Vamsi Chanumolu",
  description: "Personal portfolio of Vamsi Chanumolu",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${antonFont.variable} ${robotoFlex.variable} antialiased`}
      >
        <LenisProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />

          <CustomCursor />
          <Preloader />
          <ScrollProgressIndicator />
          <ParticleBackground />
          <StickyEmail />
        </LenisProvider>
      </body>
    </html>
  )
}
