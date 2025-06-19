export default function TaskList({ tasks, onDeleteTask }) {
  return (
    <ul className="space-y-3">
      {tasks.map((task, index) => (
        <li
          key={index}
          className="flex items-center justify-between bg-white shadow-md p-4 rounded-xl border border-gray-200 hover:scale-[1.01] transition-transform duration-150"
        >
          <span className="text-gray-800 font-medium">{task}</span>
          <button
            onClick={() => onDeleteTask(index)}
            className="text-red-500 hover:text-red-700 transition"
          >
            🗑️
          </button>
        </li>
      ))}
    </ul>
  );
}
