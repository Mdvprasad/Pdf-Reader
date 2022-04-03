import React from 'react';
import './App.css';
import PdfDownload from './components/PdfDownload/PdfDownload';
import PdfDownloadTax from './components/PdfDownloadTax/PdfDownloadTax';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Pdf Downloader
      </header>
      <PdfDownload />
      <PdfDownloadTax />
    </div>
  );
}

export default App;
