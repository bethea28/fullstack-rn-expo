import React from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions } from 'react-native';

// const board = [
//   { key: 'A' },
//   { key: 'B' },
//   { key: 'C' },
//   { key: 'D' },
//   { key: 'E' },
//   { key: 'F' },
//   { key: 'G' },
//   { key: 'H' },
//   { key: 'I' },
//   { key: 'J' }
//   // { key: 'K' },
//   // { key: 'L' },
// ];

let board = [
  { name: 'bryan', likes: 50 },
  { name: 'bryan', likes: 60 },
  { name: 'bryan', likes: 12 },
  { name: 'bryan', likes: 5 },
  { name: 'bryan', likes: 15 },
  { name: 'bryan', likes: 22 },
  { name: 'bryan', likes: 75 },
  { name: 'bryan', likes: 3 },
  { name: 'bryan', likes: 33 },
  { name: 'bryan', likes: 19 },
  { name: 'bryan', likes: 81 },
  { name: 'bryan', likes: 62 },
  { name: 'bryan', likes: 45 },
  { name: 'bryan', likes: 1 },
  { name: 'bryan', likes: 17 }
];
let sortedBoard = [...board].sort((a, b) => {
  return a.likes - b.likes;
});
const numColumns = 3;

const formatData = (data, numColumns) => {
  const numberOfFullRows = Math.floor(data.length / numColumns);

  // console.log('fullrow', numberOfFullRows);
  let numberOfElementsLastRow = data.length - numberOfFullRows * numColumns;
  // console.log('lastrow', numberOfElementsLastRow);
  while (
    numberOfElementsLastRow !== numColumns &&
    numberOfElementsLastRow !== 0
  ) {
    data.push({
      name: `blank-${numberOfElementsLastRow}`,
      empty: true,
      likes: -1
    });
    numberOfElementsLastRow++;
  }

  return data;
};

export default class FlatListComponent extends React.Component {
  renderItem = ({ item, index }) => {
    if (item.empty === true) {
      return <View style={[styles.item, styles.itemInvisible]} />;
    }
    return (
      <View style={styles.item}>
        <Text style={styles.itemText}>{item.likes}</Text>
      </View>
    );
  };

  render() {
    return (
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          flex: 1,
          backgroundColor: 'orange'
        }}
      >
        <View style={{ height: 400 }}>
          <FlatList
            data={formatData(sortedBoard, numColumns)}
            style={styles.container}
            renderItem={this.renderItem}
            numColumns={numColumns}
            keyExtractor={item => item.likes}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20
  },
  item: {
    backgroundColor: '#4D243D',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    margin: 1,
    height: Dimensions.get('window').width / numColumns // approximate a square
  },
  itemInvisible: {
    backgroundColor: 'transparent'
  },
  itemText: {
    color: '#fff'
  }
});
