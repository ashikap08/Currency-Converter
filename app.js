import {View, Text} from 'react-native';
import { NavigationContainer } from "@react-navigation/native"; 
import { createStackNavigator } from "@react-navigation/stack"; 

const Stack = createStackNavigator()

import Screen1 from './Screens/DollarsToPounds'
import Home from './Screens/Home'
import Screen2 from './Screens/PoundsToDollars'
import Screen3 from './Screens/DollarsToRupees'
import Screen4 from './Screens/RupeesToDollars'
import Screen5 from './Screens/DollarsToYuan'
import Screen6 from './Screens/YuanToDollars'

export default function App(){
  return(
    <NavigationContainer>
    <Stack.Navigator initialRouteName='Home'>

    <Stack.Screen name="Home"
          component={Home}
          options={{
            title: "Welcome",
            headerStyle: {
              backgroundColor: "#94AF9F",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }} >
    </Stack.Screen>

    <Stack.Screen name="DollarsToPounds"
          component={Screen1}
          options={{
            title: "Welcome",
            headerStyle: {
              backgroundColor: "#94AF9F",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }} >
    </Stack.Screen>

    <Stack.Screen name="PoundsToDollars"
          component={Screen2}
          options={{
            title: "Welcome",
            headerStyle: {
              backgroundColor: "#94AF9F",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }} >
    </Stack.Screen>

    <Stack.Screen name="DollarsToRupees"
          component={Screen3}
          options={{
            title: "Welcome",
            headerStyle: {
              backgroundColor: "#94AF9F",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }} >
    </Stack.Screen>

    <Stack.Screen name="RupeesToDollars"
          component={Screen4}
          options={{
            title: "Welcome",
            headerStyle: {
              backgroundColor: "#94AF9F",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }} >
    </Stack.Screen>

    <Stack.Screen name="DollarsToYuan"
          component={Screen5}
          options={{
            title: "Welcome",
            headerStyle: {
              backgroundColor: "#94AF9F",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }} >
    </Stack.Screen>

    <Stack.Screen name="YuanToDollars"
          component={Screen6}
          options={{
            title: "Welcome",
            headerStyle: {
              backgroundColor: "#94AF9F",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }} >
    </Stack.Screen>

       </Stack.Navigator>
    </NavigationContainer>

  );
}
