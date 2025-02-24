'use client'

const navigation = [
    { name: 'Projects', href: '#' },
    { name: 'Experience', href: '#' },
    { name: 'Education', href: '#' },
    { name: 'Contact', href: '#' },
]

const content = [
    { name: 'Projects', href: '#' },
    { name: 'Experience', href: '#' },
    { name: 'Education', href: '#' },
]

export default function hero() {
    //const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        //ALL
        <div className="z-0 relative bg-bp_back bg-[url(/bg_tex.svg)] bg-repeat bg-[_5rem] overflow-hidden">
            {/*<div className="bg-[url(/linetrace_bp.svg)] bg-no-repeat bg-auto bg-[left_-12rem_bottom_-8rem] h-svh">*/}

            {/*
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-yellow-400/10 h-[60rem] aspect-video bg-[url(/linetrace_bp.svg)] bg-no-repeat bg-center">

            </div>
            */}
            {/*Hero Section*/}
            <div className="h-svh overflow-hidden">
                {/*nav bar*/}
                <header className="fixed inset-x-0 top-0 z-50"> {/*changed from absolute to fixed*/}
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
                                <a key={item.name} href={item.href} className="text-2xl font-ButtonFont text-gray-200">
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </nav>
                </header>

                {/*Hero Content*/}
                <div className="relative mx-auto max-w-2xl pt-24 pb-16">

                    {/*Notif bar*/}
                    <div className="z-40 relative justify-self-center rounded-full mt-10 mb-4 px-3 py-1 backdrop-blur-sm bg-teal-400/10 text-xl text-gray-200 font-ButtonFont ring-1 ring-teal-400/30 hover:ring-teal-400/90">
                        Currently seeking employment.{' '}
                        <a href="/BenResume2024.pdf" target="blank" className="text-teal-400">
                            <span aria-hidden="true" className="absolute inset-0" />
                            View Resume <span aria-hidden="true">&rarr;</span>
                        </a>
                    </div>

                    {/*Name*/}
                    <div className="z-40 relative justify-self-center self-center bg-[url(/NameBorderAccent2.svg)] bg-no-repeat bg-contain bg-center">
                        <div className="justify-self-center self-center pl-8 pr-6 py-6 my-4 text-7xl font-NameFont tracking-[0.2rem]">
                            Gwen Chaves
                        </div>
                    </div>

                    {/*Hero Art*/}
                    <div className="z-10 relative h-[15rem]">
                        {/*<div className="absolute top-1/1 left-1/2 -translate-x-1/2 -translate-y-1/1 h-[20vh] w-screen overflow-visible">
                            */}
                            <div className="relative -top-[14rem] left-1/2 -translate-x-1/2 bg-[url(/linetrace_bp.svg)] bg-no-repeat bg-auto bg-center bg-[left_-14em_center] h-[90rem] aspect-video">
                                &nbsp;
                            </div>
                        {/*</div>*/}
                    </div>

                    {/*Role / Job title + Location*/}
                    <div className="z-40 justify-self-center self-center relative -right-[28rem] bg-[url(/RoleAccent.svg)] bg-no-repeat bg-contain bg-center">
                        <div className="justify-self-center self-center text-center pl-8 pr-6 py-6 my-4 text-5xl font-NameFont tracking-[0.2rem]">
                            Technical Artist
                            <br />
                            <span aria-hidden="true" className="bg-[url(/pin.svg)] bg-no-repeat bg-center bg-contain">&nbsp;&nbsp;</span> Fairfax VA
                        </div>
                    </div>

                    <div className="z-40 relative justify-self-center -right-[28rem] rounded-lg mt-4 mb-4 px-3 py-1 backdrop-blur-sm bg-gray-400/10 text-3xl text-gray-200 font-ButtonFont ring-1 ring-grad2 hover:ring-grad1">
                        Bringing ideas to{' '}
                        <a href="#" className="bg-gradient-to-r from-grad1 to-grad2 bg-clip-text text-transparent">
                            <span aria-hidden="true" className="absolute inset-0" />
                            life
                        </a>
                    </div>

                </div>

                <div className="z-40 relative w-screen mt-[10rem] backdrop-blur-xl flex-auto items-center justify-center outline-4 outline-dashed outline-yellow-300">
                    <p className="z-40 text-2xl font-semibold text-gray-200 text-center">
                        Site under construction
                    </p>
                </div>

                <div className="z-40 relative -bottom-80 left-1/2 -translate-x-1/2 mb-0 bg-[url(/ScrollPrompt.svg)] bg-no-repeat bg-contain bg-center w-[5rem] aspect-square animate-bounce">

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

            {/*Section Break*/}
            <div className="z-40 bg-bp_back bg-[url(/SectionBreak.svg)] bg-cover bg-center bg-no-repeat min-h-6em h-6em w-svw overflow-visible">
                &nbsp;
            </div>

            {/*Content Section*/}
            <div className="h-svh overflow-hidden">

                <div className="justify-self-center flex items-center justify-evenly p-6 lg:px-8 w-4/6 mt-10">
                    {content.map((item) => (
                        <div key={item.name} className="z-40 relative justify-self-center self-center bg-yellow-400/10 bg-[url(/NameBorderAccent2.svg)] bg-no-repeat spanbreak bg-center py-4">
                            <a key={item.name} href={item.href} className="text-5xl font-ButtonFont text-gray-200 pl-6 pr-4 my-10">
                                {item.name}
                            </a>
                        </div>
                    ))}
                </div>
            </div>

            {/*Section Break*/}
            <div className="z-40 bg-bp_back bg-[url(/SectionBreak.svg)] bg-cover bg-center bg-no-repeat min-h-6em h-6em w-svw overflow-visible">
                &nbsp;
            </div>

            {/*Info Section*/}
            <div className="h-svh overflow-hidden">

            </div>
        </div >
    )
}