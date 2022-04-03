import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({

    titleContainer: {
        flexDirection: 'row',
        marginTop: 24,
    },
    reportTitle: {
        color: 'black',
        letterSpacing: 4,
        fontSize: 25,
        textAlign: 'end',
        textTransform: 'uppercase',
    }
});


const InvoiceTitle = () => (
    <View style={styles.titleContainer}>
        <Text style={styles.reportTitle}>Invoice</Text>
    </View>
);

export default InvoiceTitle