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
        width: "8%",
        borderRightColor: borderColor,
        borderRightWidth: 1,
        alignItems: 'center',
        padding: '5px 0',
        height: 28,

    },
    description: {
        width: '25%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        alignItems: 'center',
        padding: '5px 0',
        height: 28
    },
    unit: {
        width: "8%",
        borderRightColor: borderColor,
        borderRightWidth: 1,
        alignItems: 'center',
        padding: '5px 0',
        height: 28
    },
    qty: {
        width: '5%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        alignItems: 'center',
        padding: '5px 0',
        height: 28
    },
    rate: {
        width: '10%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        alignItems: 'center',
        padding: '5px 0',
        height: 28
    },
    amount: {
        width: '12%',
        alignItems: 'center',
        padding: '5px 0',
        height: 28
    },
    taxRate: {
        width: '10%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        alignItems: 'center',
        padding: '5px 0',
        height: 28
    },
    taxType: {
        width: '7%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        alignItems: 'center',
        padding: '5px 0',
        flex: 1,
        height: 28
    },
    taxAmount: {
        width: '10%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        alignItems: 'center',
        padding: '5px 0',
        height: 28
    }
});

const InvoiceTableHeader = () => (
    <View style={styles.container}>
        <Text style={styles.sNo}>S.NO</Text>
        <Text style={styles.description}>Item Description</Text>
        <Text style={styles.unit}>Price</Text>
        <Text style={styles.qty}>Qty</Text>
        <Text style={styles.rate}>Net</Text>
        <Text style={styles.taxRate}>Tax %</Text>
        <Text style={styles.taxType}>Type</Text>
        <Text style={styles.taxAmount}>Tax</Text>
        <Text style={styles.amount}>Total</Text>
    </View>
);

export default InvoiceTableHeader