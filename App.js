import Ionic from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
// import { StatusBar } from 'expo-status-bar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import HomeScreen from './components/Home';
import RecordScreen from './components/Record';
import RaveScreen from './components/Rave';
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.container} screenOptions={{
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
    }}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, size, color }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = focused ? "ios-home" : "ios-home-outline"
            }
            if (route.name === "Record") {
              iconName = focused ? "recording-outline" : "ios-recording"
            }
            if (route.name === "Rave") {
              iconName = focused ? "md-musical-notes-outline" : "md-musical-notes-sharp"
            }
            return <Ionic name={iconName} size={size} color={color} />

          }
        })}
      >
        <Tab.Screen name={"Home"} component={HomeScreen} />
        <Tab.Screen name={"Record"} component={RecordScreen} />
        <Tab.Screen name={"Rave"} component={RaveScreen} />
      </Tab.Navigator>
    </NavigationContainer >
  );
}

const styles = StyleSheet.create({
  container: {

    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
