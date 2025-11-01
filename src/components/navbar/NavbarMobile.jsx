import { Dialog, DialogPanel, Disclosure } from '@headlessui/react'
import nuestraTierraLogoMobile from '../../assets/images/logo/logo.svg'
import { XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import { Link, useLocation } from 'react-router-dom'
import { navBarItems } from '../../constants/navbar';

export default function NavbarMobile({ navigationItems, handleMobileMenu, mobileMenuOpen, setMobileMenuOpen }) {
  const location = useLocation();

  return (
    <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
      <div className="fixed inset-0 z-50 bg-black/50" /> {/* backdrop */}

      <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-400 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-[#033649]/10 animate-fade-left">
        {/* Header */}
        <div className="flex items-center justify-between">
          <Link to="/" onClick={() => setMobileMenuOpen(false)} className="-m-1.5 p-1.5">
            <span className="sr-only">HyR sas logo</span>
            <img
              alt="logo corpo"
              src={nuestraTierraLogoMobile}
              className="h-24 w-auto rounded-full"
            />
          </Link>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            className="-m-2.5 rounded-md p-2.5 text-blue-800 hover:text-blue-500"
          >
            <span className="sr-only">Close menu</span>
            <XMarkIcon aria-hidden="true" className="size-10" />
          </button>
        </div>

        {/* Navigation */}
        <div className="flex flex-col min-h-screen">
          <div className="flex-1">
            {/* Contenedor con divide-y */}
            <div className="text-center sm:text-left py-12 divide-y divide-gray-300/20">

              {navigationItems.map(item => {
                const isActive = location.pathname === item.to;
          
                  <Link
                    key={item.name}
                    to={item.to}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`-mx-3 block rounded-lg px-6 py-2 text-xl font-medium
                      ${isActive ? "text-white" : "text-blue-600 hover:text-blue-800"}`}
                  >
                    {item.name}
                  </Link>
              })}
            </div>
          </div>
        </div>

      </DialogPanel>
    </Dialog>
  )
}
