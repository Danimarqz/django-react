import { Routes, Route, useLocation } from 'react-router-dom'
import Cases from "containers/pages/Cases";
import Services from "containers/pages/Services";
import About from "containers/pages/About"; 
import Careers from "containers/pages/Careers";
import Blog from "containers/pages/Blog";
import Contact from "containers/pages/Contact";
import Error404 from "containers/errors/Error404";
import Home from "containers/pages/Home";
import { AnimatePresence } from 'framer-motion';

export default function AnimatedRoutes(){
    const location = useLocation();
    return(
    <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route path="*" element={<Error404 />} />
            <Route path="/" element={<Home />} />
            <Route path="/cases" element={<Cases />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    </AnimatePresence>
    )
}   
