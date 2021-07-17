import React, {Component} from 'react';
import propTypes from 'prop-types';

import {View, Text, Image, StyleSheet} from 'react-native';

import { priceDisplay } from '../util';

class DealItem extends Component {
  static proptypes = {
    deal: propTypes.object.isRequired,
  };
  render() {
    const {deal} = this.props;
    return (
      <View>
        {console.log(this.props.deal.media[0])}
        <Image source={{uri: deal.media[0]}} style={styles.image} />
        <View>
          <Text>{deal.title}</Text>
          <Text>{priceDisplay(deal.price)}</Text>
          <Text>{deal.cause.name}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 150,
  },
});

export default DealItem;
