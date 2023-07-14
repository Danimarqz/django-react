import Features from "components/careers/Features";
import Header from "components/careers/Header";
import PositionsList from "components/careers/PositionsList";
import Testimonial from "components/careers/Testimonial";
import Footer from "components/navigation/Footer";
import Navbar from "components/navigation/Navbar";
import Layout from "hocs/layouts/Layout";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

function Careers(){
    useEffect(() =>{
        window.scrollTo(0,0)
    },[])
    return (
        <Layout>
            <Helmet>
                <title>DMS | Career</title>
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
                <Testimonial />
                <div className="bg-gray-50">
                    <div className=" mx-auto lg:mx-12 pt-24 pb-12">
                        <h3 className="lg:text-5xl text-3xl px-4 font-bold leading-6 text-gray-900">Work with top notch companies
                    </h3>
                    </div>
                    <div className="mx-auto lg:mx-12 max-w-full py-12 px-4 sm:px-6 lg:px-8">
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
                <PositionsList />
            </div>
            <Footer />
        </Layout>
    )
}
export default Careers;