export default function ExpenseItem({ item }) {
  return (
    <div className="flex justify-between items-center bg-gray-50 border p-2 rounded-md mb-1">
      <span>
        <b>Category :</b>
      </span>
      <span>{item.category}</span>|
      <span>
        <b>Title :</b>
      </span>
      <span>{item.title}</span>|
      <span>
        <b>Amount :</b>
      </span>
      <span>Rs. {item.amount}</span>
    </div>
  );
}
