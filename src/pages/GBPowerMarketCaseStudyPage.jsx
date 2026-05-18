import CaseStudyArchitecture from '../components/case-study/gb-power-market/CaseStudyArchitecture.jsx'
import CaseStudyChallenges from '../components/case-study/gb-power-market/CaseStudyChallenges.jsx'
import CaseStudyCTA from '../components/case-study/gb-power-market/CaseStudyCTA.jsx'
import CaseStudyDashboards from '../components/case-study/gb-power-market/CaseStudyDashboards.jsx'
import CaseStudyDeepDives from '../components/case-study/gb-power-market/CaseStudyDeepDives.jsx'
import CaseStudyHero from '../components/case-study/gb-power-market/CaseStudyHero.jsx'
import CaseStudyInsights from '../components/case-study/gb-power-market/CaseStudyInsights.jsx'
import CaseStudyOverview from '../components/case-study/gb-power-market/CaseStudyOverview.jsx'
import CaseStudyShell from '../components/case-study/gb-power-market/CaseStudyShell.jsx'
import CaseStudyTechStack from '../components/case-study/gb-power-market/CaseStudyTechStack.jsx'

export default function GBPowerMarketCaseStudyPage() {
  return (
    <CaseStudyShell>
      <CaseStudyHero />
      <CaseStudyOverview />
      <CaseStudyArchitecture />
      <CaseStudyDashboards />
      <CaseStudyInsights />
      <CaseStudyDeepDives />
      <CaseStudyChallenges />
      <CaseStudyTechStack />
      <CaseStudyCTA />
    </CaseStudyShell>
  )
}
