'use client';
import Header from '@/components/Header';
import TaskForm from '@/components/TaskForm';
import TaskList from '@/components/TaskList';
import { useState } from 'react';

export default function Home() {
  const [tasks, setTasks] = useState<string[]>([]);

  const addTask = (task: string) => {
    setTasks((prev) => [...prev, task]);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-100 to-indigo-100">
      <Header />
      <section className="max-w-xl mx-auto mt-10 bg-white p-8 rounded-3xl shadow-2xl">
        <h2 className="text-3xl font-bold mb-6 text-indigo-700 text-center">
          Manage Your Daily Tasks
        </h2>
        <TaskForm onAddTask={addTask} />
        <TaskList tasks={tasks} />
      </section>
    </main>
  );
}
