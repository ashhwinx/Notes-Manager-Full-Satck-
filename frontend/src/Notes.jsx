import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Dashboard = () => {
  const [userName, setUserName] = useState("Ashwin");
  const [notes, setNotes] = useState([
    {
      _id: "1",
      title: "React Hooks",
      content: "Hooks are functions that let you use state and other features...",
      createdAt: "2025-07-01",
    },
    {
      _id: "2",
      title: "Project Ideas",
      content: "1. Portfolio Website\n2. Chat App\n3. Notes Manager (this one!)",
      createdAt: "2025-06-30",
    },
  ]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen px-4 py-8 bg-gray-950 text-white"
    >
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Greeting */}
        <h1 className="text-3xl font-bold tracking-tight">
          Welcome, {userName} 👋
        </h1>

        {/* Stats + Create Button */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="bg-gray-900 px-6 py-4 rounded-2xl border border-gray-800 w-full sm:w-auto shadow-md">
            <p className="text-sm text-gray-400 mb-1">Total Notes</p>
            <h2 className="text-3xl font-bold text-pink-500">{notes.length}</h2>
          </div>

          <button className="bg-pink-600 hover:bg-pink-700 transition-colors text-white px-6 py-3 rounded-2xl text-lg font-semibold shadow-md">
            + Create New Note
          </button>
        </div>

        {/* All Notes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {notes.map((note) => (
            <motion.div
              key={note._id}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-900 p-5 rounded-xl border border-gray-800 shadow-md flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-bold text-white mb-2 truncate">{note.title}</h3>
                <p className="text-sm text-gray-400 mb-3">
                  {new Date(note.createdAt).toLocaleDateString()}
                </p>
                <p className="text-sm text-gray-300 line-clamp-4 whitespace-pre-wrap">
                  {note.content}
                </p>
              </div>

              <div className="mt-4 flex justify-between gap-2">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded-lg text-sm">
                  Edit
                </button>
                <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-1 rounded-lg text-sm">
                  Delete
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Dashboard;
