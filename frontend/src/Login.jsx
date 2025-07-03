import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios"

const Login = () => {
  const [email,setEmail]= useState("")
  const [password , setPassword] = useState("")

  


  

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex items-center justify-center min-h-screen bg-gray-950 px-4"
    >
      <div className="bg-gray-900 p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6 text-white tracking-tight">
          Welcome Back 👋
        </h2>

        <form className="space-y-5">
          <div>
            <label className="block mb-1 text-sm text-gray-300">Email</label>
            <input
              type="email"
              name="email"
       
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm text-gray-300">Password</label>
            <input
              type="password"
              name="password"

              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="••••••••"
            />
          </div>

          <motion.button
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full bg-pink-600 hover:bg-pink-700 transition-colors text-white py-2 rounded-lg font-semibold"
          >
            Login
          </motion.button>
        </form>

        <p className="mt-4 text-sm text-center text-gray-400">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-pink-500 hover:underline transition-all"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </motion.div>
  );
};

export default Login;
