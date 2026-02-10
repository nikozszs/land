import type { FC } from 'react'
import { Footer } from '../components/Footer/Footer'
import { SectionForm } from '../components/SectionForm/SectionForm'
import { SectionMonitoring } from '../components/SectionMonitoring/SectionMonitoring'
import { SectionPromo } from '../components/SectionPromo/SectionPromo'
import { SectionRussia } from '../components/SectionRussia/SectionRussia'
import { SectionScroll } from '../components/SectionScroll/SectionScroll'
import { SectionSolution } from '../components/SectionSolution/SectionSolution'
import { SectionSummary } from '../components/SectionSummary/SectionSummary'
import { SectionTechnology } from '../components/SectionTechnology/SectionTechnology'
import { SectionWithUs } from '../components/SectionWithUs/SectionWithUs'

export const Welcome: FC = () => {
    return (
        <>
            <SectionPromo />
            <SectionWithUs />
            <SectionTechnology />
            <SectionSummary />
            <SectionMonitoring />
            <SectionSolution />
            <SectionScroll />
            <SectionRussia />
            <SectionForm />
            <Footer />
        </>
    )
}