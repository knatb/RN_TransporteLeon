import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import EditProfile from '../screens/EditProfile';
import Transact from '../screens/Transact';

const Tab = createBottomTabNavigator();
const SettingsStack = createStackNavigator();

function HomeScreen() {
  return (
    <Home></Home>
  );
}

function TransactScreen() {
  return (
    <Transact></Transact>
  );
}
function ProfileScreen() {
  return (
      <SettingsStack.Navigator
        >
        <SettingsStack.Screen
        name='Profile'
        component={Profile}
        options={{
            headerShown: false,
          }}/>
        <SettingsStack.Screen
        name='Edit'
        component={EditProfile}
        options={{
            headerShown: true,
          }}/>           
      </SettingsStack.Navigator>
  );
}

export default function Navigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Inicio"
        component={HomeScreen}
        options={{ tabBarLabel: "Inicio" }}
      />
      <Tab.Screen
        name="Trámite"
        component={TransactScreen}
        options={{ tabBarLabel: "Trámite" }}
      />
      <Tab.Screen
        name="Perfil"
        component={ProfileScreen}
        options={{ tabBarLabel: "Perfil" }}
      />
    </Tab.Navigator>
  );
}