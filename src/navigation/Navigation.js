import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import AntDesign from 'react-native-vector-icons/AntDesign';
import HomeScreen from "../screens/HomeScreen";
import ExercisesScreen from "../screens/ExerciseScreen";
import ProfileScreen from "../screens/ProfileScreen";
import InputNewExercise from "../screens/InputNewExercise";
import { createStackNavigator } from "@react-navigation/stack";
import { ExerciseProvider } from "../components/ExerciseContext";



const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HOME = 'Home';
const PROFILE = 'Profile'
const EXERCISES = 'Exercises'



const icons = {
    [HOME]: 'home',
    [PROFILE]: 'user',
    [EXERCISES]: 'calendar',
}

function HomeStackNavigator() {
    return (
        <Stack.Navigator
            screenOptions={{
                
                animation: 'fade'
            }}>
            <Stack.Screen name="HomeMain" component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="InputNewExercise" component={InputNewExercise} />
            <Stack.Screen name= 'ExerciseScreen' component={ExercisesScreen} />
        </Stack.Navigator>
    );
}

export default function BottomNav() {
    return (
        <ExerciseProvider>
        <NavigationContainer>
            <Tab.Navigator
            screenOptions={{
                animation: 'fade',           
            }}
            >
                <Tab.Screen
                    name={HOME}
                    component={HomeStackNavigator} 
                    options={{ tabBarIcon: () => <AntDesign name={icons[HOME]} size={20} /> }}
                />
                <Tab.Screen
                    name={PROFILE}
                    component={ProfileScreen}
                    options={{tabBarIcon: () => <AntDesign name={icons[PROFILE]}size={20}/>}}
                />
                <Tab.Screen
                    name={EXERCISES}
                    component={ExercisesScreen}
                    options={{tabBarIcon: () => <AntDesign name={icons[EXERCISES]}size={20}/>}}
                />
            </Tab.Navigator>
        </NavigationContainer>
        </ExerciseProvider>
    );
}



