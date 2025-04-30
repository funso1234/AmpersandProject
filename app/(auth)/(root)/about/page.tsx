"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Linkedin, Instagram, Facebook } from "lucide-react"

export default function AboutPage() {
  return (
    <>
      <main className="min-h-screen relative bg-white text-gray-800">
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
        <div className="relative z-10 container mx-auto px-20 flex items-center justify-between ">
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

        {/* Hero Text */}
        <div className="relative container mx-auto px-20 z-10 flex flex-col justify-center h-[300px]  text-white mt-40">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">About us</h1>
          <p className="text-lg md:text-xl max-w-3xl leading-relaxed">
            Building an excellent, innovative, and sustainable connected future—
            <span className="block md:inline">One Reliable Network at a Time.</span>
          </p>
        </div>

        {/* Empowering Communities */}
        <section className="relative z-10 bg-white container mx-auto lg:px-24 py-30 mt-20">
          <div className="max-w-4xl mb-12">
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-800 mb-4">
              Empowering
              <br />
              Communities Through Innovation
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <Image
                src="/image 2.png"
                alt="Team meeting at Ampersand Hi-Tech"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <p className="text-gray-700 leading-relaxed mb-6">
                At Ampersand Hi-Tech, we are driven by a mission to bridge gaps and foster connections through cutting-edge technology...
              </p>
            </div>
          </div>
        </section>

        {/* Mission and Vision */}
        <section className="w-full md:px-16 py-12 bg-[#F4F4F4]">
          <div className="gap-6 px-4">
            <div className="relative container mx-auto  grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x-6 divide-white">
              <div className="p-8 md:p-10">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Our Mission</h2>
                <p className="text-lg text-gray-700">
                To <span className="font-medium">connect, secure, and elevate</span> communities through{" "}
              <span className="font-medium">scalable, sustainable, and future-ready</span> technology infrastructure.
                </p>
              </div>
              <div className="p-8 md:pl-30 md:p-10">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Our Vision</h2>
                <p className="text-gray-700">
              A world where <span className="font-medium">no one is left offline</span>—where every business, home, and
              organization has access to <span className="font-medium">high-speed, resilient, and innovative</span>{" "}
              solutions that unlock growth.
            </p>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy Image */}
        <section className="container mx-auto mt-20 w-full overflow-hidden">
          <Image
            src="/Frame 20.png"
            width={1312}
            height={500}
            alt="Looking up at tall trees"
            priority
            className="object-cover mx-auto"
          />
        </section>

        {/* Company Values */}
        <section className="w-full md:px-16 mt-20 bg-[#F4F4F4]">
          <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <p className="text-lg">
                From day one, <span className="font-semibold">Ampersand Hi~Tech</span> has been built on a foundation of{" "}
              <span className="font-semibold">bold thinking and technological disruption</span>. Innovation isn't just a
              philosophy for us— it's the heartbeat of our mission to{" "}
              <span className="font-semibold">connect communities and redefine digital possibilities</span>.
                </p>
              </div>
              <div className="space-y-6">
                <p className="text-lg">
                Our founders envisioned a world where reliable, secure, and scalable technology could transform how people
                live, work, and grow. That vision drives us to:
                </p>
                <ul className="space-y-4 list-disc pl-5">
                  <li className="text-lg"><span className="font-semibold">Pioneer next-gen internet solutions</span> that outpace demand.</li>
                  <li className="text-lg"><span className="font-semibold">Engineer resilient networks</span> for closed communities and
                  enterprises.</li>
                  <li className="text-lg"> <span className="font-semibold">Embed security and sustainability</span> into every layer of our
                  infrastructure.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Final Statement */}
        <section className="min-h-[30vh] md:px-20 mt-16 py-16">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-lg md:text-xl text-gray-700 my-8 leading-relaxed">
              We cultivate a culture that challenges norms, embraces emerging tech, and turns obstacles into breakthroughs. 
              As the digital landscape evolves, our commitment to Innovation ensures we don't just adapt—we lead the charge.
            </p>
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
