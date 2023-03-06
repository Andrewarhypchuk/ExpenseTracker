import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ManageExpense from './screens/ManageExpense';
import RecentExpences from './screens/RecentExpences';
import AllExpences from './screens/AllExpenses';
import { GlobalColors } from './constants/colors';
import { Ionicons } from '@expo/vector-icons'
import IconButton from './UI/IconButton';
import { Provider } from 'react-redux';
import { store } from './store/store';


export default function App() {
  const BottomTabs = createBottomTabNavigator();
  const Stack = createStackNavigator();

  function ExpensesOverview() {
    return <BottomTabs.Navigator
      screenOptions={
        ({ navigation }) => ({
          headerStyle: { backgroundColor: GlobalColors.colors.primary500 },
          headerTintColor: 'white',
          tabBarStyle: {
            backgroundColor: GlobalColors.colors.primary500
          },
          tabBarActiveTintColor: GlobalColors.colors.accent500,
          headerRight: ({ tintColor }) => {
            return <IconButton
              icon='add'
              size={32}
              color={tintColor}
              onPress={() => {
                navigation.navigate('Manage Expense')
              }}
            />
          }
        })
      }>
      <BottomTabs.Screen
        name='RecentExpense'
        component={RecentExpences}
        options={{
          title: 'Recent Expenses',
          tabBarLabel: 'Recent',
          tapBarIcon: ({ color, size }) => <Ionicons name='hourglass' size={size} color={color} />
        }}
      />
      <BottomTabs.Screen
        name='AllExpenses'
        component={AllExpences}
        options={{
          title: 'ALL Expenses',
          tabBarLabel: 'All',
          tabBarIcon: ({ color, size }) => <Ionicons name='calendar' size={size} color={color} />
        }}
      />
    </BottomTabs.Navigator>
  }

  return (
    <>
      <Provider store={store}>
        <StatusBar style="auto" />
        <NavigationContainer>
          <Stack.Navigator screenOptions={{
            headerStyle: {
              backgroundColor: GlobalColors.colors.primary500
            },
            headerTintColor: 'white'
          }}>
            <Stack.Screen
              name='ExpensesOverview'
              component={ExpensesOverview}
              options={{
                headerShown: false
              }}
            />
            <Stack.Screen
              name='Manage Expense'
              component={ManageExpense}
              options={{
                presentation: 'modal'
              }

              } />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}

