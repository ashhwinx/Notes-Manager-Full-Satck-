const Login = () => {
    return (
      <div className="min-h-screen bg-gray-900 flex justify-center items-center text-white">
        <form className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md space-y-4">
          <h2 className="text-3xl font-semibold text-center">Login</h2>
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 bg-gray-700 rounded focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 bg-gray-700 rounded focus:outline-none"
          />
          <button className="w-full bg-pink-600 hover:bg-pink-700 py-2 rounded">
            Login
          </button>
        </form>
      </div>
    );
  };
  
  export default Login;
  