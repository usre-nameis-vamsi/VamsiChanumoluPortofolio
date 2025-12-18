"use client"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import { useRef } from "react"
import { Award, ExternalLink } from "lucide-react"
import Link from "next/link"
import { CERTIFICATIONS } from "@/lib/certifications-data"

gsap.registerPlugin(ScrollTrigger, useGSAP)

const Certifications = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
          end: "bottom 50%",
          toggleActions: "restart none none reverse",
          scrub: 1,
        },
      })

      tl.from(".certification-item", {
        y: 50,
        opacity: 0,
        stagger: 0.3,
      })
    },
    { scope: containerRef },
  )

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "bottom 50%",
          end: "bottom 20%",
          scrub: 1,
        },
      })

      tl.to(containerRef.current, {
        y: -150,
        opacity: 0,
      })
    },
    { scope: containerRef },
  )

  return (
    <section className="py-section" id="certifications">
      <div className="pl-[8%] pr-[4%] w-full" ref={containerRef}>
        <h2 className="text-5xl md:text-6xl font-anton mb-20 text-left">Certifications</h2>

        <div className="grid gap-14">
          {CERTIFICATIONS.map((cert, index) => (
            <Link href={`/certifications/${cert.id}`} key={index} className="certification-item group">
              <div className="flex items-center gap-4 mb-3">
                <Award className="text-primary h-8 w-8 group-hover:scale-110 transition-transform" />
                <p className="text-5xl font-anton leading-none group-hover:text-primary transition-colors">
                  {cert.name}
                </p>
              </div>
              <div className="ml-12 flex justify-between items-end">
                <div>
                  <p className="text-xl text-muted-foreground">{cert.issuer}</p>
                  <p className="text-lg text-muted-foreground">{cert.year}</p>
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2 text-primary">
                  View details <ExternalLink size={16} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications
