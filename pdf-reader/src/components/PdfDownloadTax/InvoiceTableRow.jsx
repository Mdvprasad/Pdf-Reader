import React, { Fragment } from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const borderColor = 'black'
const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        alignItems: 'center',
        height: 28,
        fontStyle: 'bold',
        flexGrow: 2

    },
    sNo: {
        width: "8%",
        borderRightColor: borderColor,
        borderRightWidth: 1,
        textAlign: 'center',
        padding: 5
    },
    description: {
        width: '25%',
        textAlign: 'left',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        padding: 5,
    },
    unit: {
        width: "8%",
        borderRightColor: borderColor,
        borderRightWidth: 1,
        textAlign: 'center',
        padding: 5
    },
    qty: {
        width: '5%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        textAlign: 'center',
        padding: 5,
    },
    rate: {
        width: '10%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        textAlign: 'center',
        padding: 5,
    },
    amount: {
        width: '12%',
        textAlign: 'center',
        padding: 5,
    },
    taxRate: {
        width: '10%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        alignItems: 'center',
        padding: '5px 0',
        height: 28,
        textAlign: 'center'
    },
    taxType: {
        width: '7%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        alignItems: 'center',
        padding: '5px 0',
        flex: 1,
        height: 28,
        textAlign: 'center'
    },
    taxAmount: {
        width: '10%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        alignItems: 'center',
        padding: '5px 0',
        height: 28,
        textAlign: 'center'
    }
});


const InvoiceTableRow = ({ items }) => {
    const rows = items.map(item =>
        <View style={styles.row} key={item.id.toString()}>
            <Text style={styles.sNo}>{item.id}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <Text style={styles.unit}>{item.price}</Text>
            <Text style={styles.qty}>{item.quantity}</Text>
            <Text style={styles.rate}>{(item.quantity * item.price).toFixed(2)}</Text>
            <Text style={styles.taxRate}>{item.tax_rate}</Text>
            <Text style={styles.taxType}>{item.tax_type}</Text>
            <Text style={styles.taxAmount}>{(item.quantity * item.price * item.tax_rate / 100).toFixed(2)}</Text>
            <Text style={styles.amount}>
                {((item.quantity * item.price) + (item.quantity * item.price * item.tax_rate / 100)).toFixed(2)}</Text>
        </View>
    )
    return (<Fragment>{rows}</Fragment>)
};

export default InvoiceTableRow