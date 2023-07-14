import Clients from "components/about/Clients";
import Header from "components/about/Header";
import Images from "components/about/Images";
import TestStats from "components/about/TestStats";
import Features from "components/about/Features";
import Footer from "components/navigation/Footer";
import Navbar from "components/navigation/Navbar";
import Layout from "hocs/layouts/Layout";
import { useEffect } from "react";
import Team from "components/about/Team";
import { Helmet } from "react-helmet-async";

function About() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <Layout>
            <Helmet>
                <title>DMS | About</title>
                <meta name="description" content="Agencia de software y marketing digital. Servicios de creación de páginas web y desarrollo de aplicaciones." />
                <meta name="keywords" content="DaniMarqz, DaniMarqz Systems, Software, Marketing, Digital, Web, Web Design, Web Development, Software Development, Software Development Company"/>
                <meta name="robots" content="all" />
                <link rel="canonical" href="https://www.danimarqz.com/" />
                <meta name="author" content="Daniel Marquez" />
                <meta name="publisher" content="Daniel Marquez" />

                <meta property="og:title" content="DaniMarqz Systems" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.danimarqz.com/" />
                <meta property="og:image" content="https://bafybeifdiqwohyxxd54kquaynlguzernofxi64fltcabpwpxhrzvoscywy.ipfs.w3s.link/ipfs/bafybeifdiqwohyxxd54kquaynlguzernofxi64fltcabpwpxhrzvoscywy/DaniMarqz%20white.png" />
                <meta name="twitter:title" content="DaniMarqz Systems" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:image" content="https://bafybeifdiqwohyxxd54kquaynlguzernofxi64fltcabpwpxhrzvoscywy.ipfs.w3s.link/ipfs/bafybeifdiqwohy"/>
                <meta name="twitter:site" content="@dani_marqz_33" />
            </Helmet>
            <Navbar />
            <div className="pt-28">
                <Header />
                <TestStats />
                <Images />
                <Clients />
                <div className="bg-white">
                    <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
                            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                                <img className="h-12" src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg" alt="Tuple" />
                            </div>
                            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                                <img className="h-12" src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg" alt="Mirage" />
                            </div>
                            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                                <img className="h-12" src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg" alt="StaticKit" />
                            </div>
                            <div className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
                                <img
                                    className="h-12"
                                    src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg"
                                    alt="Transistor"
                                />
                            </div>
                            <div className="col-span-2 flex justify-center md:col-span-3 lg:col-span-1">
                                <img
                                    className="h-12"
                                    src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg"
                                    alt="Workcation"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <Features />
                <Team />
                <div className="bg-white">
                    <div className="mx-12 max-w-full py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            <span className="block">Ready to dive in?</span>
                            <span className="block text-indigo-600">Start your free trial today.</span>
                        </h2>
                        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                            <div className="inline-flex rounded-md shadow">
                                <a
                                    href="#"
                                    className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700"
                                >
                                    Get started
                                </a>
                            </div>
                            <div className="ml-3 inline-flex rounded-md shadow">
                                <a
                                    href="#"
                                    className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-indigo-600 hover:bg-indigo-50"
                                >
                                    Learn more
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </Layout>
    )
}
export default About;