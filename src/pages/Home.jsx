import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import ExperienceEducation from '../components/ExperienceEducation';
import Contact from '../components/Contact';

export default function Home({ onCopy }) {
  return (
    <>
      <Hero onCopy={onCopy} />
      <About />
      <Skills />
      <Projects />
      <ExperienceEducation />
      <Contact onCopy={onCopy} />
    </>
  );
}
