import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { View } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';
import HomeScreen from "../screens/HomeScreen";
import ExercisesScreen from "../screens/ExerciseScreen";
import ProfileScreen from "../screens/ProfileScreen";




const Tab = createBottomTabNavigator();

const HOME = 'Home';
const PROFILE = 'Profile'
const EXERCISES = 'Exercises'

const icons = {
    [HOME]: 'home',
    [PROFILE]: 'message1',
    [EXERCISES]: 'setting'
}

export default function BottomNav() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                    name={HOME}
                    component={HomeScreen}
                    options={{tabBarIcon: ()=> <AntDesign name={icons[HOME]}size={20}/>}}
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
    );
}



