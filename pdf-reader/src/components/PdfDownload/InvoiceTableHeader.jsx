import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const borderColor = 'black'
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderBottomColor: 'black',
        backgroundColor: '#bff0fd',
        borderBottomWidth: 1,
        alignItems: 'baseline',
        height: 28,
        textAlign: 'center',
        fontStyle: 'bold',
        flexGrow: 1,
    },
    sNo: {
        width: "10%",
        borderRightColor: borderColor,
        borderRightWidth: 1,
        alignItems: 'center',
        padding: '5px 0',
        borderLeftColor: borderColor,
        borderLeftWidth: 1,
    },
    description: {
        width: '30%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        alignItems: 'center',
        padding: 5
    },
    unit: {
        width: "15%",
        borderRightColor: borderColor,
        borderRightWidth: 1,
        alignItems: 'center',
        padding: 5
    },
    qty: {
        width: '8%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        alignItems: 'center',
        padding: 5
    },
    rate: {
        width: '15%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        alignItems: 'center',
        padding: '5px 0'
    },
    amount: {
        width: '22%',
        alignItems: 'center',
        padding: '5px 0',
        borderRightColor: borderColor,
        borderRightWidth: 1,
    },
});

const InvoiceTableHeader = () => (
    <View style={styles.container}>
        <Text style={styles.sNo}>S.NO</Text>
        <Text style={styles.description}>Item Description</Text>
        <Text style={styles.unit}>Unit Price</Text>
        <Text style={styles.qty}>Qty</Text>
        <Text style={styles.rate}>Net Amount</Text>
        <Text style={styles.amount}>Total Amount</Text>
    </View>
);

export default InvoiceTableHeader