import { useState } from "react"
import { HeaderUI } from "./components/ui/HeaderUI/HeaderUI"

const navLinks = [
    { path: '/technology', label: 'Технологии'},
    { path: '/platform', label: 'Платформа управления'},
    { path: '/test-drive', label: 'Тест-драйв'},
    { path: '/network', label: 'Наша сеть'},
]

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }
    return (
        <HeaderUI isOpen={isOpen} toggleMenu={toggleMenu} navLinks={navLinks}/>
    )
}