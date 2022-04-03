import React from 'react';
import { View, StyleSheet } from '@react-pdf/renderer';
import InvoiceTableHeader from './InvoiceTableHeader'
import InvoiceTableRow from './InvoiceTableRow'
import InvoiceTableBlankSpace from './InvoiceTableBlankSpace'
import InvoiceTableFooter from './InvoiceTableFooter'
import InvoiceAmountInWords from './InvoiceAmountInWords';
import InvoiceDigitalMessage from './InvoiceDigitalMessage';

const tableRowsCount = 30;

const styles = StyleSheet.create({
    tableContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 24,
        borderWidth: 1,
        borderColor: 'black',
    },
});

const InvoiceItemsTable = ({ invoice }) => (
    <View style={styles.tableContainer}>
        <InvoiceTableHeader />
        <InvoiceTableRow items={invoice.ordered_items} />
        <InvoiceTableBlankSpace rowsCount={tableRowsCount - invoice.ordered_items.length} />
        <InvoiceTableFooter items={invoice.ordered_items} />
        <InvoiceAmountInWords items={invoice.ordered_items} />
        <InvoiceDigitalMessage message="This is a digitally generated invoice." />
    </View>
);

export default InvoiceItemsTable