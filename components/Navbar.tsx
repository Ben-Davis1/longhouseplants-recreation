import Link from 'next/link'
import { useState } from 'react'
import Logo from './Logo'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigationItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/catalogue', label: 'Catalogue' },
    { href: '/rainfall', label: 'Rainfall' },
    { href: '/events', label: 'Open Gardens / Events' },
    { href: '/ulez', label: 'ULEZ' },
    { href: '/newsletter', label: 'Newsletter 2025' },
    { href: '/club', label: 'Club Page' },
    { href: '/publicity', label: 'Publicity' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <>
      {/* Logo Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Logo />
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white shadow-lg border-b-4 border-green-600" role="navigation" aria-label="Main navigation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center lg:hidden">
              <span className="text-lg font-semibold text-green-700">Menu</span>
            </div>

          {/* Desktop Menu */}
          <div className="hidden lg:block mx-auto">
            <div className="flex items-baseline space-x-4 justify-center">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="nav-link px-3 py-2 rounded-md text-sm"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="accessibility-focus inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-green-600 hover:bg-gray-100"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle main menu"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50 rounded-lg mt-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="nav-link block px-3 py-2 rounded-md text-base"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
    </>
  )
}

export default Navbar