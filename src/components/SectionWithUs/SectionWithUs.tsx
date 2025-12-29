import './SectionWithUs.css'
import scroll1 from '../../assets/scroll1.svg'
import scroll2 from '../../assets/scroll2.svg'
import scroll3 from '../../assets/scroll3.svg'
import scroll4 from '../../assets/scroll4.svg'
import scroll5 from '../../assets/scroll5.svg'
import scroll6 from '../../assets/scroll6.svg'
import scroll7 from '../../assets/scroll7.svg'

export const SectionWithUs = () => {
    return (
        <section className="sectionWithUs">
            <h2>500+ клиентов уже с нами</h2>
            <div className="scroll">
                <img src={scroll1} />
                <img src={scroll2} />
                <img src={scroll3} />
                <img src={scroll4} />
                <img src={scroll5} />
                <img src={scroll6} />
                <img src={scroll7} />
            </div>
        </section>
    )
}