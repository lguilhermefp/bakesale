/* eslint-disable keyword-spacing */
/* eslint-disable prettier/prettier */
import React from 'react';
import { fetchInitialDeals } from '../ajax';
import DealList from './DealList';

import { View, Text, StyleSheet } from 'react-native';

class App extends React.Component {

    state = {
        deals: [],
    };

    async componentDidMount(){
        const deals = await fetchInitialDeals();
        this.setState({ deals });
    }

    render(){
        return(
            <View style={styles.container}>
                {
                    this.state.deals.length > 0
                        ? <DealList deals={this.state.deals} />
                        : <Text style={styles.header}>Bakersale</Text>
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        fontSize: 40,
    },
});

export default App;
