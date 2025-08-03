import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts'

interface RainfallData {
  year: number
  rainfall_mm: number
  rainfall_inches: number
}

interface RainfallChartProps {
  data: RainfallData[]
  showAverage?: boolean
}

const RainfallChart = ({ data, showAverage = true }: RainfallChartProps) => {
  const averageRainfall = 719.18 // mm

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload
      return (
        <div className="bg-white p-3 border border-gray-300 rounded-lg shadow-lg">
          <p className="font-medium">{`Year: ${label}`}</p>
          <p className="text-blue-600">
            {`Rainfall: ${data.rainfall_mm} mm (${data.rainfall_inches} inches)`}
          </p>
        </div>
      )
    }
    return null
  }

  return (
    <div className="w-full">
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Annual Rainfall 2006-2024
        </h3>
        
        <div className="h-96 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 20,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="year" 
                tick={{ fontSize: 12 }}
                angle={-45}
                textAnchor="end"
                height={60}
              />
              <YAxis 
                tick={{ fontSize: 12 }}
                label={{ value: 'Rainfall (mm)', angle: -90, position: 'insideLeft' }}
              />
              <Tooltip content={<CustomTooltip />} />
              {showAverage && (
                <ReferenceLine 
                  y={averageRainfall} 
                  stroke="#ef4444" 
                  strokeDasharray="5 5"
                  label={{ value: "Average: 719.18 mm", position: "topRight" }}
                />
              )}
              <Bar 
                dataKey="rainfall_mm" 
                fill="#3b82f6"
                radius={[2, 2, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        <div className="mt-4 text-center text-sm text-gray-600">
          <p className="font-medium">
            Average rainfall 2006-2024 = 719.18 mm / 28.3 in
          </p>
        </div>
      </div>
    </div>
  )
}

export default RainfallChart