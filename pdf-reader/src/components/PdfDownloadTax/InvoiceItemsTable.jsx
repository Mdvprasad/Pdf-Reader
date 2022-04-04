import React from 'react';
import { View, StyleSheet } from '@react-pdf/renderer';
import InvoiceTableHeader from './InvoiceTableHeader'
import InvoiceTableRow from './InvoiceTableRow'
import InvoiceTableBlankSpace from './InvoiceTableBlankSpace'
import InvoiceTableFooter from './InvoiceTableFooter'
import InvoiceAmountInWords from './InvoiceAmountInWords';
import InvoiceDigitalMessage from './InvoiceDigitalMessage';

const tableRowsCount = 20;

const styles = StyleSheet.create({
    tableContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 24,
        borderTopWidth: 1,
        borderTopColor: 'black',
        borderBottomWidth: 1,
        borderBottomColor: 'black',
    },
});
// enable InvoiceTableBlankSpace component if needed for future use
const InvoiceItemsTable = ({ invoice }) => (
    <View style={styles.tableContainer}>
        <InvoiceTableHeader />
        <InvoiceTableRow items={invoice.ordered_items} />
        {/* <InvoiceTableBlankSpace rowsCount={tableRowsCount - invoice.ordered_items.length} /> */}
        <InvoiceTableFooter items={invoice.ordered_items} />
        <InvoiceAmountInWords items={invoice.ordered_items} />
        <InvoiceDigitalMessage message="This is a digitally generated invoice." />
    </View>
);

export default InvoiceItemsTable