import {Text} from 'react-native'
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput'

function RecentExpences(){
   return <ExpensesOutput expensesPeriod='Last 7 days' />
}

export default RecentExpences