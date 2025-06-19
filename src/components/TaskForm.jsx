'use client';
import { useState } from 'react';
import { Plus } from 'lucide-react'; // Optional icon library (if installed)

export default function TaskForm({ onAddTask }) {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) return;
    onAddTask(task);
    setTask('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-3 mb-6 items-center">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a new task..."
        className="flex-1 px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      <button
        type="submit"
        className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-xl font-semibold hover:bg-indigo-700 transition duration-200"
      >
        <Plus size={18} /> Add
      </button>
    </form>
  );
}
