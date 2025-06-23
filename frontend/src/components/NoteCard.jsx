const NoteCard = ({ title, content }) => {
    return (
      <div className="bg-gray-800 p-4 rounded-lg text-white shadow hover:shadow-lg transition">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-300">{content}</p>
      </div>
    );
  };
  
  export default NoteCard;
  