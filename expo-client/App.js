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
enableScreens();

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

// const Flatlist = () => {
//   let data = [
//     { name: 'bryan', likes: 50 },
//     { name: 'bryan', likes: 60 },
//     { name: 'bryan', likes: 12 },
//     { name: 'bryan', likes: 5 },
//     { name: 'bryan', likes: 15 },
//     { name: 'bryan', likes: 22 },
//     { name: 'bryan', likes: 75 },
//     { name: 'bryan', likes: 3 },
//     { name: 'bryan', likes: 33 },
//     { name: 'bryan', likes: 19 },
//     { name: 'bryan', likes: 81 },
//     { name: 'bryan', likes: 62 },
//     { name: 'bryan', likes: 45 },
//     { name: 'bryan', likes: 1 },
//     { name: 'bryan', likes: 17 }
//   ];
//   let sortedData = data.sort((a, b) => {
//     return a.likes - b.likes;
//   });
//   const DATA = sortedData;
//   const renderItem = ({ item }) => (
//     <View>
//       <Text style={{ width: 75, height: 75, borderWidth: 2 }}>
//         {item.likes}
//       </Text>
//     </View>
//   );

//   return (
//     <View
//       style={{
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         borderWidth: 2,
//         flex: 1,
//         backgroundColor: 'orange'
//       }}
//     >
//       <View style={{ height: 200 }}>
//         <FlatList
//           numColumns={3}
//           contentContainerStyle={{
//             flexDirection: 'row',
//             // flexWrap: 'wrap',
//             width: 250,
//             borderWidth: 2
//           }}
//           data={DATA}
//           renderItem={renderItem}
//           keyExtractor={item => item.likes}
//         />
//       </View>
//     </View>
//   );
// };

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
