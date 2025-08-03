import Head from 'next/head'
import Image from 'next/image'
import AccessibilityBanner from '@/components/AccessibilityBanner'
import ImageGallery from '@/components/ImageGallery'

const Home = () => {
  const galleryImages = [
    {
      src: '/images/nursery-1.jpeg',
      alt: 'Colorful perennial display with purple and pink flowers',
      title: 'Perennial Garden Display',
      description: 'Beautiful collection of hardy perennials in full bloom'
    },
    {
      src: '/images/nursery-2.jpeg',
      alt: 'Mixed border with vibrant autumn colors and ornamental grasses',
      title: 'Mixed Border Planting',
      description: 'Stunning combination of grasses, perennials, and seasonal color'
    },
    {
      src: '/images/nursery-3.jpeg',
      alt: 'Daylilies and ornamental plants in autumn display',
      title: 'Autumn Plant Display',
      description: 'Daylilies and companion plants showing autumn interest'
    },
    {
      src: '/images/garden-photo.jpeg',
      alt: 'Mature garden with lavender and mixed plantings',
      title: 'Established Garden View',
      description: 'Mature plantings showcasing long-term garden development'
    }
  ]

  return (
    <>
      <Head>
        <title>Long House Plants - Nursery in Romford, Essex</title>
        <meta name="description" content="Long House Plants is a small retail nursery in Romford, Essex. Plants for sun, plants for shade, small plants, tall plants, scented plants, spiky plants, and much more." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <AccessibilityBanner />
        
        {/* Hero Image Section */}
        <section className="mb-12">
          <div className="relative h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden shadow-lg mb-8">
            <Image
              src="/images/garden-photo.jpeg"
              alt="Long House Plants garden with mature plantings and colorful borders"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
              <div className="text-center text-white p-8">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                  Welcome to Our Nursery
                </h2>
                <p className="text-lg md:text-xl opacity-90">
                  Quality plants grown on-site since 1995
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-green-50 border-2 border-green-200 rounded-lg p-8 mb-8">
            <p className="text-lg md:text-xl text-green-800 leading-relaxed font-medium">
              Plants for sun, plants for shade, small plants, tall plants, scented plants, spiky plants, evergreen plants, unusual plants, plants for walls, plants for bogs, plants that sway, pink flowers, green flowers, purple berries, black leaves, yellow stems, all these & more.
            </p>
          </div>
        </section>

        {/* Welcome Message */}
        <section className="prose prose-lg max-w-4xl mx-auto mb-12">
          <div className="bg-white rounded-lg shadow-md border border-gray-200 p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Welcome to Long House Plants</h2>
            <p className="text-gray-700 mb-4">
              Long House Plants is a small retail nursery run by Tim Carter. All the plants are grown here and we have a range of interesting and unusual trees, shrubs, perennials, grasses and alpines for gardens and containers.
            </p>
            <p className="text-gray-700 mb-4">
              The nursery is open from March to September with limited opening hours. Please check our opening times below.
            </p>
            <p className="text-green-700 font-medium text-lg">
              I look forward to seeing you!
            </p>
          </div>
        </section>

        {/* Opening Hours & Tea & Cake */}
        <section className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="card">
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
          </div>

          <div className="card">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Tea & Cake</h2>
            <p className="text-gray-700 mb-4">
              Enjoy refreshments while you browse our plants. We serve tea and cake during open garden events throughout the season.
            </p>
            <p className="text-green-600 font-medium">
              Available during special events and open garden days.
            </p>
          </div>
        </section>

        {/* Key Features */}
        <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
            <h3 className="font-semibold text-green-800 mb-2">All On One Level</h3>
            <p className="text-sm text-green-700">Nursery is all on one level</p>
          </div>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
            <h3 className="font-semibold text-blue-800 mb-2">Easy Parking</h3>
            <p className="text-sm text-blue-700">Off road car parking</p>
          </div>
          
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 text-center">
            <h3 className="font-semibold text-purple-800 mb-2">Accessible</h3>
            <p className="text-sm text-purple-700">Disabled loo</p>
          </div>
          
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 text-center">
            <h3 className="font-semibold text-orange-800 mb-2">Easy Payment</h3>
            <p className="text-sm text-orange-700">Cash, credit and debit cards</p>
          </div>
        </section>

        {/* Garden Gallery */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-6 text-center">
            Our Gardens & Plants
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
            Take a look at our beautiful displays and see the quality of plants we grow. 
            Click on any image to view it larger.
          </p>
          <ImageGallery images={galleryImages} />
        </section>

        {/* Important Notice */}
        <section className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-6 text-center">
          <h2 className="text-xl font-semibold text-yellow-800 mb-2">Important Notice</h2>
          <p className="text-yellow-700 font-medium">
            We do not offer a mail order service.
          </p>
        </section>
      </div>
    </>
  )
}

export default Home