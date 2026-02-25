import { HashLink } from "react-router-hash-link";
import './Dropdown.css'
import { Link } from "react-router-dom";


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
                <Link 
                    key={item.path}
                    to={item.path}
                    className="dropdown-link"
                    onClick={closeMenu}
                    >
                        {item.label}
                </Link>
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