"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Linkedin, Instagram, Facebook, Dot } from "lucide-react"
import RequestQuoteForm from "@/app/component/requestquoteform"
import ContactForm from "@/app/component/contactusform"



export default function ServicePage() {

    const services = [
      {
        title: "High-Speed Internet Access",
    content: (
      <>
        <div className="flex items-start mb-2">
          <Dot className="inline mr-2 mt-1" />
          <span><strong>Fiber-optic & wireless networks</strong> with symmetrical speeds.</span>
        </div>
        <div className="flex items-start">
          <Dot className="inline mr-2 mt-1" />
          <span>Tailored plans for <strong>homes, businesses, and large-scale communities</strong>.</span>
        </div>
        <div className="flex items-start">
          <Dot className="inline mr-2 mt-1" />
          <span>
              <strong>SPRY:</strong> Affordable, unlimited bandwidth for seamless connectivity.
            </span>
        </div>
      </>
    ),
      },

      
        {
          title: "Network Distribution & Infrastructure",
    content: (
      <>
        <div className="flex items-start mb-2">
          <Dot className="inline mr-2 mt-1" />
          <span>
              Custom-built solutions for <strong>gated communities, campuses, and enterprises</strong>.
            </span>
        </div>
        <div className="flex items-start">
          <Dot className="inline mr-2 mt-1" />
          <span>
          Sectors served: <strong>Healthcare, Hospitality, Retail, Industrial, Public Services</strong>.
          </span>
        </div>
      </>
    ),
        },
        {
          title: "Network Security & Cybersecurity",
    content: (
      <>
        <div className="flex items-start mb-2">
          <Dot className="inline mr-2 mt-1" />
          <span>
              24/7 threat monitoring and <strong>enterprise-grade protection</strong>.
            </span>
        </div>
        <div className="flex items-start">
          <Dot className="inline mr-2 mt-1" />
          <span>Managed firewalls, encryption, and compliance support.</span>
        </div>
      </>
    ),
        },
        {
          title: "Technology Consultancy",
    content: (
      <>
        <div className="flex items-start mb-2">
          <Dot className="inline mr-2 mt-1" />
          <span>
              <strong>ICT strategy, network optimization, and security training</strong>.
            </span>
        </div>
        <div className="flex items-start">
          <Dot className="inline mr-2 mt-1" />
          <span>
              Future-proofing businesses for <strong>IoT, cloud integration, and 5G readiness</strong>.
            </span>
        </div>
      </>
    ),
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

        <div className="container max-w-4xl mx-auto p-4 mt-20 md:px-1">
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
        <Dialog>
      <DialogTrigger asChild>
      <Button variant="outline" className="bg-gray-100 hover:bg-gray-200">
          Get a Custom Quote
        </Button>
      </DialogTrigger>
      <DialogContent>
     <RequestQuoteForm/>
      </DialogContent>
    </Dialog>
        
        <Dialog>
      <DialogTrigger asChild>
      <Button variant="outline">Contact Our Team</Button>
      </DialogTrigger>
      <DialogContent>
     <ContactForm/>
      </DialogContent>
    </Dialog>
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
