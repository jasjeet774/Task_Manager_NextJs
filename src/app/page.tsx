'use client';
import Header from '@/components/Header';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Header />
      <section className="max-w-xl mx-auto mt-10 bg-white p-6 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Welcome to your personal task manager!
        </h2>
        <p className="text-gray-600">
          Start organizing your tasks and stay productive.
        </p>
      </section>
    </main>
  );
}
