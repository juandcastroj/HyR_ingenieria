import { useState } from 'react'

import { navBarItems } from '../constants/navbar'
import NavbarDesktop from './navbar/NavbarDesktop'
import MenuMobile from './navbar/MenuMobile'

export default function Header() {
  
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const handleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen)
    }

    return ( 
      <header className="fixed inset-x-0 top-0 z-50 font-OpunMai">
        <NavbarDesktop navigationItems={navBarItems} handleMobileMenu={handleMobileMenu} />
        <MenuMobile navigationItems={navBarItems} mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen}/>
      </header>
    );
}
