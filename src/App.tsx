// import { useState } from 'react'
import { Header } from './components/Header/Header'
import { SectionPromo } from './components/SectionPromo/SectionPromo'
import { SectionTechnology } from './components/SectionTechnology/SectionTechnology'
import { SectionWithUs } from './components/SectionWithUs/SectionWithUs'

function App() {
  return (
    <>
      <Header />
      <SectionPromo />
      <SectionWithUs />
      <SectionTechnology />
    </>
  )
}

export default App
