import { useRef, useEffect } from 'react';
import Hero from './hero';
import ProjectSection from './project';
import FocusArea from './focus-area';
import News from './news';
import FAQ from './FAQ';

function Home({setScrollToTestimonial, setScrollToFAQ}) {
  const faqRef = useRef(null);
  const testimonialRef = useRef(null);

  const scrollToFaq = () => {
    faqRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTestimonial = () => {
    testimonialRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (setScrollToTestimonial) {
      setScrollToTestimonial(() => scrollToTestimonial);
    }
  }, [setScrollToTestimonial]);

  useEffect(() => {
    if (setScrollToFAQ) {
      setScrollToFAQ(() => scrollToFaq);
    }
  }, [setScrollToFAQ]);


  return (
    <>
      <Hero scrollToFaq={scrollToFaq} scrollToTestimonial={scrollToTestimonial} />
      <ProjectSection />
      <FocusArea />

      <section ref={testimonialRef}>
        <News />
      </section>

      <section ref={faqRef}>
        <FAQ />
      </section>
    </>
  );
}

export default Home;
