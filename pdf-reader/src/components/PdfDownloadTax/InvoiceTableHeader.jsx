import React from 'react';
import { Text, View, StyleSheet, Font } from '@react-pdf/renderer';


Font.registerHyphenationCallback(word => {
    // Return entire word as unique part
    return [word + ""];
});
const borderColor = 'black'
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderBottomColor: 'black',
        backgroundColor: '#bff0fd',
        borderBottomWidth: 1,
        alignItems: 'baseline',
        height: 38,
        textAlign: 'center',
        fontStyle: 'bold',
        flexGrow: 1,
    },
    sNo: {
        width: "8%",
        borderRightColor: borderColor,
        borderRightWidth: 1,
        alignItems: 'center',
        textAlign: 'center',
        padding: '5px 0',
        height: 38,
        borderLeftColor: borderColor,
        borderLeftWidth: 1,

    },
    description: {
        width: '25%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        alignItems: 'center',
        textAlign: 'center',
        padding: '5px 0',
        height: 38
    },
    unit: {
        width: "8%",
        borderRightColor: borderColor,
        borderRightWidth: 1,
        alignItems: 'center',
        textAlign: 'center',
        // padding: '5px 0',
        height: 38
    },
    qty: {
        width: '5%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        alignItems: 'center',
        textAlign: 'center',
        padding: '5px 0',
        height: 38
    },
    rate: {
        width: '10%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        alignItems: 'center',
        textAlign: 'center',
        // padding: '5px 0',
        height: 38
    },
    amount: {
        width: '15%',
        alignItems: 'center',
        textAlign: 'center',
        // padding: '5px 0',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        height: 38
    },
    taxRate: {
        width: '10%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        alignItems: 'center',
        textAlign: 'center',
        // padding: '5px 0',
        height: 38
    },
    taxType: {
        width: '7%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        alignItems: 'center',
        textAlign: 'center',
        padding: '5px 0',
        flex: 1,
        height: 38
    },
    taxAmount: {
        width: '10%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        alignItems: 'center',
        textAlign: 'center',
        // padding: '5px 0',
        height: 38
    },
    taxTypeContainer: {
        width: '9%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        alignItems: 'center',
        textAlign: 'center',
        height: 38,
        padding: '0 5px',
        flexDirection: 'row'
    }
});
const Br = () => "\n";
const InvoiceTableHeader = () => (
    <View style={styles.container}>
        <Text style={styles.sNo}>S.NO</Text>
        <Text style={styles.description}>Item Description</Text>
        <Text style={styles.unit}>
            <Text>Unit</Text>
            <Text>Price</Text>
        </Text>
        <Text style={styles.qty}>Qty</Text>
        <Text style={styles.rate}>
            <Text>Net</Text>
            <Text>Amount</Text>
        </Text>
        <Text style={styles.taxRate}>
            <Text>Tax</Text>
            <Text>{` Rate`}</Text>
        </Text>
        <Text style={styles.taxTypeContainer}>
            <Text >Tax</Text>
            <Text >Type</Text>
        </Text>
        <Text style={styles.taxAmount}>
            <Text >Tax</Text>
            <Text >Amount</Text>
        </Text>
        <Text style={styles.amount}>
            <Text >Total</Text>
            <Text >{` Amount`}</Text>
        </Text>
    </View>
);

export default InvoiceTableHeader