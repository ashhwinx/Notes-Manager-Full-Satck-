import React from "react";
import NoteCard from "../components/NoteCard";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">📒 Your Notes</h1>

      {/* Add Note Form styled like a code editor */}
      <form
        className="mb-8 bg-gray-800 rounded-lg p-6 shadow-md font-mono text-sm leading-relaxed"
        style={{ fontFeatureSettings: "'liga' 0" }}
      >
        <label className="block mb-2 text-pink-400">Title</label>
        <input
          type="text"
          placeholder="Enter note title"
          className="w-full bg-gray-900 text-white border border-blue-400 rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          spellCheck={false}
          autoComplete="off"
        />

        <label className="block mb-2 text-pink-400">Content</label>
        <textarea
          placeholder="Write your note here..."
          rows={8}
          className="w-full bg-gray-900 text-white border border-blue-400 rounded px-3 py-2 resize-y focus:outline-none focus:ring-2 focus:ring-yellow-500"
          spellCheck={false}
          autoComplete="off"
        ></textarea>

        <button
          type="submit"
          className="mt-4 w-full bg-gray-950 hover:bg-green-700 py-2 rounded font-semibold transition"
        >
          Save Note
        </button>
      </form>

      {/* Notes List */}
      <div className="grid gap-4 md:grid-cols-2">
        {/* Example static notes */}
        <NoteCard title="Sample Note 1" content="This is a sample note content." />
        <NoteCard title="Sample Note 2" content="Another note to display." />
      </div>
    </div>
  );
};

export default Dashboard;
