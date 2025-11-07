import { Dialog, DialogPanel } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { Link, useLocation } from 'react-router-dom'
import hyrMobileLogo from '../../assets/images/logo/HR_negro.png'


export default function MenuMobile({ navigationItems, mobileMenuOpen, setMobileMenuOpen }) {
  const location = useLocation();  

  return (
    <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
      {/* <div className="fixed inset-0 z-50 bg-black/50" /> backdrop */}

      <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-200 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-[#033649]/10 animate-fade-left">
        {/* Header */}
        <div className="flex items-center justify-between">
          <Link to="/" onClick={() => setMobileMenuOpen(false)} className="-m-1.5 p-1.5">
            <span className="sr-only">HyR sas logo</span>
            <img
              alt="logo corpo"
              src={hyrMobileLogo}
              className="h-24 w-auto rounded-full"
            />
          </Link>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            className="-m-2.5 rounded-md p-2.5 text-gray-800 hover:text-gray-700"
          >
            <span className="sr-only">Close menu</span>
            <XMarkIcon aria-hidden="true" className="size-10" />
          </button>
        </div>

        {/* Navigation */}
        <div className="flex flex-col z-40">
          <div className="flex-1">
            {/* Contenedor con divide-y */}
            <div className="text-center sm:text-left py-12 divide-y divide-gray-600">

              {navigationItems.map((item) => {
                const isActive = location.pathname === item.to;
                return (
                  <Link
                    key={item.name}
                    to={item.to}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`-mx-3 block rounded-lg px-6 py-8 text-3xl font-medium
                      ${isActive ? "text-gray-500" : "text-gray-800 hover:text-gray-700"}`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

      </DialogPanel>
    </Dialog>
  )
}
