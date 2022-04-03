import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import { ToWords } from 'to-words';

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
        width: '35%',
        textAlign: 'center',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        padding: 4.5,

    },
    total: {
        width: '65%',
        textAlign: 'left',
        padding: 4.5,

    },
});


const InvoiceAmountInWords = ({ items }) => {
    const toWords = new ToWords({
        localeCode: 'en-US',
        converterOptions: {
            currency: true,
            ignoreDecimal: false,
            ignoreZeroCurrency: false,
            doNotAddOnly: false,
        }
    });
    const total = items.map(item => item.quantity * item.price)
        .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    let words = toWords.convert(total);
    return (
        <View style={styles.row}>
            <Text style={styles.description}>AMOUNT IN WORDS</Text>
            <Text style={styles.total}>{words}</Text>
        </View>
    )
};

export default InvoiceAmountInWords