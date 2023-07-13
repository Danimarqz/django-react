import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import store from "store";
import { Provider } from "react-redux";
import Cases from "containers/pages/Cases";
import Services from "containers/pages/Services";
import About from "containers/pages/About"; 
import Careers from "containers/pages/Careers";
import Blog from "containers/pages/Blog";
import Contact from "containers/pages/Contact";

import Error404 from "containers/errors/Error404";
import Home from "containers/pages/Home";


function App() {
  return (
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

  );
}

export default App;
