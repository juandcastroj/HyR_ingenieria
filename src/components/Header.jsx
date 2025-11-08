import { useState } from 'react'
import { navBarItems } from '../constants/navbar'
import Navbar from './navbar/Navbar'
import MenuMobile from './navbar/MenuMobile'

export default function Header() {
  
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const handleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen)
    }

    return ( 
      <header className="fixed inset-x-0 top-0 z-50 font-OpunMai">
        <Navbar navigationItems={navBarItems} handleMobileMenu={handleMobileMenu} />
        <MenuMobile navigationItems={navBarItems} mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen}/>
      </header>
    );
}
