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
        color: 'white',
        flexGrow: 3

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
        textAlign: 'left',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        padding: 5,
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
        textAlign: 'right',
        padding: 5,
    },
    rate: {
        width: '15%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        textAlign: 'right',
        padding: 5,
    },
    amount: {
        width: '12%',
        textAlign: 'right',
        padding: 5,
    },
});
const InvoiceTableBlankSpace = ({ rowsCount }) => {
    const blankRows = Array(rowsCount).fill(0)
    const rows = blankRows.map((x, i) =>
        <View style={styles.row} key={`BR${i}`}>
            <Text style={styles.sNo}>-</Text>
            <Text style={styles.description}>-</Text>
            <Text style={styles.unit}>-</Text>
            <Text style={styles.qty}>-</Text>
            <Text style={styles.rate}>-</Text>
            <Text style={styles.amount}>-</Text>
        </View>
    )
    return (<Fragment>{rows}</Fragment>)
};

export default InvoiceTableBlankSpace