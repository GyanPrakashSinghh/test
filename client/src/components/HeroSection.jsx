import { useState, useEffect } from 'react';
import gsap from 'gsap';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline'; // Import the down arrow icon
import { useNavigate } from 'react-router-dom';
import fav from '../assets/fav.jpg';

const navigation = [
  { name: 'Dashboard', href: '/dashboard' },
  { 
    name: 'Action', 
    href: '#', 
    submenu: [
      { name: 'Add Employee', href: '/add-employee' },
      { name: 'Employee List', href: '/employee-list' },
      { name: 'Another Action', href: '/another-action' }, // Just for demo, add more items to test
    ]
  },
];

export default function HeroSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(true);
  const [submenuOpen, setSubmenuOpen] = useState(false); // State to control the submenu visibility
  const navigate = useNavigate();

  const handleLogout = () => {
    setLoggedIn(false);
    navigate('/login');
  };

  useEffect(() => {
    // Animate the "Agastya" and "Analytics" text from left to right
    gsap.fromTo('#agastya', 
      { x: '-100%', opacity: 0 }, 
      { 
        x: '0%', 
        opacity: 1, 
        duration: 1, 
        willChange: 'transform, opacity', 
        onComplete: () => {
          gsap.fromTo('#analytics', 
            { x: '-100%', opacity: 0 },
            { x: '0%', opacity: 1, duration: 1, willChange: 'transform, opacity', onComplete: animateText }
          );
        }
      }
    );
  }, []);

  // Function to animate the text below Agastya & Analytics
  const animateText = () => {
    gsap.fromTo('#hero-text', 
      { y: '50%', opacity: 0 }, 
      { 
        y: '0%', 
        opacity: 1, 
        duration: 1.5, 
        willChange: 'transform, opacity' 
      }
    );
  };

  const handleActionClick = () => {
    setSubmenuOpen(prev => !prev); // Toggle the submenu visibility
  };

  return (
    <div className="bg-white">
      {loggedIn && (
        <>
          <header className="absolute inset-x-0 top-0 z-50">
            <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
              <div className="flex lg:flex-1">
                <a href="/hero-section" className="-m-1.5 p-1.5">
                  <span className="sr-only">Agastya Analytics</span>
                  <img
                    alt=""
                    src={fav}
                    className="h-25 w-auto opacity-65"
                  />
                </a>
              </div>
              <div className="flex lg:hidden">
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(true)}
                  className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                >
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon aria-hidden="true" className="size-6" />
                </button>
              </div>
              <div className="hidden lg:flex lg:gap-x-12">
                {navigation.map((item) => (
                  <div key={item.name} className="relative">
                    <a href={item.href} className="text-sm/6 font-semibold text-gray-900 flex items-center" onClick={item.name === 'Action' ? handleActionClick : undefined}>
                      {item.name}
                      {/* Action icon */}
                      {item.submenu && <ChevronDownIcon className="ml-2 h-4 w-4 text-gray-600" />}
                    </a>
                    {submenuOpen && item.submenu && (
                      <div className="absolute left-0 mt-2 space-y-2 bg-white text-gray-900 p-4 rounded-md shadow-lg w-64 transition-all duration-300 ease-in-out opacity-100">
                        {item.submenu.map((subItem) => (
                          <a
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-3 text-sm font-semibold hover:bg-gray-50 rounded-md"
                          >
                            {subItem.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <button
                  onClick={handleLogout}
                  className="text-sm/6 font-semibold text-gray-900"
                >
                  Log out
                </button>
              </div>
            </nav>
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
              <div className="fixed inset-0 z-50" />
              <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div className="flex items-center justify-between">
                  <a href="#" className="-m-1.5 p-1.5">
                    <span className="sr-only">Agastya Analytics</span>
                    <img
                      alt=""
                      src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                      className="h-8 w-auto"
                    />
                  </a>
                  <button
                    type="button"
                    onClick={() => setMobileMenuOpen(false)}
                    className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon aria-hidden="true" className="size-6" />
                  </button>
                </div>
                <div className="mt-6 flow-root">
                  <div className="-my-6 divide-y divide-gray-500/10">
                    <div className="space-y-2 py-6">
                      {navigation.map((item) => (
                        <div key={item.name}>
                          <a
                            href={item.href}
                            className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </a>
                          {item.submenu && submenuOpen && (
                            <div className="space-y-2">
                              {item.submenu.map((subItem) => (
                                <a
                                  key={subItem.name}
                                  href={subItem.href}
                                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                >
                                  {subItem.name}
                                </a>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                    <div className="py-6">
                      <button
                        onClick={handleLogout}
                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                      >
                        Log out
                      </button>
                    </div>
                  </div>
                </div>
              </DialogPanel>
            </Dialog>
          </header>

          <div className="relative isolate px-6 pt-14 lg:px-8">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            >
              <div
                style={{
                  clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
                className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff6b81] to-[#6a5fc7] opacity-60 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              />
            </div>
            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
              <div className="text-center">
                <h1 id="agastya" className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl opacity-0">
                  Agastya
                </h1>
                <h1 id="analytics" className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl opacity-0">
                  Analytics
                </h1>
                <p id="hero-text" className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8 opacity-0">
                  Agastya Analytics is not just an ERP system; it's a comprehensive solution designed to meet the dynamic needs of modern enterprises. With our user-friendly interface, customizable modules, and real-time data analysis, we ensure that your business can grow, adapt, and succeed in an ever-evolving marketplace.
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
