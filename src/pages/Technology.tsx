import type { FC } from "react";
import { SectionPromoTech } from "../components/ui/SectionPromoTech/SectionPromoTech";
import { SectionOperatingPrinciple } from "../components/layouts/SectionOperatingPrinciple";

export const Technology: FC = () => {
    return(
        <>
            <SectionPromoTech />
            <SectionOperatingPrinciple />
        </>
    )
}