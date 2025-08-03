import Head from 'next/head'
import UlezNotice from '@/components/UlezNotice'

const ULEZ = () => {
  return (
    <>
      <Head>
        <title>ULEZ Information - Long House Plants</title>
        <meta name="description" content="ULEZ information for Long House Plants nursery. The nursery is not in the expanded ULEZ area." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-green-700 mb-8">ULEZ Information</h1>
        
        <UlezNotice />
        
        <div className="card">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Additional Information</h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-700 mb-4">
              The Ultra Low Emission Zone (ULEZ) expanded on 29 August 2023, but our nursery location remains outside this zone.
            </p>
            <p className="text-gray-700 mb-4">
              While we are located inside the M25, the specific roads leading to our nursery - Chequers Road, Noak Hill Road, and Church Road - are all outside the ULEZ boundary.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="text-lg font-medium text-blue-800 mb-2">Important</h3>
              <p className="text-blue-700">
                Please verify your specific route and vehicle compliance on the official TFL ULEZ website before traveling.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ULEZ