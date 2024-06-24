import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]
// https://dsjtpxks-5173.inc1.devtunnels.ms/
const Navbar2 =() => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
   
      <nav
        class="sticky top-0 z-10 block w-full max-w-full px-4 py-2 text-gray-50 bg-white border rounded-none shadow-md h-max border-white/80 bg-opacity-80 backdrop-blur-2xl backdrop-saturate-200 lg:px-8 lg:py-4">
        <div class="flex items-center justify-between text-blue-gray-900">
          <a href="/"
            class="mr-4 block cursor-pointer py-1.5 font-sans text-2xl font-semibold leading-relaxed text-inherit antialiased">
            Astravant Realty
          </a>
          <div class="flex items-center gap-4">
            <div class="hidden mr-4 lg:block">
              <ul class="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
                <li class="block p-1 font-sans text-base antialiased font-normal leading-normal text-blue-gray-900 hover:text-brown-600 transition-colors transition-transform duration-500 ease-in-out transform hover:scale-110">
                  <a href="/contact" class="flex items-center ">
                  About us
                  </a>
                </li>
                <li class="block p-1 font-sans text-base antialiased font-normal leading-normal text-blue-gray-900 hover:text-brown-600 transition-colors transition-transform duration-500 ease-in-out transform hover:scale-110">
                  <a href="/search" class="flex items-center">
                    Our Services 
                  </a>
                </li>
                <li class="block p-1 font-sans text-base antialiased font-normal leading-normal text-blue-gray-900 hover:text-brown-600 transition-colors transition-transform duration-500 ease-in-out transform hover:scale-110">
                  <a href="/search" class="flex items-center">
                  Search by area
                  </a>
                </li>
                <li class="block p-1 font-sans text-base antialiased font-normal leading-normal text-blue-gray-900 hover:text-brown-600 transition-colors transition-transform duration-500 ease-in-out transform hover:scale-110">
                  <a href="#" class="flex items-center">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            
            <button
              class="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
              type="button">
              <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" stroke="currentColor"
                  stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </span>
            </button>
          </div>
        </div>
      </nav>
   
  )
}


export default Navbar2
