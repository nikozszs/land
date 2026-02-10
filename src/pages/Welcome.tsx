import type { FC } from 'react'
import { Footer } from '../components/Footer/Footer'
import { SectionForm } from '../components/layouts/SectionForm/SectionForm'
import { SectionMonitoring } from '../components/layouts/SectionMonitoring/SectionMonitoring'
import { SectionScroll } from '../components/layouts/SectionScroll/SectionScroll'
import { SectionSolution } from '../components/layouts/SectionSolution/SectionSolution'
import { SectionSummary } from '../components/layouts/SectionSummary/SectionSummary'
import { SectionWithUs } from '../components/layouts/SectionWithUs/SectionWithUs'
import { SectionPromo } from '../components/layouts/SectionPromo/SectionPromo'
import { SectionRussia } from '../components/layouts/SectionRussia/SectionRussia'
import { SectionTechnology } from '../components/layouts/SectionTechnology/SectionTechnology'

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