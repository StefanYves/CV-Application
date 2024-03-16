function General({ name, setName, phone, setPhone, email, setEmail }) {
  return (
    <>
      <div className="flex flex-col">
        <h1>Personal Details:</h1>
        <label htmlFor="name">Full Name:</label>
        <input
          type="text"
          name="name"
          placeholder="Your FullName..."
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <label htmlFor="phone">Phone Number:</label>
        <input
          type="text"
          name="phone"
          placeholder="Your Phone Number..."
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          placeholder="Your Email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
    </>
  );
}

export default General;
