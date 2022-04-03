import React from "react";
import PdfDocument from "./PdfDocument";
import data from "../../data.json";
import InvoiceTax from "./InvoiceTax";

const PdfDownloadTax = () => {

    return (
        //passing data values based on our requirement to separate tax based and without tax based pdfs
        <>

            <section>
                <h3>Tax-based PDF is available here for download</h3>
                {data && (
                    <PdfDocument
                        title="Invoice-with-Tax"
                        document={<InvoiceTax data={data.data[1]} />}
                    />
                )}
            </section>


        </>
    );
};

export default PdfDownloadTax