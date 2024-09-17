const Announcements = () => {
    return (
      <div className="bg-white rounded-md p-8 justify-between">
        <div className='flex items-center justify-between'>
          <h1 className="text-xl font-semibold">Announcements</h1>
          <span className="text-xs text-gray-400">View All</span>
        </div>
        <div className="flex flex-col gap-4 mt-4"></div>
        <div className="bg-lamasky rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Lorem ipsum dolor sit</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">2025-01-01</span>
          </div>
          <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>

        <div className="flex flex-col gap-4 mt-4"></div>
        <div className="bg-lamaskylight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Lorem ipsum dolor sit</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">2025-01-01</span>
          </div>
          <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>

        <div className="flex flex-col gap-4 mt-4"></div>
        <div className="bg-lamapurplelight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Lorem ipsum dolor sit</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">2025-01-01</span>
          </div>
          <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
      </div>
    )
  }
  
  export default Announcements;
  