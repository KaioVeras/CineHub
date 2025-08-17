import { useEffect } from 'react';
import '../NavBar/navBar.css';

import { Link, useLocation } from 'react-router-dom';
import { Film, Heart } from 'lucide-react';

import { useMenuStore } from '../../store/menuStore';

function NavBarOpen() {
    const location = useLocation();

    const isMenuOpen = useMenuStore((state) => state.isMenuOpen);
    const closeMenu = useMenuStore((state) => state.closeMenu)

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 720) {
                closeMenu();
            }
        }

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, [closeMenu])

    return (
        <div className={`nav-links-open ${isMenuOpen ? "open" : ""}`}>
            <div>
                <Link to='/' className={`nav-link ${location.pathname == "/" ? "active" : ""}`} onClick={closeMenu}>
                    <Film size={16} />
                    Início
                </Link>

                <Link to='/favorites' className={`nav-link ${location.pathname == "/favorites" ? "active" : ""}`} onClick={closeMenu}>
                    <Heart size={16} />
                    Quero Assistir
                </Link>
            </div>
        </div>
    );
}

export default NavBarOpen;