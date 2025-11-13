import Project from '../components/Projects/Project';
import Contact from '../components/Contact/Contact';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import Skill from '../components/Skills/Skill';
import About from '../components/About/About';
import Hero from '../components/Hero/Hero';

const Home = () => {
  return (
    <>
     <NavBar />
     <Hero />
     <About />
     <Project />
     <Skill />
     <Contact />
     <Footer />
    </>
  )
}

export default Home