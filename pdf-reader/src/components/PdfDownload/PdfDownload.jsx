import React from "react";
import PdfDocument from "./PdfDocument";
import Invoice from "./Invoice";
import data from "../../data.json";

const PdfDownload = () => {

    return (
        //passing data values based on our requirement to separate tax based and without tax based pdfs
        <>
            <section>
                <h3>Tax-less PDF is available here for download</h3>
                {data && (
                    <PdfDocument
                        title="Invoice-without-Tax"
                        document={<Invoice data={data.data[0]} />}
                    />
                )}
            </section>
        </>
    );
};

export default PdfDownload