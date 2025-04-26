"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Linkedin, Instagram, Facebook } from "lucide-react"

export default function ServicePage() {

    const services = [
        {
          title: "High-Speed Internet Access",
          content:
            "We provide reliable high-speed internet solutions for businesses and residential customers. Our services include fiber optic connections, broadband, and dedicated lines with guaranteed uptime and 24/7 technical support.",
        },
        {
          title: "Network Distribution & Infrastructure",
          content:
            "Our team designs, implements, and maintains robust network infrastructure solutions. We specialize in structured cabling, wireless networks, server room design, and network hardware deployment to ensure optimal performance and scalability.",
        },
        {
          title: "Network Security & Cybersecurity",
          content:
            "Protect your digital assets with our comprehensive security solutions. We offer firewall implementation, intrusion detection systems, vulnerability assessments, security audits, and employee security awareness training to safeguard your network.",
        },
        {
          title: "Technology Consultancy",
          content:
            "Our expert consultants provide strategic guidance on technology investments and implementations. We help businesses align their IT infrastructure with business goals, optimize existing systems, and plan for future technology needs.",
        },
      ]
  return (
    <>
    <main className="min-h-screen relative md:px-20 bg-white text-gray-800">
      {/* Background image and overlay */}
      <div className="absolute inset-0 z-0 h-[600px]">
        <Image
          src="/image 41.png"
          width={1544}
          height={700}
          alt="Network background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Navbar */}
      <div className="relative z-10 container mx-auto flex items-center justify-between px-4 py-6">
        {/* Logo + Text */}
        <div className="flex items-center gap-3">
          <Image
            src="/Group.png"
            alt="logo"
            width={40}
            height={40}
          />
          <div className="flex flex-col leading-tight">
            <span className="text-white font-bold text-lg">Ampersand Hi-Tech</span>
            <span className="text-xs text-gray-400 font-semibold">Hi~Tech Technologies</span>
          </div>
        </div>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-6 text-white">
          <Link href="/" className="font-medium hover:text-gray-300 transition">Home</Link>
          <Link href="/about" className="font-medium hover:text-gray-300 transition">About us</Link>
          <Link href="/services" className="font-medium hover:text-gray-300 transition">Services</Link>
          <Link href="/contact">
            <Button
              variant="outline"
              className="font-medium bg-white/20 text-white border-white hover:bg-white/30 rounded-full"
            >
              Contact us
            </Button>
          </Link>
          
        </div>

        
      </div>
       {/* Content */}
       <div className="relative z-10 h-full flex flex-col justify-center p-6 md:px-12 lg:p-16 max-w-3xl mt-40">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">Services</h1>
          <p className="text-white text-lg md:text-xl leading-relaxed">
            At Ampersand Hi-Tech, we deliver secure, scalable, and high-performance solutions designed for businesses,
            institutions, and closed communities. Explore how we can transform your digital infrastructure.
          </p>
        </div>

        <div className="w-full max-w-4xl mx-auto p-4 mt-20 md:px-1">
      <Accordion type="single" collapsible className="w-full">
        {services.map((service, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="border border-slate-200 rounded-sm mb-4 overflow-hidden"
          >
            <AccordionTrigger className="px-4 py-6 hover:no-underline hover:bg-slate-50 data-[state=open]:bg-slate-50">
              <span className="text-xl font-medium text-left">{service.title}</span>
              
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-6 pt-2">
              <p className="text-slate-700">{service.content}</p>
              
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
    <section className="relative md:px-16 mt-20 w-full overflow-hidden">
              <Image
                src="/Frame 18.png"
                width={1312}
                height={500}
                alt="Looking up at tall trees"
                priority
                className="object-cover"
              />
            </section>

            <section className="max-w-4xl mt-20 py-12 px-4">
      <h2 className="text-3xl font-bold mb-8">Why partner with us?</h2>

      <div className="space-y-4 mb-8">
        <div className="flex-col">
          <span className="font-semibold">20+ Years of Expertise</span>
          <span className="text-muted-foreground">– Trusted by institutions and businesses.</span>
        </div>

        <div className="flex-col">
          <span className="font-semibold">Community-Centric Design</span>
          <span className="text-muted-foreground">– Solutions built for closed environments.</span>
        </div>

        <div className="flex-col">
          <span className="font-semibold">SPRY</span>
          <span className="text-muted-foreground">: Affordable, unlimited bandwidth for seamless connectivity.</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-4">
        <Button variant="outline" className="bg-gray-100 hover:bg-gray-200">
          Get a Custom Quote
        </Button>
        <Button variant="outline">Contact Our Team</Button>
      </div>
    </section>


      
    </main>
    
    {/* Footer is now properly inside return and outside <main> */}
    <footer className="w-full bg-gray-900 text-white py-8">
            <div className="mx-auto px-4">
              <div className="flex flex-col md:flex-row justify-between items-start p-6 mb-6">
                {/* Logo + Info */}
                <div className="mb-6 md:mb-0">
                  <div className="flex items-center gap-3">
                    <Image src="/Group.png" alt="logo" width={32} height={32} />
                    <div className="flex flex-col leading-tight">
                      <span className="text-white font-bold text-lg">Ampersand Hi-Tech</span>
                      <span className="text-xs text-gray-400 font-semibold">Hi~Tech Technologies</span>
                    </div>
                  </div>
                  <div className="text-gray-400 text-sm mb-1">
                    <a href="mailto:info@ampersandhitech.com">info@ampersandhitech.com</a>
                  </div>
                  <div className="text-gray-400 text-sm mb-1">0701 234 5678</div>
                  <div className="text-gray-400 text-sm">0801 000 3456</div>
                </div>
    
                {/* Pages */}
                <div className="mb-6 md:mb-0">
                  <h3 className="font-semibold text-lg mb-4">Pages</h3>
                  <ul className="space-y-2">
                    <li><Link href="/services" className="text-gray-400 hover:text-white">Services</Link></li>
                    <li><Link href="/about" className="text-gray-400 hover:text-white">About us</Link></li>
                    <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact us</Link></li>
                  </ul>
                </div>
    
                {/* Legal */}
                <div className="mb-6 md:mb-0">
                  <h3 className="font-semibold text-lg mb-4">Legal</h3>
                  <ul className="space-y-2">
                    <li><Link href="/privacy" className="text-gray-400 hover:text-white">Privacy and Cookies Policy</Link></li>
                    <li><Link href="/terms" className="text-gray-400 hover:text-white">Terms & Conditions</Link></li>
                  </ul>
                </div>
    
                {/* Social Icons */}
                <div className="flex space-x-4">
                  <Link href="https://www.linkedin.com/company/ampersand-hi-technologies-limited" className="text-white hover:text-blue-400">
                    <Linkedin size={20} />
                  </Link>
                  <Link href="https://www.instagram.com/ampersandhitechnologies" className="text-white hover:text-pink-400">
                    <Instagram size={20} />
                  </Link>
                  <Link href="https://www.facebook.com/ampersandhitech" className="text-white hover:text-blue-500">
                    <Facebook size={20} />
                  </Link>
                </div>
              </div>
    
              <div className="flex flex-col md:flex-row justify-between items-center pt-4 border-t border-gray-800">
                <div className="text-gray-500 text-sm mb-2 md:mb-0">©2025 Ampersand Hi-Tech</div>
                <div className="text-gray-500 text-sm">
                  Powered by <span className="text-white">Int+ Technology</span>
                </div>
              </div>
            </div>
          </footer>
    </>
  )
}
