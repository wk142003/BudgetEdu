import { Routes, Route, Link } from "react-router-dom";
import Pillar1 from "./pages/pillar1";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-md px-6 py-4 flex items-center justify-between">
        {/* Logo / Brand */}
        <div className="text-xl font-bold text-blue-600">
          BudgetEdu
        </div>

        {/* Links */}
        <div className="flex space-x-4">
          <Link
            to="/"
            className="text-gray-700 font-medium hover:text-blue-600 transition-colors duration-200"
          >
            Introduction
          </Link>
          <Link
            to="/pillar1"
            className="text-gray-700 font-medium hover:text-blue-600 transition-colors duration-200"
          >
            What is Budgeting
          </Link>
        </div>
      </nav>


      <main className="mx-auto max-w-5xl px-4 py-10">
        <Routes>
          <Route path="/" element={<h1 className="text-3xl font-bold">Welcome to Budgeting!</h1>} />
          <Route path="/pillar1" element={<Pillar1 />} />
        </Routes>
      </main>
    </div>
  );
}

