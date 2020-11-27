import React, { useState } from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  View,
  FlatList,
  Image
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// Before rendering any navigation stack
import axios from 'axios';
import { enableScreens } from 'react-native-screens';
enableScreens();

class HomeScreen extends React.Component {
  state = {
    data: []
  };
  componentDidMount = async () => {
    let final = await axios('http://localhost:3001/get');
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
        {data &&
          data.map(a => {
            return <Text key={a?._id.toString()}>{a.username}</Text>;
          })}
        <Text>{this.state.data[0] && this.state.data[0].username}</Text>
      </View>
    );
  }
}

function SettingsScreen() {
  const postTest = async () => {
    console.log('post test');
    axios.post('http://localhost:3001/post', {
      username: new Date().toString()
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

const Test = () => {
  const [board, setBoard] = useState([
    { name: 'bryan', likes: 50 },
    { name: 'bryan', likes: 60 },
    { name: 'bryan', likes: 12 },
    { name: 'bryan', likes: 5 },
    { name: 'bryan', likes: 15 },
    { name: 'bryan', likes: 22 },
    { name: 'bryan', likes: 0 },
    { name: 'bryan', likes: 75 },
    { name: 'bryan', likes: 3 },
    { name: 'bryan', likes: 33 },
    { name: 'bryan', likes: 19 },
    { name: 'bryan', likes: -1 },
    { name: 'bryan', likes: 81 },
    { name: 'bryan', likes: 62 },
    { name: 'bryan', likes: 45 },
    { name: 'bryan', likes: 1 }
  ]);

  const DATA = ['press'];

  const renderItem = props =>
    console.log('item', props.item) || (
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          flex: 1,
          paddingLeft: 12,
          flexWrap: 'wrap',
          backgroundColor: 'yellow'
          // margin: 'auto'
        }}
      >
        {board
          .sort((a, b) => {
            return a.likes - b.likes;
          })
          .map(a => {
            return (
              <View>
                <Text
                  style={{
                    borderWidth: 2,
                    width: 115,
                    height: 115
                    // marginRight: 5,
                  }}
                >
                  {a.name}
                  {a.likes}
                </Text>
              </View>
            );
          })}
      </View>
    );

  return (
    <View
      style={{
        display: 'flex',
        flex: 1,
        // backgroundColor: 'orange',
        justifyContent: 'center'
      }}
    >
      <SafeAreaView
        style={{
          display: 'flex',
          // justifyContent: 'center',
          // alignItems: 'center',
          borderWidth: 2,
          borderColor: 'red',
          maxHeight: 400
        }}
      >
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item}
          ListHeaderComponent={
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                marginBottom: 20
              }}
            >
              <Text>INSTAGRAM FLATLIST</Text>
            </View>
          }
        />
      </SafeAreaView>
    </View>
  );
};

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen name="Test" component={Test} />
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
