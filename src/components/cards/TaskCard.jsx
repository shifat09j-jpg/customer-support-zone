const TaskCard = ({ item, handleResolve }) => {
  return (
    <div className="border rounded-lg p-3 bg-gray-50">
      
      
      <p className="text-sm text-gray-700 mb-2">
        {item.title}
      </p>
      {item.status !== "resolved" && (

      
      <button onClick={() => handleResolve(item.id)} className="w-full bg-green-600 text-white text-sm font-semibold py-1 rounded">
        Complete
      </button>
      )}
    </div>
  );
};

export default TaskCard;
