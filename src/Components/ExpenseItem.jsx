export default function ExpenseItem({ item }) {
  return (
   
      <div className="grid grid-cols-3 text-gray-800 text-sm py-2 px-2 hover:bg-gray-50 rounded">
        <span>{item.category}</span>
        <span>{item.title}</span>
        <span>Rs. {item.amount}</span>
      </div>
   
  );
}
