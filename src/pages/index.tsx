'use client'

//import { useState } from 'react'
//import { Dialog, DialogPanel } from '@headlessui/react'
//import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
    { name: 'Projects', href: '#' },
    { name: 'Experience', href: '#' },
    { name: 'Education', href: '#' },
    { name: 'Contact', href: '#' },
]

export default function Example() {
    //const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <div className="bg-black">
            <header className="absolute inset-x-0 top-0 z-50">
                <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
                    <div className="flex lg:flex-1">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">SuspiciousAppleStudios</span>
                            <img
                                alt=""
                                src="/LogoDS.png"
                                className="h-10 w-auto"
                            />
                        </a>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12">
                        {navigation.map((item) => (
                            <a key={item.name} href={item.href} className="text-sm/6 font-semibold text-gray-200/50 cursor-not-allowed">
                                {item.name}
                            </a>
                        ))}
                    </div>
                </nav>
            </header>

            <div className="relative isolate px-6 pt-14 lg:px-8">
                <div
                    aria-hidden="true"
                    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                >
                    <div
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                        className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                    />
                </div>
                <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                    <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                        <div className="relative rounded-full px-3 py-1 bg-teal-400/10 text-sm/6 text-gray-400 ring-1 ring-teal-400/30 hover:ring-teal-400/90">
                            Currently seeking employment.{' '}
                            <a href="/BenResume2024.pdf" target="blank" className="font-semibold text-teal-400">
                                <span aria-hidden="true" className="absolute inset-0" />
                                View Resume <span aria-hidden="true">&rarr;</span>
                            </a>
                        </div>
                    </div>
                    <div className="text-center">
                        <h1 className="text-5xl font-semibold tracking-tight text-balance text-white-900 sm:text-7xl">
                            Gwen Chaves
                        </h1>
                        <p className="mt-8 text-lg font-medium text-pretty text-gray-300 sm:text-xl/8">
                            Technical Artist
                        </p>
                        <div className="hidden mt-10 flex items-center justify-center gap-x-6">
                            <a
                                href="#"
                                className="rounded-md bg-teal-600 px-3.5 py-2.5 shadow-lg shadow-teal-500/50 hover:shadow-teal-400/60 text-sm font-semibold text-white shadow-xs hover:bg-teal-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
                            >
                                Get started
                            </a>
                            <a href="#" className="text-sm/6 font-semibold text-gray-400">
                                Learn more <span aria-hidden="true">→</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                >
                    <div
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                        className="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                    />
                </div>
            </div>
            <div className="w-screen mt-10 flex-auto items-center justify-center outline-4 outline-offset-2 outline-dashed outline-yellow-300 relative -top-40">
                <p className="text-sm/6 font-semibold text-gray-400 text-center">
                    Site under construction
                </p>
            </div>
        </div>
    )
}
