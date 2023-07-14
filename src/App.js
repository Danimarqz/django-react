import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import store from "store";
import { Provider } from "react-redux";
import Cases from "containers/pages/Cases";
import Services from "containers/pages/Services";
import About from "containers/pages/About"; 
import Careers from "containers/pages/Careers";
import Blog from "containers/pages/Blog";
import Contact from "containers/pages/Contact";
import { Helmet, HelmetProvider } from "react-helmet-async";


import Error404 from "containers/errors/Error404";
import Home from "containers/pages/Home";


function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>DaniMarqz | Systems</title>
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
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="*" element={<Error404 />} />
          <Route path="/" element={<Home />} />
          <Route path="/cases" element={<Cases />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </Provider>
    </HelmetProvider>

  );
}

export default App;
