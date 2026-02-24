import type { FC } from "react";
import { SectionPromoTech } from "../components/ui/SectionPromoTech/SectionPromoTech";
import { SectionOperatingPrinciple } from "../components/layouts/SectionOperatingPrinciple";
import { SectionSсheme } from "../components/layouts/SectionSсheme/SectionSсheme";
import { SectionCompositionOfTheDecision } from "../components/layouts/SectionCompositionOfTheDecision";
import { SectionTechSupportUI } from "../components/ui/SectionTechSupport/SectionTechSupportUI";
import { SectionForm } from "../components/layouts/SectionForm";
import { Footer } from "../components/Footer/Footer";

export const Technology: FC = () => {
    return (
        <>
            <SectionPromoTech />
            <SectionOperatingPrinciple />
            <SectionSсheme />
            <SectionCompositionOfTheDecision />
            <SectionTechSupportUI />
            <SectionForm />
            <Footer />
        </>
    )
}