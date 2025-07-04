import ExpenseItem from './ExpenseItem'

export default function ExpensePerDay({ day, expenses }) {
  const total = expenses.reduce((sum, item) => sum + item.amount, 0)

  return (
    <div className='bg-white shadow rounded-md my-4 p-4'>
      <h3 className='text-lg font-semibold mb-2'>📅 {day}</h3>
      {expenses.map(item => (
        <ExpenseItem key={item.id} item={item} />
      ))}
      <p className='text-right font-bold mt-2'><strong>Total:</strong> Rs. {total}</p>
    </div>
  )
}
