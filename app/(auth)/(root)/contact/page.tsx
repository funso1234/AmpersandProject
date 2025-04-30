"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Linkedin, Instagram, Facebook } from "lucide-react"

export default function ContactUsPage() {
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
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Navbar */}
      <div className="relative z-10 container mx-auto flex items-center justify-between px-4 py-6">
        <div className="flex items-center gap-3">
          <Image src="/Group.png" alt="logo" width={32} height={32} />
          <div className="flex flex-col leading-tight">
            <span className="text-white font-bold text-lg">Ampersand Hi-Tech</span>
            <span className="text-xs text-gray-400 font-semibold">Hi~Tech Technologies</span>
          </div>
        </div>
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

      {/* Hero Content */}
      <section className="relative z-10 h-[400px] flex flex-col justify-center items-start p-6 md:p-12 max-w-3xl mt-20">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Contact Us</h1>
        <p className="text-white text-lg md:text-xl leading-relaxed">
          We’re here to answer any questions you may have. Reach out to us and let’s start a conversation.
        </p>
      </section>

      <section className="w-full py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Left Column - Contact Information */}
          <div className="space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">Location</h2>
              <p className="text-gray-600">
                80 Sparklight Estate, Ojodu,
                <br />
                Lagos.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">Open hours</h2>
              <div className="space-y-1 text-gray-600">
                <p>info@ampersandhitech.com</p>
                <p>0701 234 5678</p>
                <p>0801 000 3456</p>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Form</h2>
            <form className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <Input type="text" placeholder="Name" className="border-gray-300 focus:border-gray-500" />
                <Input type="email" placeholder="Email" className="border-gray-300 focus:border-gray-500" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <Input type="tel" placeholder="Phone number" className="border-gray-300 focus:border-gray-500" />
                <Input type="text" placeholder="Company (optional)" className="border-gray-300 focus:border-gray-500" />
              </div>
              <Textarea placeholder="Message" className="min-h-[120px] border-gray-300 focus:border-gray-500" />
              <div className="flex items-start space-x-3">
                <Checkbox
                  id="terms"
                  className="mt-1 data-[state=checked]:bg-gray-900 data-[state=checked]:border-gray-900"
                />
                <label htmlFor="terms" className="text-sm text-gray-600 leading-tight">
                  I agree to allow Ampersand Hi-Tech to store and process my information in accordance with data
                  protection regulations for the purpose of responding to my inquiry.
                </label>
              </div>
              <Button className="bg-gray-900 hover:bg-gray-800 text-white px-8 rounded-full">Send</Button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <section className="w-full bg-[#F4F4F4]">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="relative w-full h-[500px] lg:h-[600px] rounded">
          <Image
            src="/image 27.png"
            width={494}
            height={624}
            alt="IT professional working on a laptop next to server rack"
            className="object-cover object-center"
          />
        </div>

        <div className="px-6 py-10 lg:py-16 space-y-8">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900">Deep knowledge in the field</h2>

          <p className="text-gray-700 leading-relaxed">
            Our deep roots in the technology industry have established Ampersand Hi-Tech as a trusted provider of
            cutting-edge solutions. With years of experience serving diverse communities, we have refined our expertise
            in internet access, network distribution, and network security. Our team possesses an unparalleled
            understanding of the challenges and opportunities within the digital landscape, enabling us to deliver
            innovative and reliable services that not only meet but exceed the expectations of our clients.
          </p>

          <div className="pt-4">
            <h3 className="text-xl font-medium text-gray-900 mb-4">Subscribe to our newsletter</h3>

            <div className="flex flex-col sm:flex-row gap-3">
              <Input type="text" placeholder="First name" className="bg-gray-100 border-gray-300" />
              <Input type="email" placeholder="Email" className="bg-gray-100 border-gray-300" />
              <Button className="bg-gray-900 hover:bg-gray-800 text-white">Subscribe</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
    </main>

        {/* Footer is now properly inside return and outside <main> */}
        <footer className="w-full bg-gray-900 text-white py-8 mt-30">
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
