import About from '../components/About.jsx'
import Footer from '../components/Footer.jsx'
import Header from '../components/Header.jsx'
import Hero from '../components/Hero.jsx'
import Projects from '../components/Projects.jsx'

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="pb-2">
        <Hero />
        <Projects />
        <About />
      </main>
      <Footer />
    </>
  )
}
