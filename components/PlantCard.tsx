interface Plant {
  id: string
  genus: string
  species: string
  cultivar?: string
  category: string
  price: number
  difficultSpots: string[]
  description: string
  tags: string[]
}

interface PlantCardProps {
  plant: Plant
}

const PlantCard = ({ plant }: PlantCardProps) => {
  const formatPrice = (price: number) => `£${price.toFixed(2)}`
  
  const fullName = [plant.genus, plant.species, plant.cultivar].filter(Boolean).join(' ')

  return (
    <div className="card hover:shadow-lg transition-shadow duration-200">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-lg font-medium text-gray-900 leading-tight">
          <em className="font-style-italic">{plant.genus}</em>
          {plant.species && <span> {plant.species}</span>}
          {plant.cultivar && <span className="text-green-700"> '{plant.cultivar}'</span>}
        </h3>
        <span className="price-tag ml-2 flex-shrink-0">
          {formatPrice(plant.price)}
        </span>
      </div>
      
      <p className="text-sm text-gray-600 mb-3 capitalize">
        {plant.category}
      </p>
      
      {plant.description && (
        <p className="text-gray-700 text-sm mb-4 leading-relaxed">
          {plant.description}
        </p>
      )}
      
      {plant.difficultSpots && plant.difficultSpots.length > 0 && (
        <div className="mb-3">
          <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">
            Suitable for:
          </h4>
          <div className="flex flex-wrap gap-1">
            {plant.difficultSpots.map((spot, index) => (
              <span key={index} className="tag text-xs">
                {spot}
              </span>
            ))}
          </div>
        </div>
      )}
      
      {plant.tags && plant.tags.length > 0 && (
        <div>
          <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">
            Features:
          </h4>
          <div className="flex flex-wrap gap-1">
            {plant.tags.map((tag, index) => (
              <span key={index} className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded">
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default PlantCard