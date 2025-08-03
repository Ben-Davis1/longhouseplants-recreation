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

interface EventListProps {
  events: Event[]
}

const EventList = ({ events }: EventListProps) => {
  return (
    <div className="space-y-6">
      {events.map((event) => (
        <div key={event.id} className="card">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {event.title}
              </h3>
              <p className="text-green-600 font-medium">
                {event.date} • {event.time}
              </p>
            </div>
            <div className="mt-2 sm:mt-0 sm:text-right">
              <p className="text-sm text-gray-600">
                Adult £{event.pricing.adult} • Child £{event.pricing.child}
              </p>
            </div>
          </div>
          
          <p className="text-gray-700 mb-3">
            {event.description}
          </p>
          
          {event.charity && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
              <p className="text-sm text-blue-700">
                <strong>Supporting:</strong> {event.charity}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default EventList