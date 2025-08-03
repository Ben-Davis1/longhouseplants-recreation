import Head from 'next/head'

const Club = () => {
  return (
    <>
      <Head>
        <title>Club Page - Long House Plants</title>
        <meta name="description" content="Information about Whittingham Garden Club - speakers, demonstrations, horticulture advice and outings." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-green-700 mb-8">Club Page</h1>
        
        {/* Whittingham Garden Club */}
        <section className="card mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Whittingham Garden Club</h2>
          
          <div className="prose prose-gray max-w-none mb-6">
            <p className="text-lg text-gray-700 mb-4">
              Join our local garden club for regular meetings featuring expert speakers, practical demonstrations, 
              and group outings to gardens and nurseries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-green-800 mb-3">What We Offer</h3>
              <ul className="space-y-2 text-green-700">
                <li>• Guest speakers on gardening topics</li>
                <li>• Practical demonstrations</li>
                <li>• Horticulture advice</li>
                <li>• Group outings to gardens</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">Meeting Details</h3>
              <ul className="space-y-2 text-blue-700">
                <li>• Regular monthly meetings</li>
                <li>• Seasonal garden visits</li>
                <li>• Plant swaps and sales</li>
                <li>• Friendly community atmosphere</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Activities */}
        <section className="card mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Club Activities</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-green-400 pl-4">
              <h3 className="font-medium text-gray-900 mb-2">Guest Speakers</h3>
              <p className="text-gray-700 text-sm">
                Expert gardeners and horticulturists share their knowledge on topics ranging from 
                plant care to garden design, seasonal tasks, and new varieties.
              </p>
            </div>
            
            <div className="border-l-4 border-blue-400 pl-4">
              <h3 className="font-medium text-gray-900 mb-2">Practical Demonstrations</h3>
              <p className="text-gray-700 text-sm">
                Hands-on sessions covering propagation techniques, pruning, planting, and 
                other essential gardening skills.
              </p>
            </div>
            
            <div className="border-l-4 border-purple-400 pl-4">
              <h3 className="font-medium text-gray-900 mb-2">Horticulture Advice</h3>
              <p className="text-gray-700 text-sm">
                Get answers to your gardening questions from experienced members and visiting experts.
                Problem-solving sessions for plant pests, diseases, and growing challenges.
              </p>
            </div>
            
            <div className="border-l-4 border-orange-400 pl-4">
              <h3 className="font-medium text-gray-900 mb-2">Group Outings</h3>
              <p className="text-gray-700 text-sm">
                Organized visits to notable gardens, nurseries, and horticultural shows. 
                Great opportunities to see new plants and meet fellow gardening enthusiasts.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="bg-green-50 border border-green-200 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-green-800 mb-4">Get Involved</h2>
          <div className="prose prose-green max-w-none">
            <p className="text-green-700 mb-4">
              New members are always welcome! Whether you're a beginner or experienced gardener, 
              you'll find our club friendly and informative.
            </p>
            
            <div className="bg-white rounded-lg p-4 border border-green-300">
              <h3 className="font-medium text-green-800 mb-2">Contact Details</h3>
              <p className="text-green-700">
                <strong>Email:</strong>{' '}
                <a href="mailto:whittingham.gardenclub@yahoo.co.uk" className="underline hover:no-underline">
                  whittingham.gardenclub@yahoo.co.uk
                </a>
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Club