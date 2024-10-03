const Announcements = () => {
  return (
    <div className="bg-white p-4 rounded-md">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold my-4">Announcements</h1>
        <span className="text-xs text-gray-400">View All</span>
      </div>

      <div className="flex flex-col gap-4">
        <div className="p-4 rounded-md bg-primarySkyLight">
          <div className="flex items-center justify-between">
            <h1 className="font-medium text-gray-600">
              Anthony&apos;s Announcement
            </h1>
            <span className="text-gray-300 text-xs bg-white rounded-md px-1 py-1">
              2025-01-01
            </span>
          </div>

          <p className="mt-1 text-gray-400 text-sm">
            Whatever goes through the mind makes me wonder whether it goes
            through my mind too
          </p>
        </div>

        <div className="p-4 rounded-md bg-primaryPurpleLight">
          <div className="flex items-center justify-between">
            <h1 className="font-medium text-gray-600">
              Anthony&apos;s Announcement
            </h1>
            <span className="text-gray-300 text-xs bg-white rounded-md px-1 py-1">
              2025-01-01
            </span>
          </div>

          <p className="mt-1 text-gray-400 text-sm">
            Whatever goes through the mind makes me wonder whether it goes
            through my mind too
          </p>
        </div>

        <div className="p-4 rounded-md bg-primaryYellowLight">
          <div className="flex items-center justify-between">
            <h1 className="font-medium text-gray-600">
              Anthony&apos;s Announcement
            </h1>
            <span className="text-gray-300 text-xs bg-white rounded-md px-1 py-1">
              2025-01-01
            </span>
          </div>

          <p className="mt-1 text-gray-400 text-sm">
            Whatever goes through the mind makes me wonder whether it goes
            through my mind too
          </p>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
