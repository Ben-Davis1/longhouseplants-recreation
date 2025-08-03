import Head from 'next/head'
import Image from 'next/image'
import { GetStaticProps } from 'next'
import AccessibilityBanner from '@/components/AccessibilityBanner'
import EventList from '@/components/EventList'
import eventsData from '@/data/events.json'

interface Event {
  id: string
  date: string
  title: string
  time: string
  description: string
  charity?: string
  pricing: {
    adult: number
    child: number
  }
}

interface EventsProps {
  events: Event[]
}

const Events = ({ events }: EventsProps) => {
  const charities = [
    {
      name: "National Garden Scheme",
      description: "The National Garden Scheme opens gardens of quality, character and interest to the public for charity."
    },
    {
      name: "Harold Hill Salvation Army",
      description: "Local Salvation Army providing community support and services in Harold Hill area."
    },
    {
      name: "Macmillan Cancer Support", 
      description: "Providing specialist healthcare, information and financial support for people affected by cancer."
    }
  ]

  return (
    <>
      <Head>
        <title>Open Gardens / Events - Long House Plants</title>
        <meta name="description" content="Open garden days 2025 at Long House Plants supporting various charities including National Garden Scheme, Salvation Army and Macmillan Cancer Support." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <AccessibilityBanner />
        
        <h1 className="text-3xl md:text-4xl font-bold text-green-700 mb-8">Open Gardens / Events</h1>
        
        {/* Hero Image for Events */}
        <div className="relative h-48 md:h-64 rounded-lg overflow-hidden shadow-lg mb-8">
          <Image
            src="/images/nursery-2.jpeg"
            alt="Beautiful garden border showing the type of plantings visitors can see during open garden events"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-center text-white p-6">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                Open Garden Days 2025
              </h2>
              <p className="text-lg opacity-90">
                Supporting local charities through garden visits
              </p>
            </div>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Events List */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2025 Open Garden Days</h2>
              <p className="text-gray-700 mb-4">
                Our garden is open on selected days throughout the year to support various charities. 
                All openings include access to both the nursery and garden with refreshments available.
              </p>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                <p className="text-green-800 font-medium">
                  Times: 11 am–4 pm • Adult £7 • Child £3
                </p>
                <p className="text-green-700 text-sm mt-1">
                  Tea & cake available at all events
                </p>
              </div>
            </div>
            
            <EventList events={events} />
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Charities */}
            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Supporting Charities</h3>
              <div className="space-y-4">
                {charities.map((charity) => (
                  <div key={charity.name} className="border-l-4 border-green-400 pl-4">
                    <h4 className="font-medium text-gray-900">{charity.name}</h4>
                    <p className="text-sm text-gray-600 mt-1">{charity.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Refreshments */}
            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Tea & Cake</h3>
              <p className="text-gray-700 mb-3">
                Refreshments are available at all open garden events:
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Tea & cake provided by Salvation Army (most events)</li>
                <li>• Tea & cake available (NGS events)</li>
                <li>• Special coffee morning for Macmillan</li>
              </ul>
            </div>

            {/* Important Notice */}
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <h3 className="text-sm font-medium text-blue-800 mb-2">Important Notice</h3>
              <p className="text-sm text-blue-700">
                Please note that only assistance dogs are welcome in the nursery or garden.
              </p>
            </div>

            {/* Location */}
            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Location</h3>
              <address className="not-italic text-gray-700 space-y-1">
                <p>Church Road, Noak Hill</p>
                <p>Romford RM4 1LD</p>
                <p className="mt-2">
                  <strong>What3words:</strong> remain.keys.beard
                </p>
              </address>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      events: eventsData,
    },
  }
}

export default Events