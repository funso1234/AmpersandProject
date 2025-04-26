"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
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

      <div className="relative z-10 flex flex-col justify-center h-[300px] px-6 md:px-16 lg:px-24 text-white mt-40">
          <h1 className="text-4xl md:text-6xl font-bold mb-4"> Privacy and
          <br />
          Cookies Policy</h1>
          <p className="text-lg md:text-xl max-w-3xl leading-relaxed">
          This privacy is designed to inform you about how we collect, use, and protect your personal information when
          you interact with our website.
          </p>
        </div>

      <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 mt-20">
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Information we collect</h2>
        <p className="text-gray-700 leading-relaxed">
          We gather various types of information to enhance and optimize our services. This includes personal
          information such as your name, email address, phone number, and mailing address, collected when you register
          for an account, contact us, or use our services. We also gather usage information, which encompasses details
          about your interactions with our website and services, including your IP address, browser type, device
          information, pages visited, and actions taken.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">2. How we use your information</h2>
        <p className="text-gray-700 leading-relaxed">
          Our utilization of the information we collect serves multiple purposes. We use your personal data to furnish
          requested services, such as responding to inquiries, processing orders, and delivering newsletters or updates
          if you opt to receive them. Additionally, we analyze usage information to gain insights into how our website
          and services are used, which informs our continuous improvement efforts, content customization, and
          enhancements to user experiences.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">3. Communication</h2>
        <p className="text-gray-700 leading-relaxed">
          We may employ your contact information to communicate with you concerning our services, provide updates, and
          convey important notices. You have the option to opt out of marketing communications at any time.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Cookies and Tracking Technologies</h2>
        <p className="text-gray-700 leading-relaxed">
          To better understand your browsing behavior and improve your website experience, we utilize cookies and
          similar tracking technologies. Cookies are small data files stored on your device that facilitate our
          comprehension of your preferences. By utilizing our website, you implicitly consent to our use of cookies, as
          detailed in our Cookies Policy. You maintain the ability to manage your cookie preferences through your
          browser settings.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Security</h2>
        <p className="text-gray-700 leading-relaxed">
        We prioritize data security and employ reasonable measures to safeguard your information from unauthorized
            access, disclosure, alteration, or destruction. While we diligently strive to protect your data, it&apos;s
            important to acknowledge that no method of transmission over the internet or electronic storage is entirely
            secure. Consequently, we cannot provide absolute security guarantees.
        </p>
      </section>
    </div>
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