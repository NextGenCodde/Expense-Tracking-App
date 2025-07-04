export default function ExpenseItem({ item }) {
  return (
    <div className="bg-white shadow-md rounded-md p-4 mt-4">
      {/* Top Headings */}
      <div className="grid grid-cols-3 font-semibold text-gray-600 border-b pb-2 mb-3 text-sm uppercase tracking-wide">
        <span>Category</span>
        <span>Item</span>
        <span>Amount</span>
      </div>
      <div className="grid grid-cols-3 text-gray-800 text-sm py-2 px-2 hover:bg-gray-50 rounded">
        <span>{item.category}</span>
        <span>{item.title}</span>
        <span>Rs. {item.amount}</span>
      </div>
    </div>
  );
}
