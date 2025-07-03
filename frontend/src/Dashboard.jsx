import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Dashboard = () => {
  const [userName, setUserName] = useState("Ashwin");
  const [noteCount, setNoteCount] = useState(5); // Replace with API later

  useEffect(() => {
    // In real setup, fetch user and notes data here
    // Example: setUserName(fetch from backend)
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen px-4 py-8 bg-gray-950 text-white"
    >
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Welcome Greeting */}
        <motion.h1
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl font-bold tracking-tight"
        >
          Welcome, {userName} 👋
        </motion.h1>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          <div className="bg-gray-900 p-6 rounded-2xl shadow-md border border-gray-800 hover:border-pink-500 transition-all">
            <h2 className="text-lg font-semibold text-gray-300 mb-2">
              Total Notes
            </h2>
            <p className="text-4xl font-bold text-pink-500">{noteCount}</p>
          </div>

          <button className="bg-pink-600 hover:bg-pink-700 transition-colors text-white rounded-2xl p-6 shadow-md flex items-center justify-center text-lg font-semibold">
            + Create New Note
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Dashboard;
