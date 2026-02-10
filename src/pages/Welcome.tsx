import type { FC } from 'react'
import { Footer } from '../components/Footer/Footer'
import { SectionMonitoring } from '../components/layouts/SectionMonitoring/SectionMonitoring'
import { SectionSummary } from '../components/layouts/SectionSummary/SectionSummary'
import { SectionWithUs } from '../components/layouts/SectionWithUs/SectionWithUs'
import { SectionRussia } from '../components/layouts/SectionRussia/SectionRussia'
import { SectionTechnology } from '../components/layouts/SectionTechnology/SectionTechnology'
import { SectionPromo } from '../components/layouts/SectionPromo'
import { SectionSolution } from '../components/layouts/SectionSolution'
import { SectionScroll } from '../components/layouts/SectionScroll'
import { SectionForm } from '../components/layouts/SectionForm'

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