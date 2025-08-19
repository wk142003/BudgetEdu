import { Routes, Route, Link } from "react-router-dom";
import Introduction from "./pages/Introduction";
import WhatIsBudgeting from "./pages/WhatIsBudgeting";
import Advantages from "./pages/Advantages";
import Disadvantages from "./pages/Disadvantages";
import BudgetingStrategies from "./pages/BudgetingStrategies";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-200 text-gray-900">
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
            to="/what-is-budgeting"
            className="text-gray-700 font-medium hover:text-blue-600 transition-colors duration-200"
          >
            What is Budgeting
          </Link>
          <Link
            to="/advantages"
            className="text-gray-700 font-medium hover:text-blue-600 transition-colors duration-200"
          >
            Advantages
          </Link>
          <Link
            to="/disadvantages"
            className="text-gray-700 font-medium hover:text-blue-600 transition-colors duration-200"
          >
            Disadvantages
          </Link>
          <Link
            to="/budgeting-strategies"
            className="text-gray-700 font-medium hover:text-blue-600 transition-colors duration-200"
          >
            Budgeting Strategies
          </Link>
        </div>
      </nav>

      {/*flex-1 ensures main takes the remaining height*/}
      <main className="flex-1 mx-auto max-w-5xl px-4 py-10">
        <Routes>
          <Route path="/" element={<Introduction />} />
          <Route path="/what-is-budgeting" element={<WhatIsBudgeting />} />
          <Route path="/advantages" element={<Advantages />} />
          <Route path="/disadvantages" element={<Disadvantages />} />
          <Route path="/budgeting-strategies" element={<BudgetingStrategies />} />
        </Routes>
      </main>
    </div>
  );
}

