import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    headerContainer: {
        justifySelf: 'end'
    },
    soldBy: {
        marginTop: 20,
        paddingBottom: 3,
        fontWeight: 'bolder',
        fontSize: 16
    },
});


const SoldByAddress = ({ address, name }) => (
    <View style={styles.headerContainer}>
        <Text style={styles.soldBy}>Sold By:</Text>
        <Text>{name}</Text>
        <Text>{address.street1}</Text>
        <Text>{address.street2}</Text>
        <Text>{address.phone}</Text>
        <Text>{address.pincode}</Text>
    </View>
);

export default SoldByAddress