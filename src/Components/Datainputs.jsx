import { useState } from "react";
//The Form to Add Expense
// send that object to App.jsx using props (onAddExpense())
export default function Input({ onAddExpense }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [day, setDay] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !amount || !category || !day) return;

    const expense = {
      id: Date.now(),
      title,
      amount: parseFloat(amount),
      category,
      day: day.toLowerCase(),
    };

   
    onAddExpense(expense); // sending this object to App.jsx
    setTitle("");
    setAmount("");
    setCategory("");
    setDay("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow p-4 rounded-md grid grid-cols-1 md:grid-cols-5 gap-4"
    >
      <input
        className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <input
        className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
        required
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
        className="border p-2 rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
      >
        <option value="">📂 Select Category</option>
        <option value="Food">🍴 Food & Drinks</option>
        <option value="Transport">🚗 Transport</option>
        <option value="Groceries">🛒 Groceries</option>
        <option value="Mobile">📱 Mobile & Internet</option>
        <option value="Bills">💡 Household Bills</option>
        <option value="Health">💊 Health</option>
        <option value="Entertainment">🎮 Entertainment</option>
        <option value="Education">📚 Education</option>
        <option value="Personal">🎁 Personal / Fun</option>
        <option value="Work">💼 Work / Freelancing</option>
        <option value="Other">🧾 Other</option>
      </select>

      <input
        className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
        type="text"
        value={day}
        placeholder="Enter date/day"
        required
        onChange={(e) => setDay(e.target.value.toLowerCase())}
      />
      <button
        className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-500 font-semibold"
        type="submit"
      >
        Add Expense
      </button>
    </form>
  );
}
