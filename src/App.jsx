import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import WhyUs from './components/whyUs';
import About from './components/about';
import Footer from './components/footer';
import Home from './components/home';

function App() {
  const homeRef = useRef(null);
  const whyUsRef = useRef(null);
  const aboutRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const [onScrollToTestimonial, setScrollToTestimonial] = useState(() => () => {});
  const [onScrollToFAQ, setScrollToFAQ] = useState(() => () => {});

  const onScrollToHome = () => {
    if (location.pathname !== '/') {
      navigate('/', { replace: false });
      setTimeout(() => {
        homeRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100); // small delay to allow rendering
    } else {
      homeRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    if (location.pathname !== '/about') {
      navigate('/about', { replace: false });
      setTimeout(() => {
        aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100); // small delay to allow rendering
    } else {
      aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const ScrollToWhyUs = () => {
    if (location.pathname !== '/why-us') {
      navigate('/why-us', { replace: false });
      setTimeout(() => {
        whyUsRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100); // small delay to allow rendering
    } else {
      whyUsRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<section ref={homeRef}><Home setScrollToTestimonial={setScrollToTestimonial} setScrollToFAQ={setScrollToFAQ} /></section>} />
        <Route path="/why-us" element={<section ref={whyUsRef}><WhyUs /></section>} />
        <Route path="/about" element={<section ref={aboutRef}><About /></section>} />
      </Routes>
      <Footer onHome={onScrollToHome} onTestimonialClick={onScrollToTestimonial} onFAQClick={onScrollToFAQ} onAbout={scrollToAbout} WhyUs={ScrollToWhyUs} />
    </>
  );
}

export default App;
