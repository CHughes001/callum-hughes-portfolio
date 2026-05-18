import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import GBPowerMarketCaseStudyPage from './pages/GBPowerMarketCaseStudyPage.jsx'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-svh bg-[var(--background-base)] text-[var(--body-text)] antialiased">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/projects/gb-power-market"
            element={<GBPowerMarketCaseStudyPage />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
