import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const borderColor = 'black'
const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        // borderBottomColor: 'black',
        // borderBottomWidth: 1,
        alignItems: 'center',
        height: 28,
        fontSize: 12,
        fontStyle: 'bold',
    },
    description: {
        width: '100%',
        textAlign: 'center',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        padding: 5,

    },
});


const InvoiceDigitalMessage = ({ message }) => {
    return (
        <View style={styles.row}>
            <Text style={styles.description}>{message}</Text>
        </View>
    )
};

export default InvoiceDigitalMessage