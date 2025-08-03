import Head from 'next/head'
import Image from 'next/image'
import AccessibilityBanner from '@/components/AccessibilityBanner'

const About = () => {
  return (
    <>
      <Head>
        <title>About Us - Long House Plants</title>
        <meta name="description" content="Long House Plants is a small retail nursery run by Tim Carter. All the plants are grown here with interesting and unusual trees, shrubs, perennials, grasses and alpines." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <AccessibilityBanner />
        
        <h1 className="text-3xl md:text-4xl font-bold text-green-700 mb-8">About Us</h1>
        
        {/* Main Description with Image */}
        <section className="grid lg:grid-cols-2 gap-8 mb-8">
          <div className="card">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Long House Plants is a small retail nursery run by Tim Carter. All the plants are grown here and we have a range of interesting and unusual trees, shrubs, perennials, grasses and alpines for gardens and containers.
            </p>
          </div>
          
          <div className="relative h-64 lg:h-full rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/nursery-1.jpeg"
              alt="Colorful perennial display at Long House Plants nursery"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </section>

        {/* Fact Box */}
        <section className="card mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Nursery Features</h2>
          <ul className="space-y-3">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
              <span className="text-gray-700">Nursery is all on one level</span>
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
              <span className="text-gray-700">Off road car parking</span>
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
              <span className="text-gray-700">Disabled loo</span>
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
              <span className="text-gray-700">Payment by cash, credit and debit cards</span>
            </li>
          </ul>
        </section>

        {/* Opening Hours */}
        <section className="card mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Opening Hours</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-green-700 mb-2">March–June</h3>
              <ul className="space-y-1 text-gray-700">
                <li>Fridays & Saturdays: 10 am – 5 pm</li>
                <li>Sundays: 10 am – 4 pm</li>
                <li>Bank Holidays: 10 am – 5 pm</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-green-700 mb-2">July–September</h3>
              <ul className="space-y-1 text-gray-700">
                <li>Saturdays: 10 am – 5 pm</li>
                <li className="text-sm text-gray-600">
                  or by arrangement; via the website www.longhouseplants.com tim@thelonghouse.net or 01708 371719
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Important Notice */}
        <section className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
          <h3 className="text-lg font-medium text-blue-800 mb-2">Important Notice</h3>
          <p className="text-blue-700 font-medium">
            Please note that only assistance dogs are welcome in the nursery or garden.
          </p>
        </section>

        {/* Contact Information */}
        <section className="card">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-gray-900 mb-1">Address</h3>
              <address className="not-italic text-gray-700">
                Church Road, Noak Hill<br />
                Romford RM4 1LD
              </address>
            </div>
            
            <div>
              <h3 className="font-medium text-gray-900 mb-1">Phone</h3>
              <a href="tel:01708371719" className="text-green-600 hover:text-green-700">
                01708 371719
              </a>
            </div>
            
            <div>
              <h3 className="font-medium text-gray-900 mb-1">Email</h3>
              <a href="mailto:tim@thelonghouse.net" className="text-green-600 hover:text-green-700">
                tim@thelonghouse.net
              </a>
            </div>
            
            <div>
              <h3 className="font-medium text-gray-900 mb-1">What3words</h3>
              <p className="text-gray-700">remain.keys.beard</p>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-yellow-800 font-medium">
              We do not offer a mail order service.
            </p>
          </div>
        </section>
      </div>
    </>
  )
}

export default About