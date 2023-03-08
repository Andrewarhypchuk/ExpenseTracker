import { StyleSheet } from "react-native";
import { View,Pressable,Text } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from './ExpensesList';
import { GlobalColors } from './../../constants/colors';
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import { expencesActions, selectSortedValue, selectFilteredExpenses } from "../../store/expenses";
import { useState } from "react";


function ExpensesOutput({ expenses, expensesPeriod }) {
  const dispatch = useDispatch();
  const [category,setCategory] = useState('any')
  const DUMMY_EXPENSES = useSelector((state)=>selectFilteredExpenses(state,category));
  const sortValue = useSelector(selectSortedValue);

  function handleOnPressSort() {
        sortValue === 'desc' ?
       dispatch(expencesActions.setSortedAsc()) :
       dispatch(expencesActions.setSortedDesc())
  }

  return <View style={styles.container}>
    <ExpensesSummary expenses={DUMMY_EXPENSES} peroidName={expensesPeriod} />
    <View style={styles.buttonsContainer}>
    <Ionicons name={sortValue === 'desc' ? 'arrow-down' : 'arrow-up'} onPress={() => { handleOnPressSort() }} color='white' size={60} />
    <Pressable onPress={()=>setCategory('critical')}  style={[styles.button,{backgroundColor:'red'}]}>
      <Text style={styles.text}>Critical</Text>
    </Pressable>
    <Pressable onPress={()=>setCategory('medium')} style={[styles.button,{backgroundColor:'#FFEF00'}]}>
      <Text style={styles.text}>Medium</Text>
    </Pressable>
    <Pressable onPress={()=>setCategory('low')} style={[styles.button,{backgroundColor:'green'}]}>
      <Text style={styles.text}>Low</Text>
    </Pressable>
    <Pressable onPress={()=>setCategory('any')} style={[styles.button,{backgroundColor:GlobalColors.colors.primary200}]}>
      <Text style={styles.text}>All</Text>
    </Pressable>
    </View>
    <ExpensesList expenses={DUMMY_EXPENSES} />
  </View>
}

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalColors.colors.primary700
  },
  buttonsContainer:{
    flexDirection:'row',
    alignItems:'center'
  },
  button:{
    color:'white',
    padding:7,
    minWidth:60,
    borderRadius:5,
    margin:5
  },
  text:{
    color:GlobalColors.colors.gray700,
    fontSize:14,
    textAlign:'center'
  }
})