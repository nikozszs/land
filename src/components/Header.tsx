import { useCallback, useEffect, useRef, useState } from "react"
import { HeaderUI } from "./ui/HeaderUI/HeaderUI"
import { DropdownMenu } from "./ui/Dropdown/Dropdown"
import { useLocation } from "react-router-dom"

const navLinks = [
    { path: '/technology', label: 'Технологии'},
    { path: '/platform', label: 'Платформа управления'},
    { path: '/test-drive', label: 'Тест-драйв'},
    { path: '/network', label: 'Наша сеть'},
]

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const menuRef = useRef<HTMLDivElement>(null)
    const location = useLocation(); 

    const toggleMenu = useCallback(() => {
        setIsOpen(prev => !prev)
    }, [])

    const closeMenu = useCallback(() => {
        setIsOpen(false)
    }, [])

    useEffect(() => {
        closeMenu()
    }, [location.pathname, closeMenu])

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(e.target as Node) && isOpen) {
                closeMenu()
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [isOpen, closeMenu])


    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }

        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isOpen])

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }

        window.addEventListener('scroll', handleScroll)
        return () => document.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 769 && isOpen) {
                closeMenu()
            }
        }

        window.addEventListener('resize', handleResize)
        return () => document.removeEventListener('resize', handleResize)
    }, [isOpen, closeMenu])

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isOpen) {
                closeMenu()
            }
        }

        document.addEventListener('keydown', handleEscape)
        return () => document.removeEventListener('keydown', handleEscape)
    }, [isOpen, closeMenu])

    return (
        <div ref={menuRef}>
            <HeaderUI 
                isOpen={isOpen} 
                toggleMenu={toggleMenu} 
                navLinks={navLinks}
                isScrolled={isScrolled}
            />
            <DropdownMenu 
                isOpen={isOpen} 
                navLinks={navLinks} 
                closeMenu={closeMenu}
            />
        </div>
    )
}