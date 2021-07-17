import React from 'react';
import propTypes from 'prop-types';

import {View, Text, FlatList, StyleSheet} from 'react-native';

class DealList extends React.Component {
  static propTypes = {
    deals: propTypes.array.isRequired,
  };

  render() {
    return (
      <View style={styles.list}>
        <FlatList
          data={this.props.deals}
          renderItem={({item}) => <Text>{item.title}</Text>}
        />
        <Text>Deals</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    backgroundColor: '#eee',
    flex: 1,
    width: '100%',
    paddingTop: 15,
    paddingHorizontal: 15,
  },
});

export default DealList;
