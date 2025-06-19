'use client';
import { useState } from 'react';

export default function TaskList({ tasks, onDeleteTask, onEditTask }) {
  const [editIndex, setEditIndex] = useState(null);
  const [editedValue, setEditedValue] = useState('');

  const handleEdit = (index, currentValue) => {
    setEditIndex(index);
    setEditedValue(currentValue);
  };

  const handleSave = () => {
    onEditTask(editIndex, editedValue);
    setEditIndex(null);
    setEditedValue('');
  };

  return (
    <ul className="space-y-3">
      {tasks.map((task, index) => (
        <li
          key={index}
          className="flex items-center justify-between bg-white shadow-md p-4 rounded-xl border border-gray-200"
        >
          {editIndex === index ? (
            <input
              type="text"
              value={editedValue}
              onChange={(e) => setEditedValue(e.target.value)}
              className="flex-1 border p-2 rounded-md mr-2"
            />
          ) : (
            <span className="flex-1 text-gray-800 font-medium">{task}</span>
          )}

          <div className="flex gap-2">
            {editIndex === index ? (
              <button
                onClick={handleSave}
                className="text-green-600 hover:text-green-800"
              >
                💾 Save
              </button>
            ) : (
              <button
                onClick={() => handleEdit(index, task)}
                className="text-blue-600 hover:text-blue-800"
              >
                ✏️ Edit
              </button>
            )}
            <button
              onClick={() => onDeleteTask(index)}
              className="text-red-500 hover:text-red-700"
            >
              🗑️
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
