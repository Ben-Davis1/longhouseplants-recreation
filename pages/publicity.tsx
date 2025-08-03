import Head from 'next/head'

const Publicity = () => {
  const mediaFeatures = [
    {
      year: 2019,
      publication: "Romford Recorder",
      title: "Local Nursery Supports Community Charities",
      description: "Feature article about Long House Plants' charity open garden events."
    },
    {
      year: 2020,
      publication: "Gardeners' World TV",
      title: "Hidden Gems: Essex Nurseries",
      description: "Television feature showcasing specialist nurseries in Essex."
    },
    {
      year: 2023,
      publication: "Gardens Illustrated",
      title: "Small Nurseries, Big Impact",
      description: "Magazine article highlighting independent plant growers."
    },
    {
      year: 2024,
      publication: "Garden News",
      title: "Unusual Plants for Modern Gardens",
      description: "Article featuring specialist plants from small nurseries."
    },
    {
      year: 2022,
      publication: "English Garden",
      title: "Supporting Local: Independent Nurseries",
      description: "Feature on the importance of local plant suppliers."
    },
    {
      year: 2021,
      publication: "Essex Life",
      title: "County's Hidden Horticultural Treasures",
      description: "Regional magazine feature on Essex plant nurseries."
    }
  ]

  return (
    <>
      <Head>
        <title>Publicity - Long House Plants</title>
        <meta name="description" content="Media coverage and publicity for Long House Plants nursery including features in Gardens Illustrated, Garden News, Gardeners' World TV and more." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-green-700 mb-8">Publicity</h1>
        
        {/* Introduction */}
        <section className="card mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Media Coverage</h2>
          <p className="text-lg text-gray-700 mb-4">
            Long House Plants has been featured in various gardening publications and media over the years, 
            highlighting our specialist plants and community involvement.
          </p>
        </section>

        {/* Media Features List */}
        <section className="space-y-6">
          {mediaFeatures
            .sort((a, b) => b.year - a.year)
            .map((feature, index) => (
            <div key={index} className="card">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {feature.publication}
                  </h3>
                  <h4 className="text-green-700 font-medium">
                    {feature.title}
                  </h4>
                </div>
                <span className="text-sm font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded mt-2 sm:mt-0">
                  {feature.year}
                </span>
              </div>
              <p className="text-gray-600 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </section>

        {/* Recognition */}
        <section className="card mt-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Recognition</h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-700 mb-4">
              We're grateful for the recognition our nursery has received from gardening media and the local community. 
              This coverage helps raise awareness of the importance of specialist nurseries and the unique plants we grow.
            </p>
            
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="text-green-800 font-medium mb-2">Why We're Featured</h3>
              <ul className="text-green-700 space-y-1 text-sm">
                <li>• Specialist in unusual and interesting plants</li>
                <li>• Strong community involvement through charity events</li>
                <li>• Traditional nursery practices and plant quality</li>
                <li>• Supporting biodiversity with diverse plant collections</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact for Media */}
        <section className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
          <h2 className="text-xl font-semibold text-blue-800 mb-4">Media Enquiries</h2>
          <p className="text-blue-700 mb-4">
            For press enquiries or further information about Long House Plants, please contact:
          </p>
          <div className="space-y-2 text-blue-700">
            <p><strong>Tim Carter</strong></p>
            <p><strong>Email:</strong> tim@thelonghouse.net</p>
            <p><strong>Phone:</strong> 01708 371719</p>
          </div>
        </section>
      </div>
    </>
  )
}

export default Publicity