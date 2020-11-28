import React, { useState } from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  Image
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// Before rendering any navigation stack
import axios from 'axios';
import { enableScreens } from 'react-native-screens';
import FlatListComponent from './flatlist';

class HomeScreen extends React.Component {
  state = {
    data: []
  };
  componentDidMount = async () => {
    // let final = await axios('http://localhost:3001/get');
    let final = await axios('https://api.github.com/users/mapbox');

    this.setState({
      data: final?.data
    });
    console.log('fina.', final.data);
  };
  render() {
    const { data } = this.state;
    console.log('bryan', this.state);
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {/* {data &&
          data.map(a => {
            return <Text key={a?._id.toString()}>{a.username}</Text>;
          })} */}
        {/* <Text>{this.state.data[0] && this.state.data[0].username}</Text> */}
        <Text>{this.state.data.url}</Text>
      </View>
    );
  }
}

function SettingsScreen() {
  const postTest = async () => {
    console.log('post test');
    axios.post('http://localhost:3001/post', {
      username: 'brain'
    });
  };
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity
        onPress={postTest}
        style={{ width: 100, height: 50, backgroundColor: 'red' }}
      >
        <Text>Settings!</Text>
      </TouchableOpacity>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen name="Flatlist" component={FlatListComponent} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
