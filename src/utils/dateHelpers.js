export function groupByDay(expenses) {
    return expenses.reduce((grouped, expense) => {
      const day = expense.day.toLowerCase()
      if (!grouped[day]) grouped[day] = []
      grouped[day].push(expense)
      return grouped
    }, {})
  }
  