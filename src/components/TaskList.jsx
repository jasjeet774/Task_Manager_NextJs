export default function TaskList({ tasks }) {
  return (
    <ul className="space-y-3">
      {tasks.map((task, index) => (
        <li
          key={index}
          className="bg-white shadow-md p-4 rounded-xl border border-gray-200 hover:scale-[1.01] transition-transform duration-150"
        >
          <span className="text-gray-800 font-medium">{task}</span>
        </li>
      ))}
    </ul>
  );
}
