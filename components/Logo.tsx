import Link from 'next/link'

const PinkFlower = ({ className }: { className?: string }) => (
  <div className={`relative ${className}`}>
    {/* Flower center */}
    <div className="absolute inset-0 w-4 h-4 bg-pink-300 rounded-full"></div>
    {/* Petals */}
    <div className="absolute -top-1 left-1 w-2 h-6 bg-pink-400 rounded-full transform -rotate-12"></div>
    <div className="absolute -top-1 right-1 w-2 h-6 bg-pink-400 rounded-full transform rotate-12"></div>
    <div className="absolute top-1 -left-1 w-6 h-2 bg-pink-400 rounded-full transform rotate-12"></div>
    <div className="absolute top-1 -right-1 w-6 h-2 bg-pink-400 rounded-full transform -rotate-12"></div>
    <div className="absolute top-0 left-0 w-2 h-6 bg-pink-500 rounded-full transform rotate-45"></div>
    <div className="absolute top-0 right-0 w-2 h-6 bg-pink-500 rounded-full transform -rotate-45"></div>
    <div className="absolute bottom-0 left-0 w-6 h-2 bg-pink-500 rounded-full transform -rotate-45"></div>
    <div className="absolute bottom-0 right-0 w-6 h-2 bg-pink-500 rounded-full transform rotate-45"></div>
  </div>
)

const Leaves = ({ className }: { className?: string }) => (
  <div className={`relative ${className}`}>
    {/* Main stem */}
    <div className="absolute left-2 top-0 w-1 h-16 bg-green-600"></div>
    {/* Leaves */}
    <div className="absolute left-0 top-2 w-6 h-3 bg-green-500 rounded-full transform -rotate-45"></div>
    <div className="absolute right-0 top-4 w-6 h-3 bg-green-500 rounded-full transform rotate-45"></div>
    <div className="absolute left-0 top-6 w-5 h-2 bg-green-600 rounded-full transform -rotate-30"></div>
    <div className="absolute right-0 top-8 w-5 h-2 bg-green-600 rounded-full transform rotate-30"></div>
    <div className="absolute left-0 top-10 w-4 h-2 bg-green-500 rounded-full transform -rotate-45"></div>
    <div className="absolute right-0 top-12 w-4 h-2 bg-green-500 rounded-full transform rotate-45"></div>
  </div>
)

const Logo = () => {
  return (
    <Link href="/" className="block">
      <div className="relative bg-gradient-to-b from-green-50 via-white to-green-50 rounded-lg overflow-hidden border border-green-200 shadow-sm hover:shadow-md transition-shadow duration-200 min-h-[120px]">
        {/* Left side foliage */}
        <div className="absolute left-0 top-0 w-20 h-full opacity-60">
          <Leaves className="absolute top-2 left-2" />
          <PinkFlower className="absolute top-8 left-8" />
          <div className="absolute top-4 left-12 w-3 h-8 bg-green-500 rounded-full transform rotate-12"></div>
          <div className="absolute top-12 left-4 w-2 h-6 bg-green-600 rounded-full transform -rotate-30"></div>
          <PinkFlower className="absolute top-16 left-10" />
        </div>

        {/* Right side foliage */}
        <div className="absolute right-0 top-0 w-20 h-full opacity-60 transform scale-x-[-1]">
          <Leaves className="absolute top-2 left-2" />
          <PinkFlower className="absolute top-8 left-8" />
          <div className="absolute top-4 left-12 w-3 h-8 bg-green-500 rounded-full transform rotate-12"></div>
          <div className="absolute top-12 left-4 w-2 h-6 bg-green-600 rounded-full transform -rotate-30"></div>
          <PinkFlower className="absolute top-16 left-10" />
        </div>

        {/* Main text */}
        <div className="relative z-10 text-center py-6 px-24">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-green-800 mb-1 font-serif tracking-wide leading-tight">
            Long House Plants
          </h1>
          <p className="text-base md:text-lg text-green-700 font-medium italic">
            Home Grown Hardy Plants
          </p>
        </div>
      </div>
    </Link>
  )
}

export default Logo