import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native';
import BookTransactionScreen from './Screens/BookTransaction'
import SearchScreen from './Screens/SearchScreen'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {createAppContainer} from 'react-navigation'

export default class App extends React.Component {
  render(){
  return (
    <AppContainer/>
  );
}

}
const TabNavigator=createBottomTabNavigator({
  Transaction:{screen:BookTransactionScreen},
  Search:{screen:SearchScreen},
})
const AppContainer=createAppContainer(TabNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})