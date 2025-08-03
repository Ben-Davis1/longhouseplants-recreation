const UlezNotice = () => {
  return (
    <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
      <h2 className="text-xl font-semibold text-green-800 mb-4">ULEZ Information</h2>
      <div className="prose prose-green max-w-none">
        <p className="text-green-700 mb-4">
          I have looked at the map and the nursery is not in the expanded ULEZ area that will become effective on 29 August 2023. 
          The nursery is inside the M25 but Chequers Road, Noak Hill Road and Church Road are outside the ULEZ.
        </p>
        <p className="text-green-600 text-sm font-medium">
          Please check your route/vehicle yourself on the TFL ULEZ website.
        </p>
      </div>
    </div>
  )
}

export default UlezNotice