const Home = () => {
  return (
    <div className="wrapper py-10">
      <h1 className="p-40-semibold text-dark-100">Welcome to Travel App</h1>
      <p className="text-lg text-gray-100 mb-6">Your journey starts here!</p>
      <a 
        href="/dashboard" 
        className="inline-block bg-primary-100 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-500 transition-colors"
      >
        Go to Dashboard
      </a>
    </div>
  )
}

export default Home 