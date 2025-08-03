import Head from 'next/head'
import { GetStaticProps } from 'next'
import RainfallChart from '@/components/RainfallChart'
import rainfallData from '@/data/rainfall.json'

interface RainfallData {
  year: number
  rainfall_mm: number
  rainfall_inches: number
}

interface RainfallProps {
  data: RainfallData[]
}

const Rainfall = ({ data }: RainfallProps) => {
  const averageRainfall = 719.18 // mm
  const averageInches = 28.3
  const currentYear = data[data.length - 1]

  return (
    <>
      <Head>
        <title>Rainfall Data - Long House Plants</title>
        <meta name="description" content="Annual rainfall data 2006-2024 for Long House Plants nursery location in Romford, Essex." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-green-700 mb-8">Rainfall Data</h1>
        
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="card text-center">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">2024 Rainfall</h2>
            <p className="text-3xl font-bold text-blue-600">{currentYear.rainfall_mm} mm</p>
            <p className="text-lg text-gray-600">{currentYear.rainfall_inches} inches</p>
          </div>
          
          <div className="card text-center">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">19-Year Average</h2>
            <p className="text-3xl font-bold text-green-600">{averageRainfall} mm</p>
            <p className="text-lg text-gray-600">{averageInches} inches</p>
          </div>
          
          <div className="card text-center">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Difference</h2>
            <p className="text-3xl font-bold text-orange-600">
              +{(currentYear.rainfall_mm - averageRainfall).toFixed(1)} mm
            </p>
            <p className="text-lg text-gray-600">
              +{(currentYear.rainfall_inches - averageInches).toFixed(1)} inches
            </p>
          </div>
        </div>

        {/* Chart */}
        <div className="mb-8">
          <RainfallChart data={data} showAverage={true} />
        </div>

        {/* Data Table */}
        <div className="card">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Annual Rainfall 2006-2024</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Year
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Rainfall (mm)
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Rainfall (inches)
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    vs Average
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {data.map((entry) => {
                  const difference = entry.rainfall_mm - averageRainfall
                  return (
                    <tr key={entry.year} className={entry.year === 2024 ? 'bg-blue-50' : ''}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {entry.year}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {entry.rainfall_mm.toFixed(1)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {entry.rainfall_inches.toFixed(1)}
                      </td>
                      <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${
                        difference > 0 ? 'text-blue-600' : 'text-orange-600'
                      }`}>
                        {difference > 0 ? '+' : ''}{difference.toFixed(1)} mm
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600 font-medium">
              Average rainfall 2006-2024 = 719.18 mm / 28.3 in
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      data: rainfallData,
    },
  }
}

export default Rainfall