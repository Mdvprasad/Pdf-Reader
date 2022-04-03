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
        padding: 5
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
        padding: 5
    },
    amount: {
        width: '12%',
        alignItems: 'center',
        padding: 5
    },
});

const InvoiceTableHeader = () => (
    <View style={styles.container}>
        <Text style={styles.sNo}>S.NO</Text>
        <Text style={styles.description}>Item Description</Text>
        <Text style={styles.unit}>Unit Price</Text>
        <Text style={styles.qty}>Qty</Text>
        <Text style={styles.rate}>Net</Text>
        <Text style={styles.amount}>Total</Text>
    </View>
);

export default InvoiceTableHeader