'use client'

const navigation = [
    { name: 'Projects', href: '#' },
    { name: 'Experience', href: '#' },
    { name: 'Education', href: '#' },
    { name: 'Contact', href: '#' },
]

export default function hero() {
    //const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <div className="bg-bp_back bg-[url(/bg_tex.svg)] bg-repeat-space bg-[_5rem] h-svh">
            <div className="bg-[url(/linetrace_bp.svg)] bg-no-repeat bg-auto bg-[left_-12rem_bottom_-8rem] h-svh">

                {/*nav bar*/}
                <header className="absolute inset-x-0 top-0 z-50">
                    <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
                        <div className="flex lg:flex-1">
                            <a href="#" className="-m-1.5 p-1.5">
                                <span className="sr-only">SuspiciousAppleStudios</span>
                                <img
                                    alt=""
                                    src="/LogoDS.png"
                                    className="h-20 w-auto"
                                />
                            </a>
                        </div>
                        <div className="hidden lg:flex lg:gap-x-24 mr-40 mt-8">
                            {navigation.map((item) => (
                                <a key={item.name} href={item.href} className="text-sm/1 font-semibold text-gray-200/50 cursor-not-allowed">
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </nav>
                </header>

                {/*Name + notif bar*/}
                <div className="mx-auto max-w-2xl pt-24 pb-16">

                    <div className="justify-self-center relative rounded-full mt-10 mb-4 px-3 py-1 backdrop-blur-sm bg-teal-400/10 text-sm/6 text-gray-200 ring-1 ring-teal-400/30 hover:ring-teal-400/90">
                        Currently seeking employment.{' '}
                        <a href="/BenResume2024.pdf" target="blank" className="font-semibold text-teal-400">
                            <span aria-hidden="true" className="absolute inset-0" />
                            View Resume <span aria-hidden="true">&rarr;</span>
                        </a>
                    </div>

                    <div className="justify-self-center self-center bg-[url(/NameBorderAccent2.svg)] bg-no-repeat bg-contain bg-center">
                        <div className="justify-self-center self-center pl-8 pr-6 py-6 my-4 text-7xl font-NameFont tracking-[0.2rem]">
                            Gwen Chaves
                        </div>
                    </div>

                </div>

                <div className="w-screen mt-[20rem] backdrop-blur-xl flex-auto items-center justify-center outline-4 outline-dashed outline-yellow-300">
                    <p className="text-2xl font-semibold text-gray-200 text-center">
                        Site under construction
                    </p>
                </div>

                <div className="hidden">
                    <div className="portrait:hidden">
                        <p className="justify-self-center">:D</p>
                    </div>
                    <div className="landscape:hidden">
                        <p className="justify-self-center">This experience is designed to be viewed in landscape. Please rotate your device to view the site.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}