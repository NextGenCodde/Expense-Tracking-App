import { groupByDay } from '../utils/dateHelpers'
import ExpensePerDay from './ExpensePerDay'

export default function AllDays({ expenses }) {
  const grouped = groupByDay(expenses)

  return (
    <div className='p-4 max-w-3xl mx-auto'>
      {Object.entries(grouped).map(([day, dayExpenses]) => (
        <ExpensePerDay key={day} day={day} expenses={dayExpenses} />
      ))}
    </div>
  )
}
