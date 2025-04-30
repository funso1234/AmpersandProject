"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Facebook, Instagram, Linkedin } from "lucide-react";


export default function HomePage() {
  return (
    <>
    <main className="min-h-screen relative md:px-20 bg-white text-gray-800">
      {/* Background image and overlay */}
      <div className="absolute inset-0 z-0 h-[710px]">
        <Image
          src="/home.png"
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
      

      <div className="relative z-10 container mx-auto h-full flex flex-col justify-center px-4 mt-50">
        <div className="max-w-lg">
          <h1 className="text-5xl font-bold text-white mb-4">Connecting Communities</h1>
          <p className="text-white/80 mb-8">
            Ampersand Hi-Tech provides reliable internet and technology services that educate, inspire, and empower
            communities to build a better future for individuals, businesses, and organizations to thrive in the
            digital age.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-amber-400 transition-colors"
          >
            Talk To Our Team
          </Link>
        </div>
      </div>
    

    {/* Why Choose Section */}
    <section className="py-16 px-4 bg-white mt-40">
      
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Ampersand Hi-Tech?</h2>
        <p className="text-gray-600 max-w-3xl mb-12">
          Whether for small or large-scale projects, we are committed to delivering cutting-edge results, contributing
          to a more sustainable and innovative internet infrastructure.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-20 mb-16">
          {/* Card 1 */}
          <div className="relative rounded-lg overflow-hidden group">
            <div className="absolute inset-0 z-0">
              <Image
                src="/network.png"
                alt="Network dish for communities"
                fill
                className="object-cover brightness-75 group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40"></div>
            </div>
            <div className="relative z-10 p-6 h-64 flex flex-col justify-end">
              <h3 className="text-white text-xl font-bold">Engineered for Diverse Communities</h3>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative rounded-lg overflow-hidden group">
            <div className="absolute inset-0 z-0">
              <Image
                src="/security.png"
                alt="Secure network visualization"
                fill
                className="object-cover brightness-75 group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40"></div>
            </div>
            <div className="relative z-10 p-6 h-64 flex flex-col justify-end">
              <h3 className="text-white text-xl font-bold">Reliable and Secure</h3>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative rounded-lg overflow-hidden group">
            <div className="absolute inset-0 z-0">
              <Image
                src="/customer.png"
                alt="Customer support representative"
                fill
                className="object-cover brightness-75 group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40"></div>
            </div>
            <div className="relative z-10 p-6 h-64 flex flex-col justify-end">
              <h3 className="text-white text-xl font-bold">Intuitive and Secure</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our
            <br />
            Service Categories
          </h2>
        </div>
        <div className="space-y-4">
          <p className="text-gray-700">
            Leading the market for two decades, we have been experts in energy efficiency. With an Ampersand Hi-Tech
            offers a wide range of services tailored to the specific needs of businesses, communities, and individuals.
            Whether you're looking to enhance connectivity, improve security, or optimize your network infrastructure,
            we have a solution for you.
          </p>
          <p className="text-gray-700">
            Explore our core service categories below to learn more about how we can help you achieve your technology
            goals.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-[1300]">
        {/* Internet Access Card */}
        <div className="relative overflow-hidden col-span-2 rounded-xl bg-gray-900 text-white">
          <div className="absolute inset-0 z-0">
            <Image
              src="/image 17.png?height=300&width=600"
              alt="Fiber optic network cables with blue light"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50 p-8 flex flex-col justify-end">
              <p className="text-sm md:text-base">
                Experience blazing-fast, reliable, and symmetrical internet connections through our state-of-the-art
                fiber-optic network. We offer tailored plans to match your unique needs, whether it's for streaming,
                gaming, or running an online business. Discover SPRY, our dedicated high-speed internet service for
                homes, offering unlimited bandwidth for surfing and completing tasks at a lower cost.
              </p>
            </div>
          </div>
        </div>

        {/* Internet Access Title Card */}
        <div className="relative overflow-hidden rounded-xl bg-gray-900 text-white">
          <div className="relative h-[300px] ">
            <Image
              src="/image 18.png"
              alt="Internet router with blue lights"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50 p-8 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">Internet Access</h3>
              <p className="text-sm md:text-base">High-Speed Internet That Keeps You Connected</p>
            </div>
          </div>
        </div>

        {/* Network Distribution Card */}
        <div className="relative overflow-hidden rounded-xl bg-gray-900 text-white">
          <div className="relative h-[300px] w-full">
            <Image
              src="/image 19.png?height=300&width=600"
              alt="Network cables with blue lighting"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50 p-8 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">Network Distribution</h3>
              <p className="text-sm md:text-base">Seamless Network Solutions for Your Business</p>
            </div>
          </div>
        </div>

        {/* Network Solutions Card */}
        <div className="relative col-span-2 overflow-hidden rounded-xl bg-gray-900 text-white">
          <div className="absolute h-[300px] w-full">
            <Image
              src="/image 20.png?height=300&width=600"
              alt="Server room with red and blue lighting"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50 p-8 flex flex-col justify-end">
              <p className="text-sm md:text-base">
                We provide robust and scalable network solutions to support the diverse needs of businesses within
                closed communities. Our expertise spans various sectors, including commercial printing, food service,
                grocery, healthcare, hospitality, industrial, and more.
              </p>
            </div>
          </div>
        </div>

        

        {/* Network Solutions Card */}
        <div className="relative overflow-hidden col-span-2 rounded-xl bg-gray-900 text-white">
          <div className="absolute h-[300px] w-full">
            <Image
              src="/image 21.png?height=300&width=600"
              alt="Server room with red and blue lighting"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50 p-8 flex flex-col justify-end">
              <p className="text-sm md:text-base">
                Safeguard your valuable data and personal information with our cutting-edge security
                   solutions. Our managed network security services deliver proactive monitoring and
                management of your computer environment, implementing and maintaining measures
                                             to protect your network and data from cyber threats.
              </p>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-xl bg-gray-900 text-white">
          <div className="relative h-[300px] w-full">
            <Image
              src="/image 22.png?height=300&width=600"
              alt="Network cables with blue lighting"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50 p-8 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">Network Security</h3>
              <p className="text-sm md:text-base">
                Protecting Your Data, Securing your<br/>
                Peace of Mind
              </p>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-xl bg-gray-900 text-white">
          <div className="relative h-[300px] w-full">
            <Image
              src="/image 25.png?height=300&width=600"
              alt="Network cables with blue lighting"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50 p-8 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">Consultancy</h3>
              <p className="text-sm md:text-base">Experts Guidance for Your Technology<br/>Needs</p>
            </div>
          </div>
        </div>

        {/* Network Solutions Card */}
        <div className="relative overflow-hidden col-span-2 rounded-xl bg-gray-900 text-white">
          <div className="absolute h-[300px] w-full">
            <Image
              src="/image 26.png?height=300&width=600"
              alt="Server room with red and blue lighting"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50 p-8 flex flex-col justify-end">
              <p className="text-sm md:text-base">
                Our experienced consultants provide tailored advice and support in various areas
                including ICT consultancy, corporate awareness on network security, and training on
                network and network security.
              </p>
            </div>
          </div>
        </div>

        
  
      </div>

     <section className="w-full bg-[#F4F4F4] -pt-10 mt-20">
           <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
             <div className="relative w-full h-[600px] rounded mb-20">
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
                   <Input type="text" placeholder="First name" className="bg-black border-gray-300" />
                   <Input type="email" placeholder="Email" className="bg-black border-gray-300" />
                   <Button className="bg-white hover:bg-gray-800 text-black">Subscribe</Button>
                 </div>
               </div>
             </div>
           </div>
         </section>

      <div className="max-w-3xl p-6 mt-20">
      <h2 className="text-3xl font-medium text-gray-800 mb-4">Get in touch with us</h2>

      <p className="text-gray-700 mb-6">
        If you're ready to explore how our expertise in energy efficiency, LED lighting, photovoltaic energy, and
        electric mobility can benefit your projects, don't hesitate to reach out. We're here to listen, collaborate, and
        provide you with tailored solutions that align with your specific needs and goals.
      </p>

      <Link
        href="/contact"
        className="inline-flex items-center font-medium hover:text-blue-800 transition-colors"
      >
        Contact us <ArrowRight className="ml-1 h-4 w-4" />
      </Link>
    </div>

   
    </div>
    
    </section>

  </main>
  <footer className="w-full bg-gray-900 text-white py-8">
      <div className="mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start  rounded-lg p-6 mb-6">
          {/* Logo and Contact Info */}
          <div className="mb-6 md:mb-0">
            <div className="flex items-center gap-3">
                      <Image
                        src="/Group.png"
                        alt="logo"
                        width={32}
                        height={32}
                      />
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
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About us
                </Link>
              </li>
              <li>
                <Link href="/contact us" className="text-gray-400 hover:text-white transition-colors">
                  Contact us
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="mb-6 md:mb-0">
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy and Cookies Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                  Terms & Condition
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4">
            <Link href="https://www.linkedin.com/company/ampersand-hi-technologies-limited" className="text-white hover:text-blue-400 transition-colors">
              <Linkedin size={20} />
            </Link>
            <Link href="https://www.instagram.com/ampersandhitechnologies" className="text-white hover:text-pink-400 transition-colors">
              <Instagram size={20} />
            </Link>
            <Link href="https://www.facebook.com/ampersandhitech" className="text-white hover:text-blue-500 transition-colors">
              <Facebook size={20} />
            </Link>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-4  border-gray-800">
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