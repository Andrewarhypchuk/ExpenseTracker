import { useEffect, useLayoutEffect,useRef } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import {Text} from 'react-native';
import IconButton from './../UI/IconButton';
import { GlobalColors } from './../constants/colors';
import Button from '../UI/Button';
import { useDispatch } from 'react-redux';

function ManageExpense({ route, navigation }){
 
   const editedExpenseId = route.params?.expenseId;


   const isEditing = !!editedExpenseId;


   const titleInput = useRef();
   const priceInput = useRef();


   useLayoutEffect(()=>{
       
      navigation.setOptions({
         title:isEditing ? 'Edit Expense' : 'Add Expense'
      })

   },[navigation,isEditing])

   function deleteExpenseHandler(){
      navigation.goBack()

   }
   function cancelHandler(){
      navigation.goBack()

   }
   function confirmHandler(){
      navigation.goBack()
   }
    

   return <View style={styles.container}>
          
                  <TextInput 
                      cursorColor='white' 
                      autoFocus={true} 
                      style={styles.input} 
                      ref={titleInput}
                      type='text' 
                      inputMode='text'
                      keyboardAppearance='dark'
                      placeholder='  Title...'
                      placeholderTextColor='lightgrey'
                      
                      />
                  <TextInput 
                      style={styles.input} 
                      type='number' 
                      inputMode='numeric' 
                      keyboardAppearance='dark'
                      placeholder='  Price..'
                      placeholderTextColor='lightgrey'
                      
                      />
                  
          
      <View style={styles.buttons}>
         <Button style={styles.button} mode='flat' onPress={cancelHandler}>Cancel</Button>
         <Button style={styles.button}  onPress={confirmHandler}>
           {isEditing ? 'Update' : 'Add'}
            </Button>
      </View>
         
         {isEditing && 
         <View style={styles.deleteContainer}>
         <IconButton 
         onPress={deleteExpenseHandler} 
         icon='trash' 
         size={36} 
         color={GlobalColors.colors.error500}
          />
          </View>
          }
   </View>
}

export default ManageExpense;


const styles = StyleSheet.create({
   container:{
    flex:1,
    padding:24,
    backgroundColor:GlobalColors.colors.primary800
   },
   deleteContainer:{
      marginTop:16,
      paddingTop:8,
      borderTopWidth:2,
      borderTopColor:GlobalColors.colors.primary200,
      alignItems:'center'
   },
   button:{
      minWidth:120,
      marginHorizontal:8
   },

   buttons:{
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center'
   },
   input:{
      width:'100%',
      height:40,
      backgroundColor:GlobalColors.colors.primary400,
      padding:10,
      color:'white',
      borderRadius:4,
      marginBottom:15,
      fontSize:20
   }
})