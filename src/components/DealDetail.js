import React, {Component} from 'react';
import propTypes from 'prop-types';

import {View, Text, Image, StyleSheet} from 'react-native';

import {priceDisplay} from '../util';
import ajax from '../ajax';

class DealDetail extends Component {
  static proptypes = {
    initialDealData: propTypes.object.isRequired,
  };
  state = {
    deal: this.props.initialDealData,
  };
  async componentDidMount(){
    const fullDeal = await ajax.fetchDealDetail(this.state.deal.key);
    this.setState(() => ({
      deal: fullDeal,
    }));
  }
  render() {
    const {deal} = this.state;
    return (
      <View style={styles.deal} onPress={this.handlePress}>
        <Image source={{uri: deal.media[0]}} style={styles.image} />
        <View style={styles.info}>
          <Text style={styles.title}>{deal.title}</Text>
          <View style={styles.footer}>
            <Text style={styles.name}>{deal.cause.name}</Text>
            <Text style={styles.price}>{priceDisplay(deal.price)}</Text>
          </View>
        </View>
        <Text>...</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  deal: {
    marginHorizontal: 12,
    marginTop: 22,
  },
  image: {
    width: '100%',
    height: 150,
    backgroundColor: '#ccc',
  },
  info: {
    padding: 10,
    backgroundColor: '#fff',
    borderColor: '#bbb',
    borderWidth: 1,
    borderTopWidth: 0,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  footer: {
    flexDirection: 'row',
  },
  cause: {
    flex: 2,
  },
  price: {
    flex: 1,
    textAlign: 'right',
  },
});

export default DealDetail;
