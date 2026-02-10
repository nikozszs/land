import type { FC } from "react";
import { SectionPromoTech } from "../components/ui/SectionPromoTech/SectionPromoTech";
import { SectionOperatingPrinciple } from "../components/layouts/SectionOperatingPrinciple";
import { SectionSсheme } from "../components/layouts/SectionSсheme/SectionSсheme";

export const Technology: FC = () => {
    return (
        <>
            <SectionPromoTech />
            <SectionOperatingPrinciple />
            <SectionSсheme />
        </>
    )
}