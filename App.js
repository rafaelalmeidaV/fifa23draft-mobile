import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from './pages/SignIn/Index';
import CreateAccount from './pages/CreateAccount';
import Teste from './pages/Teste';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Teste">
        <Stack.Screen name="SignIn" component={SignIn} options={{headerShown: false}} />
        <Stack.Screen name="Teste" component={Teste} options={{headerShown: false}} />
        <Stack.Screen name="CreateAccount" component={CreateAccount} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

