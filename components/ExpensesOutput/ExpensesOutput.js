import { StyleSheet } from "react-native";
import { View } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from './ExpensesList';
import { GlobalColors } from './../../constants/colors';
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import { expencesActions } from "../../store/expenses";


function ExpensesOutput({ expenses, expensesPeriod }) {
  const dispatch = useDispatch();
  const DUMMY_EXPENSES = useSelector((state) => state.expenses.expenses);
  const sortValue = useSelector((state) => state.expenses.sortValue);


  function handleOnPress() {
    console.log('click');
  
     if(sortValue === 'desc'){
      console.log('desc')
       dispatch(expencesActions.setSortedAsc())
     }else{
      console.log('asc')
      dispatch(expencesActions.setSortedDesc())
     }
    
  }

  return <View style={styles.container}>
    <ExpensesSummary expenses={DUMMY_EXPENSES} peroidName={expensesPeriod} />
    <Ionicons name={sortValue === 'desc' ? 'arrow-down' : 'arrow-up'} onPress={() => { handleOnPress() }} color='white' size={60} />
    <Ionicons name={sortValue === 'desc' ? 'arrow-down' : 'arrow-up'} onPress={() => { handleOnPress() }} color='white' size={60} />
    <ExpensesList expenses={DUMMY_EXPENSES} />
  </View>
}

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalColors.colors.primary700
  }
})