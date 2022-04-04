import React from "react";
import {
    Document,
    Font,
    Page,
    StyleSheet,
    Text,
    View,
    Image
} from "@react-pdf/renderer";
import logo from '../../assets/logo.jpg'
import InvoiceItemsTable from "./InvoiceItemsTable";
import BillToAddress from "./BillToAddress";
import InvoiceNo from "./InvoiceNo";
import InvoiceTitle from "./InvoiceTitle";
import SoldByAddress from "./SoldByAddress";
// export const styles = StyleSheet.create({
//     font: { fontFamily: "Oswald" }
// });
const styles = StyleSheet.create({
    subTitle: {
        fontWeight: 'bolder',
        textTransform: 'capitalize',
        fontSize: 20,
    },
    subTitleContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    tableContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
    },
    page: {
        fontFamily: 'Helvetica',
        fontSize: 11,
        paddingTop: 30,
        paddingLeft: 60,
        paddingRight: 60,
        lineHeight: 1.5,
        flexDirection: 'column',
    },
    logo: {
        width: 150,
        height: 75,
        float: 'left'
    }
});

const Invoice = ({ data }) => {
    const { invoice } = data;
    const { taxable, sold_to_address, bill_to_address, name, id, ordered_items } = invoice;
    if (invoice) {
        return (
            <Document>
                <Page size="A4" style={styles.page}>
                    <View style={{ padding: "20px" }}>
                        <Image style={styles.logo} src={logo} fixed />
                        <View style={styles.subTitleContainer} fixed>
                            <Text style={styles.subTitle}>Tax Invoice</Text>
                        </View>

                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <SoldByAddress address={invoice.sold_to_address} name={name} />
                            <BillToAddress address={invoice.bill_to_address} name={name} />
                        </View>
                        <InvoiceNo invoice={invoice} />

                        <InvoiceItemsTable invoice={invoice} />
                    </View>
                </Page>
            </Document>
        );
    } else
        return (
            <Document>
                <Page size="A4">
                    <View>
                        <Text>This Pdf could not be generated</Text>
                    </View>
                </Page>
            </Document>
        );
};

export default Invoice;
