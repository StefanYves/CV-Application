function Education({
  institution,
  setInstitution,
  degree,
  setDegree,
  date,
  setDate,
}) {
  return (
    <>
      <div className="flex flex-col">
        <h1>Education:</h1>
        <label htmlFor="institution">Institution:</label>
        <input
          type="text"
          name="institution"
          placeholder="Name of Institution..."
          value={institution}
          onChange={(e) => setInstitution(e.target.value)}
          className="bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <label htmlFor="degree">Degree:</label>
        <input
          type="text"
          name="degree"
          placeholder="Name of Degree..."
          value={degree}
          onChange={(e) => setDegree(e.target.value)}
          className="bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />

        <label htmlFor="date">Start/End Date:</label>
        <input
          type="text"
          name="date"
          placeholder="DD/MM/YYYY - DD/MM/YYYY"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
    </>
  );
}

export default Education;
