import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    headerContainer: {
    },
    billTo: {
        marginTop: 18,
        paddingBottom: 3,
        fontWeight: 'bolder',
        fontSize: 16
    },
});


const BillToAddress = ({ address, name, taxable, gst_no }) => (
    <View style={styles.headerContainer}>
        <Text style={styles.billTo}>Bill To:</Text>
        <Text>{name}</Text>
        <Text>{address.street1}</Text>
        <Text>{address.street2}</Text>
        <Text>{address.phone}</Text>
        <Text>{address.pincode}</Text>
        {taxable && <Text>{gst_no}</Text>}
    </View>
);

export default BillToAddress