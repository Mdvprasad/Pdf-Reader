import React, { Fragment } from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    invoiceNoContainer: {
        flexDirection: 'row',
        marginTop: 2,
        justifyContent: 'flex-start'
    },
    invoiceDateContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    invoiceDate: {
        fontSize: 12,
        fontStyle: 'bold',
    },
    label: {
        width: 60,
        fontSize: 14,
        fontWeight: "bold"
    }

});


const InvoiceGstNo = ({ invoice }) => (
    <Fragment>
        <View style={styles.invoiceNoContainer}>
            <Text style={styles.label}>Pan No:</Text>
            <Text>{invoice.pan_no}</Text>
        </View >
        <View style={styles.invoiceDateContainer}>
            <Text style={styles.label}>GST No: </Text>
            <Text >{invoice.gst_no}</Text>
        </View >
    </Fragment>
);

export default InvoiceGstNo