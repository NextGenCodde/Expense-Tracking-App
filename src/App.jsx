import { useEffect, useState } from "react";
import Header from "./components/Header";
import DataInputs from "./Components/DataInputs";
import AllDays from "./components/AllDays";

export default function App() {
  // Load from localStorage initially
  const [expenses, setExpenses] = useState(() => {
    const stored = localStorage.getItem("daily-expenses");
    return stored ? JSON.parse(stored) : [];
  });

  // Save to localStorage when expenses change
  useEffect(() => {
    localStorage.setItem("daily-expenses", JSON.stringify(expenses));
  }, [expenses]);

  const handleAddExpense = (newExpense) => {
    setExpenses((prev) => [...prev, newExpense]);
  };

  return (
    <div className="">
      <Header />
      <DataInputs onAddExpense={handleAddExpense} />
      <AllDays expenses={expenses} />
    </div>
  );
}
