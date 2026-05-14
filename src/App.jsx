import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Projects from './components/Projects.jsx'
import About from './components/About.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <div className="min-h-svh bg-[var(--background-base)] text-[var(--body-text)] antialiased">
      <Header />
      <main className="pb-2">
        <Hero />
        <Projects />
        <About />
      </main>
      <Footer />
    </div>
  )
}

export default App
