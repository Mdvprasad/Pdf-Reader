Steps for React PDF Download application

Install React PDF package
Make Data as per the requirement(if starting from scratch)
Now make files separate for PDF document, download and invoice
Make design as per UI requirement

1. Install React PDF package  @react-pdf/renderer
In @react-pdf/renderer we have multiple components to make our pdf more ui friendly.

We will use these below pdf package components to make the pdf for our requirement

<Document /> represents the PDF document itself. It must be the root of the document tree element structure. It should only contain children of type <Page /> component.
<Page /> represents a single page within a PDF document. <Page /> has a default size of A4 with a portrait orientation.
<View /> is the fundamental component used for building the UI. It is designed to be nested inside other views and can have zero or more child components.
<Text /> component is used for displaying text. It supports nesting of other <Text /> components.
<Image /> component is used for displaying images. Images may be JPG, PNG or base64 encoded image strings.
<BlobProvider /> Easy and declarative way of getting document's blob data without showing it on screen
2. Make Sample data as per the requirement to render as pdf(in this repo we have sample json file but we can replace them with Api also)
3. Make Separate files PdfDocument, PdfDownload and invoice files . 
Here Pdf Document is representation of document component made from the react pdf package (follow documentation from React PDF)
4. Making UI. As per the UI requirement we will create the invoice component.
We need use flexbox css here for most of the parts and StyleSheet component to apply the styles for the UI components
We will use Document,Page,View,Text,Image components from react pdf package
Document meant for entire PDF file
Page is rendering the respective page,
View here acts as block we will use thing as  separator , container etc,
Text component to display the text, values etc
Image to hold Logo(in this repo you can replace your logo which is in assets directory with same name as logo.jpeg)

Useful points if you want the header all along the remaining pages just add fixed to view or text or whichever you wanted then it will remains for all the pages 
For this project we just added another package to convert numbers to text for(Amount in words section) “to-words”  To change value of currency update localeCode to ‘en-US’ to get US dollars                                                                                                                  




