import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <address className="not-italic space-y-2 text-gray-300">
              <p>Church Road, Noak Hill</p>
              <p>Romford RM4 1LD</p>
              <p>
                <strong>Phone:</strong>{' '}
                <a href="tel:01708371719" className="accessibility-focus hover:text-white">
                  01708 371719
                </a>
              </p>
              <p>
                <strong>Email:</strong>{' '}
                <a href="mailto:tim@thelonghouse.net" className="accessibility-focus hover:text-white">
                  tim@thelonghouse.net
                </a>
              </p>
              <p>
                <strong>What3words:</strong> remain.keys.beard
              </p>
            </address>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Opening Hours</h3>
            <div className="text-gray-300 space-y-2 text-sm">
              <div>
                <p className="font-medium">March–June:</p>
                <p>Fri & Sat: 10 am – 5 pm</p>
                <p>Sun: 10 am – 4 pm</p>
                <p>Bank Holidays: 10 am – 5 pm</p>
              </div>
              <div className="mt-3">
                <p className="font-medium">July–September:</p>
                <p>Sat: 10 am – 5 pm</p>
                <p>or by arrangement</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <nav className="space-y-2">
              <Link href="/about" className="block text-gray-300 hover:text-white accessibility-focus">
                About Us
              </Link>
              <Link href="/catalogue" className="block text-gray-300 hover:text-white accessibility-focus">
                Plant Catalogue
              </Link>
              <Link href="/events" className="block text-gray-300 hover:text-white accessibility-focus">
                Open Gardens / Events
              </Link>
              <Link href="/contact" className="block text-gray-300 hover:text-white accessibility-focus">
                Contact Us
              </Link>
            </nav>
          </div>

          {/* Important Notes */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Important</h3>
            <div className="text-gray-300 space-y-2 text-sm">
              <p>We do not offer a mail order service.</p>
              <p>Please note that only assistance dogs are welcome in the nursery or garden.</p>
              <p>Payment by cash, credit and debit cards.</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Long House Plants. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Recreated with Next.js for educational purposes
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer