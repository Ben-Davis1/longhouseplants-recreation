import Head from 'next/head'

const Newsletter = () => {
  return (
    <>
      <Head>
        <title>Newsletter 2025 - Long House Plants</title>
        <meta name="description" content="Long House Plants Newsletter 2025 with updates on charity fundraising, rainfall data, and nursery news." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-green-700 mb-8">Newsletter 2025</h1>
        
        {/* Charity Fundraising Results */}
        <section className="card mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">2024 Charity Fundraising Results</h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-lg text-gray-700 mb-4">
              We raised about £7,900 in all from our open garden events in 2024. Thanks to everyone who visited and supported these worthy causes.
            </p>
            
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-green-800 mb-3">Charity Breakdown</h3>
              <ul className="space-y-2 text-green-700">
                <li>• <strong>National Garden Scheme:</strong> we were able to send £3,600</li>
                <li>• <strong>Harold Hill Salvation Army:</strong> raised over £2,500</li>
                <li>• <strong>Macmillan Cancer Support:</strong> we sent £1,800</li>
              </ul>
            </div>
            
            <p className="text-gray-700">
              These funds will make a real difference to the important work these charities do in our community and beyond.
            </p>
          </div>
        </section>

        {/* Rainfall Comparison */}
        <section className="card mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">2024 Weather Update</h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-700 mb-4">
              2024 was another wet year following the pattern of recent years. We recorded 33.2 inches in 2024, very similar to the 33.15 inches in 2023.
            </p>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-blue-700 font-medium">
                Comparison: 33.15 inches in 2023 and 33.2 inches in 2024; average rainfall 28.3 inches
              </p>
            </div>
          </div>
        </section>

        {/* Season Outlook */}
        <section className="card mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">2025 Season Outlook</h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-700 mb-4">
              We're looking forward to another successful season in 2025. The nursery will open as usual from March through September with our regular open garden events supporting local charities.
            </p>
            
            <h3 className="text-lg font-medium text-gray-900 mb-2">What's New for 2025</h3>
            <ul className="text-gray-700 space-y-1 mb-4">
              <li>• New varieties of unusual perennials and grasses</li>
              <li>• Extended range of alpines for rock gardens</li>
              <li>• More container-ready plants for small gardens</li>
              <li>• Continued focus on climate-resilient varieties</li>
            </ul>
            
            <p className="text-green-700 font-medium">
              We look forward to welcoming you back to the nursery and garden in 2025!
            </p>
          </div>
        </section>

        {/* Contact */}
        <section className="bg-gray-50 border border-gray-200 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Stay in Touch</h2>
          <div className="space-y-2 text-gray-700">
            <p><strong>Email:</strong> tim@thelonghouse.net</p>
            <p><strong>Phone:</strong> 01708 371719</p>
            <p><strong>Website:</strong> www.longhouseplants.com</p>
          </div>
        </section>
      </div>
    </>
  )
}

export default Newsletter