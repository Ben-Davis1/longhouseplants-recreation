import Head from 'next/head'
import Image from 'next/image'
import { GetStaticProps } from 'next'
import { useState } from 'react'
import PlantCard from '@/components/PlantCard'
import catalogueData from '@/data/catalogue.json'

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

interface CatalogueProps {
  plants: Plant[]
}

const ITEMS_PER_PAGE = 12

const Catalogue = ({ plants }: CatalogueProps) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')

  const categories = Array.from(new Set(plants.map(plant => plant.category)))

  const filteredPlants = plants.filter(plant => {
    const matchesSearch = searchTerm === '' || 
      plant.genus.toLowerCase().includes(searchTerm.toLowerCase()) ||
      plant.species.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (plant.cultivar && plant.cultivar.toLowerCase().includes(searchTerm.toLowerCase()))
    
    const matchesCategory = selectedCategory === '' || plant.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  const totalPages = Math.ceil(filteredPlants.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const paginatedPlants = filteredPlants.slice(startIndex, startIndex + ITEMS_PER_PAGE)

  return (
    <>
      <Head>
        <title>Plant Catalogue - Long House Plants</title>
        <meta name="description" content="Browse our complete catalogue of over 1,270 plants including trees, shrubs, perennials, grasses and alpines." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-green-700 mb-8">Plant Catalogue</h1>
        
        {/* Catalogue Hero Image */}
        <div className="relative h-48 md:h-64 rounded-lg overflow-hidden shadow-lg mb-8">
          <Image
            src="/images/nursery-3.jpeg"
            alt="Diverse collection of plants including daylilies and ornamental varieties available in our catalogue"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
            <div className="text-center text-white p-6">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                Over 1,270 Plant Varieties
              </h2>
              <p className="text-lg opacity-90">
                All grown on-site with expert care
              </p>
            </div>
          </div>
        </div>
        
        <div className="mb-8">
          <p className="text-gray-600 mb-4">
            Browse our collection of {plants.length} plants. All plants are grown here at the nursery.
          </p>
          
          {/* Search and Filter */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="flex-1">
              <label htmlFor="search" className="sr-only">Search plants</label>
              <input
                id="search"
                type="text"
                placeholder="Search by genus, species, or cultivar..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value)
                  setCurrentPage(1)
                }}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
              />
            </div>
            
            <div className="sm:w-48">
              <label htmlFor="category" className="sr-only">Filter by category</label>
              <select
                id="category"
                value={selectedCategory}
                onChange={(e) => {
                  setSelectedCategory(e.target.value)
                  setCurrentPage(1)
                }}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
              >
                <option value="">All categories</option>
                {categories.map(category => (
                  <option key={category} value={category} className="capitalize">
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
          
          <p className="text-sm text-gray-500">
            Showing {startIndex + 1}-{Math.min(startIndex + ITEMS_PER_PAGE, filteredPlants.length)} of {filteredPlants.length} plants
          </p>
        </div>

        {/* Plant Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
          {paginatedPlants.map((plant) => (
            <PlantCard key={plant.id} plant={plant} />
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center space-x-2">
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="px-3 py-2 rounded-md bg-gray-100 text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-200"
            >
              Previous
            </button>
            
            <span className="px-4 py-2 text-gray-700">
              Page {currentPage} of {totalPages}
            </span>
            
            <button
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="px-3 py-2 rounded-md bg-gray-100 text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-200"
            >
              Next
            </button>
          </div>
        )}

        {/* Footer Notice */}
        <div className="mt-12 p-6 bg-yellow-50 border-2 border-yellow-200 rounded-lg text-center">
          <p className="text-yellow-800 font-medium">
            Please note all prices displayed are guidelines only. We do not offer a mail order service.
          </p>
        </div>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      plants: catalogueData,
    },
  }
}

export default Catalogue