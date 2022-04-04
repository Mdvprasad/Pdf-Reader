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
    },
    description: {
        width: '78%',
        textAlign: 'center',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        padding: 4.5,
        borderLeftColor: borderColor,
        borderLeftWidth: 1,
    },
    total: {
        width: '22%',
        textAlign: 'center',
        padding: 4.5,
        borderRightColor: borderColor,
        borderRightWidth: 1,
    },
});


const InvoiceTableFooter = ({ items }) => {
    const total = items.map(item => item.quantity * item.price)
        .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    return (
        <View style={styles.row}>
            <Text style={styles.description}>TOTAL</Text>
            <Text style={styles.total}>{`$${Number.parseFloat(total).toFixed(2)}`}</Text>
        </View>
    )
};

export default InvoiceTableFooter