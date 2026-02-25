import { HashLink } from "react-router-hash-link";
import './Dropdown.css'
import { NavLink } from "react-router-dom";


interface DropdownMenuProps {
    isOpen: boolean;
    navLinks: Array<{path: string; label: string}>;
    closeMenu: () => void;
}

export const DropdownMenu = ({
    isOpen,
    navLinks,
    closeMenu
}: DropdownMenuProps) => {
    return (
        <div className={`drop-menu ${isOpen ? 'active' : ''}`} >
            <div className='dropdown-menu__links'>
            {navLinks.map((item) => (
                <NavLink 
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) => 
                        `dropdown-link ${isActive ? 'active' : ''}`}
                    onClick={closeMenu}
                    >
                        {item.label}
                </NavLink>
                ))}
                <HashLink 
                    to="#sectionForm" 
                    className='dropdown-link other-color'
                    onClick={closeMenu}
                    >
                        Оставить заявку
                </HashLink>
            </div>
        </div>
    )
}