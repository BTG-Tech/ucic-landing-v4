import React, { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Header = () => {
  return (
    <Disclosure as="nav" className="bg-gradient-to-r from-[#ffff00] to-[#771fe9] shadow">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-12">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block lg:hidden h-8 w-auto"
                    src="https://res.cloudinary.com/bridging-the-gap-tech-solutions-llc/image/upload/v1652369146/uciclogo2.svg"
                    alt="UCIC"
                  />
                  <img
                    className="hidden lg:block h-8 w-auto"
                    src="https://res.cloudinary.com/bridging-the-gap-tech-solutions-llc/image/upload/v1652369146/uciclogo2.svg"
                    alt="UCIC"
                  />
                  <h1 className="font-semibold font-serif text-[#771fe9]">UCIC Family Practice</h1>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                  <a
                    href="https://www.revolutionphr.com/portal/access/38d6a2ee-40bb-422c-8629-907c7ada9d51.htm"
                    className="border-transparent active:border-[#771fe9] text-gray-700/60 hover:border-[#771fe9] hover:text-[#771fe9] inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                  >
                    Schedule An Eye Exam
                  </a>
                  <a
                    href="#"
                    className="border-transparent active:border-[#771fe9] text-gray-700/60 hover:border-[#771fe9] hover:text-[#771fe9] inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                  >
                    Meet Our Staff
                  </a>
                  <a
                    href="#"
                    className="border-transparent active:border-[#771fe9] text-gray-700/60 hover:border-[#771fe9] hover:text-[#771fe9] inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                  >
                    About Us
                  </a>
                  <a
                    href="#"
                    className="border-transparent active:border-[#771fe9] text-gray-700/60 hover:border-[#771fe9] hover:text-[#771fe9] inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:items-center">

              </div>
              <div className="-mr-2 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-[#ffff00] hover:text-[#771fe9] hover:bg-[#ffff00] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="pt-2 pb-3 space-y-1">
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
              <Disclosure.Button
                as="a"
                href="https://www.revolutionphr.com/portal/access/38d6a2ee-40bb-422c-8629-907c7ada9d51.htm"
                className="border-transparent text-gray-500 hover:bg-[#771ef9]/50 hover:border-cyan-400 hover:text-[#ffff00] block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                Schedule An Eye Exam
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="border-transparent text-gray-500 hover:bg-[#771ef9]/50 hover:border-cyan-400 hover:text-[#ffff00] block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                Meet Our Staff
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="border-transparent text-gray-500 hover:bg-[#771ef9]/50 hover:border-cyan-400 hover:text-[#ffff00] block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                About Us
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="border-transparent text-gray-500 hover:bg-[#771ef9]/50 hover:border-cyan-400 hover:text-[#ffff00] block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                Contact Us
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default Header