import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const borderColor = 'black'
const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        alignItems: 'center',
        height: 28,
        fontSize: 12,
        fontStyle: 'bold',
        flexGrow: '3'
    },
    description: {
        width: '46%',
        textAlign: 'left',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        padding: '4.7px 0',
        height: 28,
        borderLeftColor: borderColor,
        borderLeftWidth: 1,
    },
    net: {
        width: '10%',
        textAlign: 'center',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        padding: '4.7px 0',
        height: 28,
    },
    empty: {
        width: "19%",
        textAlign: 'center',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        padding: '4.7px 0',
        height: 28,
        color: 'white'
    },
    taxAmount: {
        width: "10%",
        textAlign: 'center',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        padding: '4.7px 0',
        height: 28,
    },
    total: {
        width: '15%',
        textAlign: 'center',
        padding: '4.7px 0',
        height: 28,
        borderRightColor: borderColor,
        borderRightWidth: 1,
    },
});

const InvoiceTableFooter = ({ items }) => {
    const total = items.map(item => item.quantity * item.price)
        .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    const gstTotal = items.map(item => (item.quantity * item.price * item.tax_rate / 100))
        .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    return (
        <View style={styles.row}>
            <Text style={styles.description}>TOTAL</Text>
            <Text style={styles.net}>{`$${total}`}</Text>
            <Text style={styles.empty}>-</Text>
            <Text style={styles.taxAmount}>{`$${gstTotal.toFixed(2)}`}</Text>
            <Text style={styles.total}>{`$${total + gstTotal}`}</Text>
        </View>
    )
};

export default InvoiceTableFooter