function Experience({
  company,
  setCompany,
  position,
  setPosition,
  description,
  setDescription,
  datew,
  setDatew,
}) {
  return (
    <div className="overflow-x-hidden">
      <div className="flex flex-col">
        <h1>Experience:</h1>

        <label htmlFor="company">Company:</label>
        <input
          type="text"
          name="Company"
          placeholder="Name of Company..."
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className="bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />

        <label htmlFor="position">Position:</label>
        <input
          type="text"
          name="position"
          placeholder="Name of Position..."
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          className="bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />

        <label htmlFor="description">Description:</label>
        <textarea
          className="bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          name="description"
          placeholder="Describe your role..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <label htmlFor="date">Start/End Date:</label>
        <input
          type="text"
          name="date"
          placeholder="DD/MM/YYYY - DD/MM/YYYY"
          value={datew}
          onChange={(e) => setDatew(e.target.value)}
          className="bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
    </div>
  );
}

export default Experience;
