import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <div>


<footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        {/* Logo and App Store Links */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-10">
          <div className="mb-8 md:mb-0">
            <Link href="/" className="mb-6 block">
              <div className="text-white   text-3xl font-bold">Tayssir</div>
            </Link>
            <div className="flex space-x-4">
              <Link href="https://play.google.com/store" className="block">
                <div className="border border-red-700 rounded-lg p-2 flex items-center">
                  <Image 
                    src="/assets/apps.png" 
                    width={120} 
                    height={40} 
                    alt="Google Play" 
                  />
                </div>
              </Link>
             
            </div>
          </div>

          {/* Services Links */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-medium mb-4">Our services</h3>
            <ul className="space-y-3">
              <li><Link href="/ride" className="hover:text-gray-300">Tayssir Ride</Link></li>
              <li><Link href="/food" className="hover:text-gray-300">Tayssir Food</Link></li>
              <li><Link href="/grocery" className="hover:text-gray-300">Tayssir Grocery</Link></li>
              <li><Link href="/b2b" className="hover:text-gray-300">Tayssir B2B</Link></li>
              <li><Link href="/order-for-someone" className="hover:text-gray-300">Order for someone else</Link></li>
            </ul>
          </div>

          {/* Partners Links */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-medium mb-4">Our partners</h3>
            <ul className="space-y-3">
              <li><Link href="/drivers" className="hover:text-gray-300">Drivers</Link></li>
              <li><Link href="/delivery-drivers" className="hover:text-gray-300">Delivery Drivers</Link></li>
              <li><Link href="/restaurants" className="hover:text-gray-300">Restaurants</Link></li>
              <li><Link href="/stores" className="hover:text-gray-300">Stores</Link></li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-medium mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="hover:text-gray-300">About us</Link></li>
              <li><Link href="/careers" className="hover:text-gray-300">Careers</Link></li>
              <li><Link href="/news" className="hover:text-gray-300">News</Link></li>
              <li><Link href="/support" className="hover:text-gray-300">Support</Link></li>
            </ul>
          </div>

          {/* Work with us Links */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-medium mb-4">Work with us</h3>
            <ul className="space-y-3">
              <li><Link href="/partner" className="hover:text-gray-300">Become a Partner</Link></li>
              <li><Link href="/delivery-driver" className="hover:text-gray-300">Become a Delivery Driver</Link></li>
              <li><Link href="/driver" className="hover:text-gray-300">Become a Driver</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <button className="flex items-center mr-6 text-sm">
              <span className="inline-block mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2200122v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.500010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 200122h1.064M15 20.488V18a2200122h3.064" />
                </svg>
              </span>
              Global
            </button>
            <button className="flex items-center text-sm">
              <span className="inline-block mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
              </span>
              English
            </button>
          </div>

          <div className="flex space-x-6 mb-4 md:mb-0">
            <Link href="/privacy" className="text-sm hover:text-gray-300">Privacy Policy</Link>
            <Link href="/terms" className="text-sm hover:text-gray-300">Terms of Use</Link>
            <Link href="/cookies" className="text-sm hover:text-gray-300">Cookie Policy</Link>
          </div>

          <div className="flex space-x-4">
            <Link href="https://facebook.com" className="hover:text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </Link>
            <Link href="https://linkedin.com" className="hover:text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Help Center Button */}
        <div className="fixed bottom-8 right-8">
          <button className="bg-white text-gray-900 px-4 py-2 rounded-full flex items-center font-medium shadow-lg">
            <span className="mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-1.008c-.26.021-.52.031-.776.031-2.259 0-4.112-1.725-4.12-3.858 0-.021 0-.042.001-.063A3.812 3.812 0 010 9.5c0-1.232.645-2.317 1.622-2.961-.012-.113-.023-.219-.023-.333C1.6 3.695 4.56 1.5 8 1.5c3.44 0 6.4 2.195 6.4 4.706 0 .114-.011.22-.023.333A3.81 3.81 0 0116 9.5c0 .876-.293 1.69-.79 2.359.01.021.001.042.001.063-.01 2.133-1.86 3.858-4.12 3.858-.255 0-.514-.01-.774-.031A8.84 8.84 0 016 17c-4.418 0-8-3.134-8-7s3.582-7 8-7 8 3.134 8 7z" clipRule="evenodd" />
              </svg>
            </span>
            Help center
          </button>
        </div>
      </div>
    </footer>



    </div>
  )
}

export default Footer