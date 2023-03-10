import { StyleSheet, Text,View } from "react-native";
import { Pressable } from "react-native";
import { GlobalColors } from './../constants/colors';
import { getFormatedDate } from './../util/date';
import {useNavigation} from '@react-navigation/native'


function ExpenseItem({id,title,amount,date,category}){
   const navigation =  useNavigation();
  
function expensePressHandler(){
   navigation.navigate('Manage Expense',{
    expenseId:id
   })
}


    return <Pressable 
    onPress={expensePressHandler}
    style={({pressed})=>pressed && styles.pressed}
    >
        <View style={styles.expenseItem}>
           <View>
               <Text style={[styles.textBase,styles.description]}>
                 {title}
                </Text>
                <Text style={styles.textBase}>
                  {getFormatedDate(date)}
                </Text>
           </View>
           <View style={styles.amountContainer}>
              <Text style={styles.amount}>
                   {category}
              </Text>
          </View>

           <View style={styles.amountContainer}>
              <Text style={styles.amount}>
                   {amount.toFixed(2)}$
              </Text>
          </View>
        </View>
    </Pressable>
}

export default ExpenseItem;

const styles = StyleSheet.create({
  pressed:{
     opacity:0.75
  },
   expenseItem:{
     padding:12,
     marginVertical:8,
     backgroundColor:GlobalColors.colors.primary500,
     flexDirection:'row',
     justifyContent:'space-between',
     borderRadius:6,
     elevation:3,
     shadowColor:GlobalColors.colors.gray500,
     shadowRadius:4,
     shadowOffset:{
        width:1,
        height:1
     },
     shadowOpacity:0.4
   },
   textBase:{
    color:GlobalColors.colors.primary50
   },
   description:{
    fontSize:16,
    marginBottom:4,
    fontWeight:'bold',
    minWidth:150
   },
   amountContainer:{
       paddingHorizontal:12,
       paddingVertical:4,
       backgroundColor:'white',
       justifyContent:'center',
       alignItems:'center',
       borderRadius:4,
       minWidth:80
   },
   amount:{
    color:GlobalColors.colors.primary500,
    fontWeight:'bold'
   }
   ,
   category:{
     width:20,
     height:20,
     borderRadius:'50%'
   }
})