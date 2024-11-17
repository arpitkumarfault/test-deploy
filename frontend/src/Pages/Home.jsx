
const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center bg-[url('/path/to/your/background.jpg')]">
      <div className="bg-white bg-opacity-70 p-10 rounded-lg shadow-lg max-w-2xl text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Our Website</h1>
        <p className="text-lg text-gray-600 mb-8">
          Discover amazing content and join our community. Log in or sign up to get started!
        </p>
        
        <div className="flex space-x-4">
          <a
            href="/login"
            className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Log In
          </a>
          <a
            href="/register"
            className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition duration-200"
          >
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
