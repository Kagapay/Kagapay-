import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Login from './screens/Login';
import Wallet from './screens/Wallet';
import Transfer from './screens/Transfer';
import History from './screens/History';

const Stack = createNativeStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Wallet" component={Wallet}/>
        <Stack.Screen name="Transfer" component={Transfer}/>
        <Stack.Screen name="History" component={History}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
