// import { useState } from 'react'
import { Header } from './components/Header/Header'
import { SectionMonitoring } from './components/SectionMonitoring/SectionMonitoring'
import { SectionPromo } from './components/SectionPromo/SectionPromo'
import { SectionScroll } from './components/SectionScroll/SectionScroll'
import { SectionSolution } from './components/SectionSolution/SectionSolution'
import { SectionSummary } from './components/SectionSummary/SectionSummary'
import { SectionTechnology } from './components/SectionTechnology/SectionTechnology'
import { SectionWithUs } from './components/SectionWithUs/SectionWithUs'

function App() {
  return (
    <>
      <Header />
      <SectionPromo />
      <SectionWithUs />
      <SectionTechnology />
      <SectionSummary />
      <SectionMonitoring />
      <SectionSolution />
      <SectionScroll />
    </>
  )
}

export default App
